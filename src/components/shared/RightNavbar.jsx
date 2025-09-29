import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../../hook/useAuthContext";

const RightNavbar = () => {
  const {logoutUser} = useAuthContext()
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar avatar-online"
      >
        <div className="w-10 rounded-full">
          <img
            alt="User avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li>
          <NavLink to='dashboard'>Dashboard</NavLink>
        </li>
        <li>
          <button onClick={logoutUser} className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default RightNavbar;
