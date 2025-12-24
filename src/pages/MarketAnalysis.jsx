export default function MarketAnalysisPage() {
  const markets = [
    {
      title: "Global Job Market",
      points: [
        "Tech hiring is stabilizing in North America",
        "Healthcare and skilled trades rising in Europe",
        "Australia facing talent shortages in construction",
      ],
    },
    {
      title: "Currency & Purchasing Power",
      points: [
        "USD strength impacts remittances positively",
        "EUR inflation affects family migration costs",
        "AUD volatility affects student affordability",
      ],
    },
    {
      title: "Economic Stability Signals",
      points: [
        "Interest rates cooling in developed economies",
        "Immigration caps tightening in some regions",
        "PR pathways linked to labor shortages",
      ],
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Global Market Analysis
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {markets.map((section, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              {section.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-500 mt-12">
        Market indicators are simplified representations for strategic
        decision support, not financial advice.
      </p>
    </div>
  );
}
