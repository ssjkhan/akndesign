import { useRef } from "react";
import SideMenu from "@components/SideMenu";
import Logo from "@components/Logo";
import Time from "@components/header/Time";

export default function Header() {
  const sideMenuRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    sideMenuRef.current?.classList.toggle("translate-x-full");
  }

  return (
    <nav className="bg-white w-full py-2 border-b-2 border-alexRed">
      <div className="flex justify-between items-center gap-12 mx-4 sm:mx-8 lg:mx-32">
        <Logo classNames="text-alexRed w-12 sm:w-16 " />
        <Time classNames="text-alexRed hidden sm:block sm:text-sm ml-auto" />
        <div className="text-alexRed hidden sm:block sm:text-sm ">
          Boston, MA
        </div>
        <div className="bg-alexRed text-white hidden sm:block text-xs rounded-full px-4 py-1">
          Ready to Hire
        </div>

        <div className="text-alexRed block md:hidden" onClick={handleClick}>
          <svg
            className="w-4 "
            fill="currentColor "
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </div>
      </div>
      <SideMenu menuRef={sideMenuRef} />
    </nav>
  );
}
