import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-sky-900 py-1">
      <div className="w-3/4 mx-auto flex justify-end items-center gap-2">
        <Link className="text-white" href="/">
          Lista zamówień
        </Link>
        <Link className=" text-white" href="add">
          Dodaj
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
