import { useRef } from "react";
import SideMenu from "@components/SideMenu";

export default function SideBar() {
  const sideMenuRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    sideMenuRef.current?.classList.toggle("translate-x-full");
  }
  return (
    <div className="">
      <div className="fixed top-0 right-0 bg-white border-l-2 border-alexRed w-8 md:w-12 h-screen hidden md:flex">
        <div className="flex mx-auto">
          <div
            className="text-alexRed block mx-auto my-auto"
            onClick={handleClick}
          >
            <svg
              className="w-6 "
              fill="currentColor "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </div>
        </div>
        <SideMenu menuRef={sideMenuRef} />
      </div>
    </div>
  );
}
