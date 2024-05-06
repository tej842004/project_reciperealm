import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import useTheme from "../hooks/useTheme";
import "./navbar.css";

const NavBar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Recipe Realm</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default NavBar;
