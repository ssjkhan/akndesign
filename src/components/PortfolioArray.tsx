import ViteSVG from "../assets/vite.svg";

export default function PortfolioArray() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0">
            <h3 className="mb-2 -mt-1 text-3xl font-bold font-heading">
              Portfolio Array
            </h3>
            <p>
              Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus
              sit amet tempus vestibulum.
            </p>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap -m-4">
              <div className="w-full md:w-1/3 p-4">
                <img
                  className="h-96 w-full object-cover rounded-lg border-sky-500 border-2"
                  src={ViteSVG}
                  alt=""
                />
              </div>
              <div className="w-full md:w-2/3 p-4">
                <img
                  className="h-96 object-cover w-full rounded-lg border-sky-500 border-2"
                  src={ViteSVG}
                  alt=""
                />
              </div>
              <div className="w-full md:w-2/3 p-4">
                <img
                  className="h-96 object-cover w-full rounded-lg border-sky-500 border-2"
                  src={ViteSVG}
                  alt=""
                />
              </div>
              <div className="w-full md:w-1/3 p-4">
                <img
                  className="h-96 w-full object-cover rounded-lg border-sky-500 border-2"
                  src={ViteSVG}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
