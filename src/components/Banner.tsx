import ViteSVG from "../assets/vite.svg";

export default function Banner() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="h-96 mb-16 bg-gradient-to-t from-cyan-500 to-blue-500">
          &nbsp;
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex mb-2 items-center justify-center">
            <a className="text-xs text-gray-200" href="#">Home</a>
            <svg
              className="w-3 h-3 mx-1 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              >
              </path>
            </svg>
            <a className="text-xs text-gray-200" href="#">Blog</a>
            <svg
              className="w-3 h-3 mx-1 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              >
              </path>
            </svg>
            <a className="text-xs text-gray-200" href="#">Article</a>
          </div>
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
            I'm Alexander Neumann
          </h2>
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
            a designer and developer
          </h2>
          <div className="flex items-center justify-center">
            <p className="text-lg text-gray-500">
              I examine joy, play, and discovery in my work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
