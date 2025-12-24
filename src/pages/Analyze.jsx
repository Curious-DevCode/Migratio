import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AnalyzePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fromCountry: "india",
    toRegion: "",
    category: "",

    age: "",
    familyAgeRange: "",
    gender: "",

    studentBackground: "",
    fieldOfStudy: "",
    studentGoal: "",

    familyMembers: "",
    mainEarner: "",

    bachelorEducation: "",
    bachelorSkill: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    navigate("/result", { state: form });
  };

  // ✅ VALIDATION LOGIC
  const isValid =
    form.toRegion &&
    form.category &&
    form.gender &&
    (
      (form.category !== "family" && form.age) ||
      (form.category === "family" && form.familyAgeRange)
    );

  return (
    <div className="min-h-screen flex justify-center pt-24 bg-green-50">
      <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Migration Analysis
        </h2>

        {/* FROM COUNTRY */}
        <label className="block mb-2 font-medium text-gray-900">
          From Country
        </label>
        <select
          name="fromCountry"
          value={form.fromCountry}
          onChange={handleChange}
          className="w-full mb-4 p-3 bg-gray-100 border border-gray-300 rounded"
        >
          <option value="india">India</option>
        </select>

        {/* TARGET REGION */}
        <label className="block mb-2 font-medium text-gray-900">
          Target Region
        </label>
        <select
          name="toRegion"
          value={form.toRegion}
          onChange={handleChange}
          className="w-full mb-4 p-3 bg-gray-100 border border-gray-300 rounded"
        >
          <option value="">Select</option>
          <option value="europe">Europe</option>
          <option value="north-america">North America</option>
          <option value="australia">Australia</option>
        </select>

        {/* PROFILE TYPE */}
        <label className="block mb-2 font-medium text-gray-900">
          Profile Type
        </label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full mb-6 p-3 bg-gray-100 border border-gray-300 rounded"
        >
          <option value="">Select</option>
          <option value="student">Student</option>
          <option value="family">Family</option>
          <option value="bachelor">Bachelor</option>
        </select>

        {/* AGE — STUDENT & BACHELOR ONLY */}
        {form.category && form.category !== "family" && (
          <>
            <label className="block mb-2 font-medium text-gray-900">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              className="w-full mb-4 p-3 bg-gray-100 border border-gray-300 rounded"
            />
          </>
        )}

        {/* GENDER — ALL */}
        {form.category && (
          <>
            <label className="block mb-2 font-medium text-gray-900">
              Gender
            </label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full mb-6 p-3 bg-gray-100 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </>
        )}

        {/* STUDENT */}
        {form.category === "student" && (
          <>
            <label className="block mb-2 font-medium text-gray-900">
              Academic Background
            </label>
            <select
              name="studentBackground"
              value={form.studentBackground}
              onChange={handleChange}
              className="w-full mb-4 p-3 bg-gray-100 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
            </select>

            <label className="block mb-2 font-medium text-gray-900">
              Field of Study
            </label>
            <input
              name="fieldOfStudy"
              value={form.fieldOfStudy}
              onChange={handleChange}
              className="w-full mb-4 p-3 bg-gray-100 border border-gray-300 rounded"
            />

            <label className="block mb-2 font-medium text-gray-900">
              Primary Goal
            </label>
            <select
              name="studentGoal"
              value={form.studentGoal}
              onChange={handleChange}
              className="w-full mb-6 p-3 bg-gray-100 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="education">Education Only</option>
              <option value="education+job">Education + Job</option>
              <option value="permanent-settlement">
                Permanent Settlement
              </option>
            </select>
          </>
        )}

        {/* FAMILY */}
        {form.category === "family" && (
          <>
            <label className="block mb-2 font-medium text-gray-900">
              Age Distribution of Family Members
            </label>
            <select
              name="familyAgeRange"
              value={form.familyAgeRange}
              onChange={handleChange}
              className="w-full mb-4 p-3 bg-gray-100 border border-gray-300 rounded"
            >
              <option value="">Select</option>
              <option value="0-18">Children (0–18)</option>
              <option value="18-30">Young Dependents (18–30)</option>
              <option value="30-60">Working-age Family (30–60)</option>
              <option value="60+">Elderly Dependents (60+)</option>
            </select>

            <label className="block mb-2 font-medium text-gray-900">
              Total Family Members
            </label>
            <input
              type="number"
              name="familyMembers"
              value={form.familyMembers}
              onChange={handleChange}
              className="w-full mb-4 p-3 bg-gray-100 border border-gray-300 rounded"
            />

            <label className="block mb-2 font-medium text-gray-900">
              Main Source of Income
            </label>
            <input
              name="mainEarner"
              value={form.mainEarner}
              onChange={handleChange}
              className="w-full mb-6 p-3 bg-gray-100 border border-gray-300 rounded"
            />
          </>
        )}

        {/* BACHELOR */}
        {form.category === "bachelor" && (
          <>
            <label className="block mb-2 font-medium text-gray-900">
              Highest Education
            </label>
            <input
              name="bachelorEducation"
              value={form.bachelorEducation}
              onChange={handleChange}
              className="w-full mb-4 p-3 bg-gray-100 border border-gray-300 rounded"
            />

            <label className="block mb-2 font-medium text-gray-900">
              Primary Skill
            </label>
            <input
              name="bachelorSkill"
              value={form.bachelorSkill}
              onChange={handleChange}
              className="w-full mb-6 p-3 bg-gray-100 border border-gray-300 rounded"
            />
          </>
        )}

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className={`w-full py-3 rounded-xl font-semibold transition ${
            isValid
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Generate Analysis
        </button>

        {/* DISCLAIMER */}
        <p className="text-center text-xs text-gray-500 mt-6">
          This platform is a decision-support tool and does not constitute
          legal or immigration advice.
        </p>
      </div>
    </div>
  );
}
