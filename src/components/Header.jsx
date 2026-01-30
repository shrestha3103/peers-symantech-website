import { Link, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full backdrop-blur-sm z-50 shadow-sm ">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-1">
        
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} className="w-13 h-10" />
          <span className="font-semibold text-(--maroon)">
            PEERS SYMANTECH
          </span>
        </Link>

        <ul className="hidden md:flex gap-6 text-sm">
          {["home","about","services","clientele","contact"].map(item => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item, navigate)}
                className="hover:text-(--maroon) active:underline hover:underline"
              >
                {item.toUpperCase()}
              </button>
            </li>
          ))}

          <li>
            <Link
              to="/products"
              className="hover:text-(--maroon)"
            >
              PRODUCTS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
