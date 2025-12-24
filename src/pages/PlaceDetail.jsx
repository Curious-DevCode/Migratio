import { useParams, useNavigate } from "react-router-dom";
import countries from "../data/countries";

export default function PlaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const country = countries.find((c) => c.id === id);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Country not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {country.name}
        </h1>

        <p className="text-gray-800 mb-4">
          <strong>Visa Options:</strong> {country.visa}
        </p>

        <p className="text-gray-800 mb-4">
          <strong>Cost of Living:</strong> {country.cost}
        </p>

        <p className="text-gray-800 mb-4">
          <strong>Language:</strong> {country.language}
        </p>

        <p className="text-gray-700 mb-6">
          <strong>People & Culture:</strong> {country.people}
        </p>

        <p className="text-gray-700 mb-6">
          <strong>Education System:</strong> {country.education}
        </p>

        <p className="text-gray-700 mb-6">
          <strong>Economic Insight:</strong> {country.economyInsight}
        </p>

        <p className="text-gray-700 mb-6">
          <strong>Risk Factors:</strong> {country.risks}
        </p>

        <p className="text-gray-700 mb-8">
          <strong>Job Opportunities:</strong>{" "}
          {country.jobs.join(", ")}
        </p>

        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
