import React, { useContext, useState } from "react";
import {
  Squares2X2Icon,
  BookmarkSquareIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/UseContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { user, signout } = useContext(AuthContext);
  const [open, setOpen] = useState(96);

  const handleSignout = () => {
    signout().then(() => {
      toast.success("successfully signed out");
    });
  };
  const handleMenu = () => {
    if (!open) {
      setOpen(96);
    } else {
      setOpen(0);
    }
  };

  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="navbar bg-slate-700">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-bold text-white"
          >
            <Squares2X2Icon className="h-10 w-10 mx-2 text-white"></Squares2X2Icon>
            Anime Wishlist
          </Link>
        </div>
        <ul
          className={`md:menu md:menu-horizontal p-0 md:flex-row md:h-auto md:w-auto md:bg-transparent md:static md:translate-y-0 flex flex-col absolute bg-gray-400 h-96 w-full transition-transform -translate-y-${open} justify-center top-0 right-0 z-10`}
        >
          {user.email && (
            <small className="py-3 md:py-0 btn lowercase">{user.email}</small>
          )}
          <Link className="btn my-3 md:mx-3 md:my-0" to="/wishlist">
            <BookmarkSquareIcon className="h-7 w-7 mr-1"></BookmarkSquareIcon>
            Wishlists
          </Link>
          {!user.email && (
            <div>
              <Link to="/login" className="btn btn-success mx-2">
                Sign in
              </Link>
              <Link to="/signup" className="btn btn-info">
                Sign up
              </Link>
            </div>
          )}
          {user.email && (
            <button onClick={handleSignout} className="btn btn-error">
              Sign out
            </button>
          )}
        </ul>
        <Bars3BottomRightIcon
          className="h-6 w-6 cursor-pointer md:hidden relative z-50"
          onClick={handleMenu}
        />
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Header;
