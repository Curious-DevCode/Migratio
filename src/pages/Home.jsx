import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4">
      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Get AI analysis of  
        <span className="block text-cyan-400 mt-2">
          where you should settle
        </span>
      </h2>

      <p className="mt-6 max-w-xl text-slate-400">
        Laws. Lifestyle. Currency. Reality — not influencer fantasy.
      </p>

      <button
        onClick={() => navigate("/analyze")}
        className="mt-10 px-8 py-4 bg-accent hover:opacity-90 text-black font-semibold rounded-xl transition"
      >
        Start Analysis
      </button>
    </section>
  );
}
