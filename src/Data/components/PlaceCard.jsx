import { useNavigate } from "react-router-dom";

export default function PlaceCard({ place }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/place/${place.id}`, { state: place })}
      className="cursor-pointer p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-accent transition"
    >
      <h3 className="text-xl font-semibold mb-1">{place.name}</h3>
      <p className="text-slate-400 mb-3">{place.city}</p>

      <div className="text-sm space-y-1">
        <p>💰 Cost: {place.cost}</p>
        <p>🛂 Visa: {place.visa}</p>
        <p>💼 Jobs: {place.jobs}</p>
        <p>🛡 Safety: {place.safety}</p>
      </div>
    </div>
  );
}
