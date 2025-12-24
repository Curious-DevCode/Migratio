import { NavLink } from "react-router-dom";
import { PenLine, LineChart, Home, Search } from "lucide-react";

export default function Header() {
  const linkBase =
    "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition";

  const active =
    "bg-green-600 text-white shadow-md";

  const inactive =
    "text-gray-700 hover:bg-green-100 hover:text-green-700";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO / BRAND */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-green-700 tracking-tight"
        >
          Migratio
        </NavLink>

        {/* NAV TABS */}
        <nav className="flex gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/analyze"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <Search size={18} />
            Analyze
          </NavLink>

          <NavLink
            to="/market"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <LineChart size={18} />
            Market Analysis
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <PenLine size={18} />
            Blog
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
