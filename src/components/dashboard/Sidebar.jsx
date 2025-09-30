import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full p-4">
              {/* Sidebar content here */}
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="addservice/">Add services</NavLink>
              </li>
              <li>
                <NavLink to="showservices/">Showservices</NavLink>
              </li>
              <li>
                <NavLink to="contact/">show contacts</NavLink>
              </li>
              <li>
                <NavLink to="checkout/">checkout</NavLink>
              </li>
              <li>
                <NavLink to="cart/">cart</NavLink>
              </li>
              <li>
                <NavLink to="checkout/">checkout</NavLink>
              </li>
              <li>
                <NavLink to="ordered/">Ordered</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Sidebar;