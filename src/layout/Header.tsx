import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-3xl font-bold">The Movie Tracker</h1>
      <nav>
        <NavLink className="m-4" to="/">
          Home
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;