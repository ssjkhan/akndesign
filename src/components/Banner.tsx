import { useEffect } from "react";
import Lottie from "lottie-react";
import AlexIllustration from "@assets/illustrationofme_animated.json";

export default function Banner() {
  const AnimFragment = (
    <Lottie
      id="alexIllustration"
      animationData={AlexIllustration}
      className="w-full h-96 mb-16 transform-none"
    />
  );

  // remove translate3d component so it doesn't interfere with z-index
  useEffect(() => {
    const anim = document
      .getElementById("alexIllustration")
      ?.firstChild as HTMLElement;
    anim.style.transform = "";
  }, []);

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        {AnimFragment}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
