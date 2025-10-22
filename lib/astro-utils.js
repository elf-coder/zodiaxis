// Minimal astronomy helpers (demo-grade). In production, replace with Swiss Ephemeris.
const DEG = Math.PI/180;
function normalize(x){ x%=360; if(x<0)x+=360; return x; }

// IAU-like ecliptic sectors (approx) including Ophiuchus between Scorpio & Sagittarius.
const CONSTELLATION_BOUNDARIES = [
  { sign:'Koç', start:   0 },
  { sign:'Boğa', start:  30 },
  { sign:'İkizler', start:  60 },
  { sign:'Yengeç', start:  90 },
  { sign:'Aslan', start: 120 },
  { sign:'Başak', start: 150 },
  { sign:'Terazi', start:180 },
  { sign:'Akrep', start: 210 },
  { sign:'Yılancı', start:240 }, // Ophiuchus
  { sign:'Yay', start:   270 },
  { sign:'Oğlak', start: 300 },
  { sign:'Kova', start:  330 },
  { sign:'Balık', start:  350 } // wraps to 360/0 (approx edge)
];

export function getSign(lon){
  const L = normalize(lon);
  for (let i=0;i<CONSTELLATION_BOUNDARIES.length;i++){
    const cur = CONSTELLATION_BOUNDARIES[i];
    const next = CONSTELLATION_BOUNDARIES[(i+1)%CONSTELLATION_BOUNDARIES.length];
    if (cur.start < next.start){
      if (L >= cur.start && L < next.start){
        return {sign:cur.sign, degWithinSign: L - cur.start};
      }
    } else {
      // wrap
      if (L >= cur.start || L < next.start){
        const base = (L >= cur.start) ? cur.start : (cur.start-360);
        return {sign:cur.sign, degWithinSign: L - base};
      }
    }
  }
  return {sign:'Bilinmiyor', degWithinSign:0};
}

// super simplified demo solar longitude (do NOT use for production accuracy)
export function sunEclipticLongitude(date){
  const d = (date.getTime()/86400000) - (25567.5); // rough JD offset baseline
  const mean = normalize(280.460 + 0.9856474 * d);
  const anomaly = normalize(357.528 + 0.9856003 * d) * DEG;
  const eclipLon = mean + 1.915*Math.sin(anomaly) + 0.020*Math.sin(2*anomaly);
  return normalize(eclipLon);
}

// fake ascendant (for demo); for real use Swiss Ephemeris
// More precise ascendant using standard astronomical formulas (GMST/LST + obliquity)
// References: Meeus (Astronomical Algorithms) approximations
function julianDay(date){
  // Date is JS Date in UTC
  let Y = date.getUTCFullYear()
  let M = date.getUTCMonth() + 1
  const D = date.getUTCDate() + (date.getUTCHours() + (date.getUTCMinutes() + date.getUTCSeconds()/60)/60)/24
  let A = Math.floor(Y/100)
  let B = 2 - A + Math.floor(A/4)
  if (Y < 1582 || (Y === 1582 && (M < 10 || (M === 10 && D < 15)))) {
    B = 0  // pre-Gregorian; safe fallback
  }
  if (M <= 2){
    M += 12
    Y -= 1
  }
  const JD = Math.floor(365.25*(Y+4716)) + Math.floor(30.6001*(M+1)) + D + B - 1524.5
  return JD
}

// Mean obliquity of the ecliptic (arcseconds -> degrees)
function meanObliquityDeg(JD){
  const T = (JD - 2451545.0)/36525.0
  const seconds = 84381.448 - 46.8150*T - 0.00059*T*T + 0.001813*T*T*T
  return seconds/3600.0
}

// Greenwich Mean Sidereal Time in degrees
function gmstDeg(JD){
  const T = (JD - 2451545.0)/36525.0
  let gmst = 280.46061837 + 360.98564736629*(JD - 2451545.0) + 0.000387933*T*T - (T*T*T)/38710000.0
  return normalize(gmst)
}

// Accurate ascendant longitude (degrees). lat, lon in degrees (lon east positive).
export function ascendantLongitude(date, lat, lon){
  const JD = julianDay(date)
  const eps = meanObliquityDeg(JD)*DEG
  const phi = lat*DEG
  const theta = (gmstDeg(JD) + lon)*DEG  // Local Sidereal Angle
  // λA = atan2( sin θ , cos θ * sin ε - tan φ * cos ε )
  const sinTheta = Math.sin(theta)
  const cosTheta = Math.cos(theta)
  const tanPhi = Math.tan(phi)
  const y = sinTheta
  const x = (cosTheta * Math.sin(eps)) - (tanPhi * Math.cos(eps))
  let lambda = Math.atan2(y, x)/DEG
  return normalize(lambda)
}

export function computeAxes(sunLon, ascLon){
  const rootLon = normalize(sunLon + 180);     // Güneş'in karşısı
  const shadowLon = normalize(ascLon + 180);   // Yükselen'in karşısı
  const root = getSign(rootLon);
  const shadow = getSign(shadowLon);
  return {
    rootLon, shadowLon,
    rootSign: root.sign, rootDeg: root.degWithinSign,
    shadowSign: shadow.sign, shadowDeg: shadow.degWithinSign
  };
}


export function dailyEffect(date, rootLon, shadowLon){
  // toy daily phase based on day of year
  const start = new Date(date.getFullYear(),0,0);
  const diff = date - start;
  const doy = Math.floor(diff/86400000);
  return {
    root: ((doy % 3)===0)?'yüksek':((doy%3)===1?'orta':'düşük'),
    shadow: ((doy % 4)===0)?'tetiklenmiş':'sakin'
  };
}
