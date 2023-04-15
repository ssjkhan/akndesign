import { useEffect, useRef, useState } from "react";

export default function ClickHere() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const eyeDiv = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  // collapsible component
  function handleClick() {
    container.current?.classList.toggle("h-0");
    container.current?.classList.toggle("h-44");
    content.current?.classList.toggle("translate-y-6");
  }

  function handleMouseMove(event: MouseEvent) {
    setMousePos({ x: event.clientX, y: event.clientY });
  }

  function calcAngle(element: React.RefObject<HTMLElement>) {
    if (!element?.current) return;
    const objHTML = element.current;

    let relX = objHTML.offsetLeft + objHTML.clientWidth / 2;
    let relY = objHTML.offsetTop - objHTML.clientHeight / 2;

    var rotRad = Math.atan2(mousePos.x - relX, mousePos.y - relY);
    var rotDeg = Math.floor(rotRad * (180 / Math.PI) * -1 - 120);

    return rotDeg;
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-alexRed py-1">
      <div className="w-full h-auto flex justify-center text-white overflow-hidden">
        <div onClick={handleClick}>
          <div className="flex justify-center align-center bg-alexRed border-[1px] border-white rounded-full">
            <div className="bg-alexRed rounded-full mr-2 px-2">
              What's here?
            </div>
            <div className="flex justify-center items-center bg-white rounded-full px-2">
              <div
                ref={eyeDiv}
                style={{
                  transform: `rotate(${calcAngle(eyeDiv)}deg)`,
                }}
                className="w-4 h-4 border-2 border-alexRed rounded-full after:absolute after:w-2 after:h-2 after:bg-alexRed after:rounded-full after:content-[' ']"
              >
              </div>
              <div
                style={{
                  transform: `rotate(${calcAngle(eyeDiv)}deg)`,
                }}
                className="w-4 h-4 border-2 border-alexRed rounded-full after:absolute after:w-2 after:h-2 after:bg-alexRed after:rounded-full after:content-[' ']"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={container}
        className="h-0 transition-all ease-in-out duration-700 overflow-hidden"
      >
        <div
          ref={content}
          className="text-white flex flex-wrap justify-center over-flow-hidden transition-transform ease-in delay-300 duration-300"
        >
          <div className="basis-full flex justify-center text-2xl pt-4 font-bold">
            Nothin' but our love for you
          </div>
          <div className="basis-full flex justify-center py-2">
            You're curious. You like to discover. The little things matter. So
            we found a video just for you.
          </div>
          <div className="border-[1px] border-white rounded-full px-4 text-white">
            <a href="https://www.youtube.com/watch?v=bzLaL0SVwwI">Click here</a>
          </div>
        </div>
      </div>
    </div>
  );
}
