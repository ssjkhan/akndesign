import { useRef, useState } from "react";
import SideNav from "@components/SideNav";
import Logo from "@components/Logo";
import Time from "@components/header/Time";

export default function Header() {
  const [showMenu, setMenu] = useState(false);
  const ref = useRef<HTMLElement>(null);

  function handleClick() {
    setMenu(!showMenu);
  }

  return (
    <nav
      className="sticky top-0 bg-white mx-32"
      ref={ref}
    >
      <div className="flex justify-between items-center">
        <Logo classNames={"text-alexRed w-24"} />
        <div>Stuff</div>
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
        <Time />
        <div className="text-alexRed">Boston, MA</div>
        <div className="bg-alexRed text-white rounded-full px-4 py-1 text-l">
          Ready to Hire
        </div>
      </div>
      {showMenu && <SideNav setShow={setMenu} />}
    </nav>
  );
}
