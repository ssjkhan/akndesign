import { useEffect } from "react";
import Lottie from "lottie-react";
import AlexIllustration from "@assets/alex-animation.json";

export default function Banner() {
  const AnimFragment = (
    <Lottie
      id="alexIllustration"
      animationData={AlexIllustration}
      className="w-full h-64 mb-16 transform-none"
    />
  );

  // remove translate3d component so it doesn't interfere with z-index
  useEffect(() => {
    const anim = document.getElementById("alexIllustration")
      ?.firstChild as HTMLElement;

    if (!anim) return;
    anim.style.transform = "";
  }, []);

  return (
    <section className="font-roobert py-20">
      <div className="container mx-4 mx-auto">
        {AnimFragment}
        <div className="mx-auto text-center text-alexRed">
          <h2 className="mb-6 text-2xl sm:text-4xl lg:text-5xl font-bold font-heading">
            I'm Alexander Neumann
          </h2>
          <h2 className="mb-6 text-2xl sm:text-4xl lg:text-5xl font-bold font-heading">
            a designer and developer
          </h2>
          <div className="flex items-center justify-center">
            <p className="text-base sm:text-lg text-alexRed">
              I examine joy, play, and discovery in my work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
