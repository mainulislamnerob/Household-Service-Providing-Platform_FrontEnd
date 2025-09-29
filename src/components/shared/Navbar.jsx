import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import RightNavbar from './RightNavbar';
import useAuthContext from '../../hook/useAuthContext';

const Navbar = () => {
  const { user, logoutUser } = useAuthContext()

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 border rounded-md transition-all duration-300 ${isActive
                    ? "text-red-600 border-red-600"
                    : "text-base-700 border-transparent"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services/"
                className={({ isActive }) =>
                  `px-4 py-2 border rounded-md transition-all duration-300 ${isActive
                    ? "text-red-600 border-red-600"
                    : "text-base-700 border-transparent"
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact/"
                className={({ isActive }) =>
                  `px-4 py-2 border rounded-md transition-all duration-300 ${isActive
                    ? "text-red-600 border-red-600"
                    : "text-base-700 border-transparent"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="shop/"
                className={({ isActive }) =>
                  `px-4 py-2 border rounded-md transition-all duration-300 ${isActive
                    ? "text-red-600 border-red-600"
                    : "text-base-700 border-transparent"
                  }`
                }
              >
                shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="team/"
                className={({ isActive }) =>
                  `px-4 py-2 border rounded-md transition-all duration-300 ${isActive
                    ? "text-red-600 border-red-600"
                    : "text-base-700 border-transparent"
                  }`
                }
              >
                Team
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">HouseHould Service Provideing</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 border rounded-md transition-all duration-300 ${isActive
                  ? "text-red-600 border-red-600"
                  : "text-base-700 border-transparent"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="services/"
              className={({ isActive }) =>
                `px-4 py-2 border rounded-md transition-all duration-300 ${isActive
                  ? "text-red-600 border-red-600"
                  : "text-base-700 border-transparent"
                }`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact/"
              className={({ isActive }) =>
                `px-4 py-2 border rounded-md transition-all duration-300 ${isActive
                  ? "text-red-600 border-red-600"
                  : "text-base-700 border-transparent"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shop/"
              className={({ isActive }) =>
                `px-4 py-2 border rounded-md transition-all duration-300 ${isActive
                  ? "text-red-600 border-red-600"
                  : "text-base-700 border-transparent"
                }`
              }
            >
              shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="team/"
              className={({ isActive }) =>
                `px-4 py-2 border rounded-md transition-all duration-300 ${isActive
                  ? "text-red-600 border-red-600"
                  : "text-base-700 border-transparent"
                }`
              }
            >
              Team
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <RightNavbar />
        ) : (
          <div>
            <Link to='login/'>
              <button className='btn'>SignIn</button>
            </Link>
            <Link to='register/'>
              <button className='btn'>Register</button>
            </Link>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;