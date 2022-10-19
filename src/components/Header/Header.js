import React, { useContext } from "react";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/UseContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { user, signout } = useContext(AuthContext);
  console.log(user);
  const handleSignout = () => {
    signout().then(() => {
      toast.success("successfully signed out");
    });
  };
  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="navbar bg-slate-700 ">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-bold text-white"
          >
            <Squares2X2Icon className="h-10 w-10 mx-2 text-white"></Squares2X2Icon>
            Anime Wishlist
          </Link>
        </div>
        <ul className="menu menu-horizontal p-0">
          {user.email}
          {!user.email && (
            <div>
              <Link to="/login" className="btn btn-ghost">
                Sign in
              </Link>
              <Link to="/signup" className="btn btn-ghost">
                Sign up
              </Link>
            </div>
          )}
          {user.email && (
            <button onClick={handleSignout} className="btn btn-ghost">
              Sign out
            </button>
          )}
        </ul>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Header;
