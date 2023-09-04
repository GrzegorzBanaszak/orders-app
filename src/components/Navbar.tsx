import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-sky-900 py-1">
      <div className="w-3/4 mx-auto flex items-center gap-2 justify-between">
        <div className="bg-white rounded-lg border">
          <input
            className="rounded-lg border focus:border-blue-500 focus:ring-blue-500"
            type="text"
            placeholder="Szukaj"
          />
        </div>
        <div>
          <Link className="text-white" href="/">
            Lista zamówień
          </Link>
          <Link className=" text-white" href="add">
            Dodaj
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
