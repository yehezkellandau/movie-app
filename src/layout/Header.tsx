import { useAuthContext } from "@/context/AuthContext";
import { NavLink } from "react-router";

const Header = () => {
  const {isAuthenticated} = useAuthContext();
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-3xl font-bold">The Movie Tracker</h1>
      <nav>
        <NavLink className="m-4" to="/">
          Home
        </NavLink>
        { isAuthenticated ?  <NavLink className="m-4" to="/profile">
          Profile
        </NavLink> : <NavLink className="m-4" to="/login">
          Login
        </NavLink>}
      </nav>
    </header>
  );
};

export default Header;