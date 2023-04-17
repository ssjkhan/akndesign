import React from "react";
import Logo from "@components/Logo";

type SideMenuProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef: React.RefObject<HTMLDivElement>;
};

export default function SideMenu({ setShow, menuRef }: SideMenuProps) {
  function handleClose() {
    setShow(false);
    menuRef.current?.classList.toggle("translate-x-full");
  }

  return (
    <div
      ref={menuRef}
      className="navbar-menu fixed top-0 right-0 bottom-0 w-screen sm:max-w-sm z-50 translate-x-full transition-all ease-in-out"
    >
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25">
      </div>
      <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-12 sm:mb-16  pb-2 border-b-2 border-alexTeal">
          <Logo classNames="text-alexRed w-16" />
          <button className="navbar-close ml-auto" onClick={handleClose}>
            <svg
              className="h-6 w-6 text-slate-900 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              >
              </path>
            </svg>
          </button>
        </div>
        <div className="text-alexRed">
          <ul>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold   hover:bg-gray-50 rounded"
                href="#"
              >
                Intro
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold   hover:bg-gray-50 rounded"
                href="#"
              >
                About
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold   hover:bg-gray-50 rounded"
                href="#"
              >
                Misfits
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold   hover:bg-gray-50 rounded"
                href="#"
              >
                Recent Work
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold   hover:bg-gray-50 rounded"
                href="#"
              >
                Awards & Press
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6">
            <a
              className="block px-6 py-2 mb-3 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded"
              href="#"
            >
              Connect with me on Linked In!
            </a>
            <a
              className="block px-6 py-2 mb-2 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded"
              href="#"
            >
              Contact
            </a>
          </div>
          <p className="mt-6 mb-4 text-sm text-center text-gray-400">
            <span>© 2023 All rights aknDesigns</span>
          </p>
        </div>
      </nav>
    </div>
  );
}
