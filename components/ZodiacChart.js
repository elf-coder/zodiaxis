export default function ZodiacChart({ rootLon, shadowLon }) {
  const signs = [
    "Koç", "Boğa", "İkizler", "Yengeç", "Aslan", "Başak",
    "Terazi", "Akrep", "Yılancı", "Yay", "Oğlak", "Kova", "Balık"
  ];
  const radius = 120;

  return (
    <svg viewBox="-150 -150 300 300" className="mx-auto block my-6">
      <circle r={radius} fill="none" stroke="#2D2F4A" strokeWidth="2" />
      {signs.map((s, i) => {
        const angle = (i / signs.length) * 2 * Math.PI;
        const x = Math.sin(angle) * (radius + 15);
        const y = -Math.cos(angle) * (radius + 15);
        return (
          <text key={s} x={x} y={y} textAnchor="middle"
                fill="#E6E6FA" fontSize="10">{s}</text>
        );
      })}
      {/* Kök ve Gölge okları */}
      <line x1="0" y1="0" x2={Math.sin(rootLon * Math.PI/180) * radius}
            y2={-Math.cos(rootLon * Math.PI/180) * radius}
            stroke="#A855F7" strokeWidth="3" />
      <line x1="0" y1="0" x2={Math.sin(shadowLon * Math.PI/180) * radius}
            y2={-Math.cos(shadowLon * Math.PI/180) * radius}
            stroke="#00FFC6" strokeWidth="3" />
      <circle r="5" fill="#E6E6FA" />
    </svg>
  );
}
