import React from "react";

type SideMenuProps = {
  menuRef: React.RefObject<HTMLDivElement>;
};

export default function SideMenu({ menuRef }: SideMenuProps) {
  function handleClose() {
    menuRef.current?.classList.toggle("translate-x-full");
  }

  return (
    <div
      ref={menuRef}
      className="navbar-menu fixed top-0 right-0 bottom-0 w-screen sm:max-w-sm z-50 translate-x-full transition-all ease-in-out"
    >
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25">
      </div>
      <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-alexTeal border-r overflow-y-auto">
        <div className="flex items-center mb-12 sm:mb-16  pb-2 border-b-2 border-alexTeal">
          <button className="navbar-close" onClick={handleClose}>
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
          <div className="text-alexRed text-2xl ml-auto">Menu</div>
        </div>
        <div className="text-alexRed">
          <ul>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold hover:underline rounded"
                href="#"
              >
                Intro
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold hover:underline rounded"
                href="#"
              >
                About
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold hover:underline rounded"
                href="#"
              >
                Misfits
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold hover:underline rounded"
                href="#"
              >
                Recent Work
              </a>
            </li>
            <li className="mb-1">
              <a
                className="block p-4 text-sm font-semibold hover:underline rounded"
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
              className="block px-6 py-2 mb-3 text-sm text-center text-alexRed hover:underline font-bold leading-loose rounded"
              href="#"
            >
              Connect with me on Linked In!
            </a>
            <a
              className="block px-6 py-2 mb-2 text-sm text-center text-alexRed hover:underline font-bold leading-loose rounded"
              href="#"
            >
              Contact
            </a>
          </div>
          <p className="mt-6 mb-4 text-sm text-center text-alexRed">
            <span>© 2023 All rights aknDesigns</span>
          </p>
        </div>
      </nav>
    </div>
  );
}
