import { useState } from "react";

type ImageShowCaseProps = {
  images: string[];
};

const sample = (
  <div className="w-auto h-64 lg:w-1/2 lg:h-auto px-4 mb-12 lg:mb-0 flex justify-center">
    <img
      className="rounded-lg w-full h-full object-cover"
      alt=""
    >
    </img>
  </div>
);
export default function ImageShowCase({ images }: ImageShowCaseProps) {
  const [index, setIndex] = useState(0);
  const imgCount = images.length;

  function handlePrevious() {
    if (index === 0) {
      setIndex(imgCount - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function handleIndex() {
    if (index === imgCount - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="h-64 lg:w-1/2 lg:h-auto px-4 flex justify">
      {images
        ? (
          <div
            className="w-auto px-4 mb-12 lg:mb-0 flex justify-center"
            key={index}
          >
            <div className="basis-full">
              <img
                className="rounded-lg w-full h-full object-cover"
                src={images[index]}
              >
              </img>
            </div>
          </div>
        )
        : null}
    </div>
  );
}
