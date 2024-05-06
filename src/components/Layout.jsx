import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ThemeSelector from "./ThemeSelector";
import "./layout.css";
import useTheme from "../hooks/useTheme";

const Layout = () => {
  const { mode } = useTheme();
  return (
    <>
      <div className={`layout ${mode}`}>
        <NavBar />
        <ThemeSelector />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
