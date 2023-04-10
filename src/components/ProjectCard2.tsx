import ViteSVG from "../assets/vite.svg";

export default function ProjectCard() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <div className="lg:max-w-md">
              <h2 className="mb-4 lg:mb-8 text-4xl lg:text-5xl font-bold font-heading">
                My Amazing Portfolio Project Baby!
              </h2>
              <p className="mb-6 text-lg text-gray-500 leading-loose">
                With this experience, you will get much better results with
                clients and develop new skills. Will you take the risk of trying
                the latest version of our design services?
              </p>
              <a
                className="inline-block px-6 py-2 text-sm text-white font-bold leading-loose bg-gray-600 hover:bg-gray-700 rounded transition duration-200"
                href="#"
              >
                Click this link!
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img
              className="w-full object-cover rounded-lg"
              src={ViteSVG}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
