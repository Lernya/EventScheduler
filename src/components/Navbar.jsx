import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar bg-base-300 shadow-xl">
      <div className="flex-1">
        <Link to="/">
          <button className="btn btn-ghost text-xl">Events</button>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
