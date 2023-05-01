import ViteSVG from "@assets/vite.svg";

export default function MisfitsProjectCard() {
  return (
    <section className="py-20 bg-alexTeal">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-auto h-64 lg:w-1/2 lg:h-auto px-4 mb-12 lg:mb-0 flex justify-center">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={ViteSVG}
              alt=""
            >
            </img>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="lg:max-w-sm lg:ml-auto">
              <h2 className="mb-12 text-4xl md:text-5xl mt-3 font-bold font-heading">
                Project Name
              </h2>
              <div className="flex mb-6">
                <div className="mr-5 text-gray-500">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    >
                    </path>
                  </svg>
                </div>
                <div className="max-w-sm">
                  <h3 className="mb-2 -mt-1 text-2xl font-bold font-heading">
                    Sick Design Flow
                  </h3>
                  <p className="text-gray-500 leading-loose">
                    Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                    tellus sit amet tempus vestibulum.
                  </p>
                </div>
              </div>
              <div className="flex mb-6">
                <div className="mr-5 text-gray-500">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    >
                    </path>
                  </svg>
                </div>
                <div className="max-w-sm">
                  <h3 className="mb-2 -mt-1 text-2xl font-bold font-heading">
                    Big Stuff Big moves
                  </h3>
                  <p className="text-gray-500 leading-loose">
                    Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                    tellus sit amet tempus vestibulum.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-5 text-gray-500">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    >
                    </path>
                  </svg>
                </div>
                <div className="max-w-sm">
                  <h3 className="mb-2 -mt-1 text-2xl font-bold font-heading">
                    Can't Touch This
                  </h3>
                  <p className="text-gray-500 leading-loose">
                    Etiam pellentesque non nibh non pulvinar. Mauris posuere,
                    tellus sit amet tempus vestibulum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
