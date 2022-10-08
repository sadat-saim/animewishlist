import React from "react";
import { ShoppingCartIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
