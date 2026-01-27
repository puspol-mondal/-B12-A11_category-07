import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hook/useAuth/useAuth";

const NavBer = () => {
  const { user, logout } = useAuth();

  const handelSignout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to={"/home"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm   ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Logo />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a onClick={handelSignout} className="btn">
            Sign Out
          </a>
        ) : (
          <Link to={"/auth/login"} className="btn ">
            Login
          </Link>
        )}
        <Link to={"/decorator"} className="btn btn-primary ml-4">
          Be a Decorator
        </Link>
      </div>
    </div>
  );
};

export default NavBer;
