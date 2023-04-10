import ViteSVG from "../assets/vite.svg";

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="container px-4 mx-auto text-center">
        <a
          className="inline-block mx-auto text-gray-600 text-2xl leading-none"
          href="#"
        >
          <img
            className="h-8"
            src={ViteSVG}
            alt=""
            width="auto"
          />
        </a>
        <ul className="my-6 flex flex-wrap space-x-8 items-center justify-center">
          <li className="mb-2 md:mb-0">
            <a className="text-sm text-gray-900 hover:text-gray-700" href="#">
              About
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a className="text-sm text-gray-900 hover:text-gray-700" href="#">
              Company
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a className="text-sm text-gray-900 hover:text-gray-700" href="#">
              Services
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a className="text-sm text-gray-900 hover:text-gray-700" href="#">
              Testimonials
            </a>
          </li>
        </ul>
        <div>
          <a className="inline-block mr-2 lg:mr-10" href="#">
            <img src={ViteSVG} />
          </a>
          <a className="inline-block mr-2 lg:mr-10" href="#">
            <img src={ViteSVG} />
          </a>
          <a className="inline-block mr-2 lg:mr-10" href="#">
            <img src={ViteSVG} />
          </a>
          <a className="inline-block mr-2 lg:mr-10" href="#">
            <img src={ViteSVG} />
          </a>
          <a className="inline-block" href="#">
            <img src={ViteSVG} />
          </a>
        </div>
      </div>
      <div className="mt-12 mb-8 border-b border-gray-50"></div>
      <div className="container px-4 mx-auto">
        <p className="text-center text-sm text-gray-400">
          All rights reserved © AKNDesigns 2023
        </p>
      </div>
    </footer>
  );
}
