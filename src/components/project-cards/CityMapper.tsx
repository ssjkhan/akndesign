import CityMapper1 from "@assets/city-mapper-1.png";

import ImageShowCase from "@components/project-cards/ImageShowCase";

export default function MisfitsProjectCard() {
  const images: string[] = [CityMapper1];
  return (
    <section className="py-20 bg-alexPink lg:h-screen lg:w-screen flex">
      <div className="container px-4 mx-auto my-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 text-alexRed">
            <div className="lg:max-w-sm ">
              <div className="font-blogh text-4xl lg:text-6xl xl:text-8xl">
                Citymapper: Vancouver Mascot
              </div>
              <div className="mb-6 font-roobert text-xl">
                A mascot for a 50 million user strong app.
              </div>
              <div className="flex mb-6 font-reckless text-lg">
                Citymapper is a public transit app and mapping service, widely
                used across London since 2011. We collaborated with their design
                team to create a 'dude' that illustrated the best attributes of
                this Western Canadian City. The final desing is now included in
                their app.
              </div>
            </div>
            <div>
              <div className="flex mb-6 font-roobert border-alexRed border rounded-full w-fit px-2">
                On their website
              </div>
            </div>
          </div>
          <ImageShowCase images={images} />
        </div>
      </div>
    </section>
  );
}
