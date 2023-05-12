import MisfitsPicture1 from "@assets/misfits-1.jpg";
import ImageShowCase from "@components/project-cards/ImageShowCase";

export default function MisfitsProjectCard() {
  const images: string[] = [MisfitsPicture1];
  return (
    <section className="py-20 bg-alexTeal lg:h-screen lg:w-screen flex">
      <div className="container px-4 mx-auto my-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 text-alexRed">
            <div className="lg:max-w-sm ">
              <div className="font-blogh text-4xl lg:text-6xl xl:text-8xl">
                Misifts
              </div>
              <div className="mb-6 font-roobert text-xl">
                A new stacking game
              </div>
              <div className="flex mb-6 font-reckless text-lg">
                Misifts is a new stacking game, primarily for adults. The game's
                objective is to be the first to stack ten blocks, without the
                tower falling. No stacks are the same. It's nail-biting.
                Surprising. Delightful.
              </div>
              <div className="mb-6 ">
                <div className="text-lg font-reckless">
                  'Misfits takes simple geometry and translates it into an
                  absorbing game that is both beautiful to look at and fun to
                  play.'
                </div>
                <div className="flex mb-6 font-reckless italic">
                  - Anthony Burrill, renowned UK-based graphic artist, profiled
                  by Apple
                </div>
              </div>
            </div>
            <div>
              <div className="flex mb-6 font-roobert border-alexRed border rounded-full w-fit px-2">
                See Player Reactions
              </div>
            </div>
          </div>
          <ImageShowCase images={images} />
        </div>
      </div>
    </section>
  );
}
