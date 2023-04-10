import React, { useRef, useState } from "react";
import SideNav from "./SideNav";
import useOutsideClick from "../hooks/useOutsideClick";

export default function Header() {
  const [showMenu, setMenu] = useState(false);
  const ref = useRef<HTMLElement>(null);
  // useOutsideClick(ref);

  function handleClick() {
    setMenu(!showMenu);
  }

  return (
    <nav
      className="sm:px-5 sm:py-5 top-0 px-10 py-10 bg-gray-500"
      ref={ref}
    >
      <div className="flex justify-between items-center">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="blck text-gray-50 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </button>
        <a className="text-white text-2xl leading-none" href="#">
          Center Piece
        </a>
        <button
          className="block navbar-burger text-gray-50 hover:text-gray-200 focus:outline-none"
          onClick={handleClick}
        >
          <svg
            className="h-4 w-4"
            fill="currentColor "
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      {showMenu && <SideNav setShow={setMenu} />}
    </nav>
  );
}
