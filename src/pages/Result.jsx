import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import countries from "../data/countries";
import { rankCountries } from "../logic/decisionLogic";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [activeCountry, setActiveCountry] = useState(null);

  // Safety redirect
  if (!state) {
    navigate("/analyze");
    return null;
  }

  const {
    category,
    toRegion,
    age,
    gender,
    fieldOfStudy,
    studentGoal,
    familyMembers,
    bachelorSkill,
  } = state;

  // 1️⃣ Filter by region
  const regionCountries = countries.filter(
    (country) => country.region === toRegion
  );

  // 2️⃣ Rank using decision logic
  const rankedCountries = rankCountries(regionCountries, state);

  // 3️⃣ Keep only relevant categories
  const finalCountries = rankedCountries.filter((country) =>
    country.suitableFor.includes(category)
  );

  return (
    <div className="min-h-screen px-4 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Recommended Countries for You
      </h1>

      {/* AI Transparency Line */}
      <p className="text-center text-sm text-gray-600 mt-2 mb-8">
        Analysis generated using AI on top of curated migration criteria
        and weighted scoring logic.
      </p>

      {/* COUNTRY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {finalCountries.map((country) => (
          <div
            key={country.id}
            onClick={() => setActiveCountry(country)}
            className="cursor-pointer p-6 rounded-2xl shadow-xl bg-white text-gray-900 hover:scale-105 transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-bold">{country.name}</h2>
              <span className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full">
                Score: {country.score}
              </span>
            </div>

            <p className="text-sm text-gray-700 mb-2">
              <strong>Visa:</strong> {country.visa}
            </p>

            <p className="text-sm text-gray-700 mb-2">
              <strong>Cost of Living:</strong> {country.cost}
            </p>

            <p className="text-sm text-gray-600">
              {country.why[category]}
            </p>
          </div>
        ))}
      </div>

      {/* DETAILED COUNTRY VIEW */}
      {activeCountry && (
        <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {activeCountry.name}
          </h2>

          <p className="text-gray-800 mb-4">
            <strong>People & Culture:</strong> {activeCountry.people}
          </p>

          <p className="text-gray-800 mb-4">
            <strong>Job Opportunities:</strong>{" "}
            {activeCountry.jobs.join(", ")}
          </p>

          <p className="text-gray-800 mb-6">
            <strong>Why this fits you:</strong>{" "}
            {activeCountry.why[category]}
          </p>

          <p className="text-gray-600 mb-6">
            This recommendation is generated based on your profile —
            age ({age}), gender ({gender}),
            {category === "student" && ` academic background in ${fieldOfStudy}`}
            {category === "bachelor" && ` skillset in ${bachelorSkill}`}
            {category === "family" && ` family size of ${familyMembers}`} —
            and comparative migration scoring logic.
          </p>

          <button
            onClick={() => setActiveCountry(null)}
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Close
          </button>
        </div>
      )}

      {/* Legal Disclaimer */}
      <p className="text-center text-xs text-gray-500 mt-16">
        This platform is a decision-support tool and does not constitute
        legal or immigration advice.
      </p>
    </div>
  );
}
