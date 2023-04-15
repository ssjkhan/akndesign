import { useEffect, useRef, useState } from "react";

export default function ClickHere() {
  const [show, setShow] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rel, setRel] = useState({ x: 0, y: 0 });
  const rightEye = useRef<HTMLDivElement>(null);
  const leftEye = useRef<HTMLDivElement>(null);

  function handleClick() {
    setShow(!show);
  }

  function handleMouseMove(event: MouseEvent) {
    setMousePos({ x: event.clientX, y: event.clientY });
    function calcAngle(element: React.RefObject<HTMLElement>) {
      if (!element?.current) return;
      const objHTML = element.current;

      let relX = objHTML.offsetLeft + objHTML.clientWidth / 2;
      let relY = objHTML.offsetTop - objHTML.clientHeight / 2;

      var rotRad = Math.atan2(mousePos.x - relX, mousePos.y - relY);
      var rotDeg = Math.floor(rotRad * (180 / Math.PI) * -1 - 120);

      console.log(objHTML.offsetLeft);
      console.log(mousePos, relX, relY, rotDeg);

      return { rotDeg, relX, relY };
    }

    const res = calcAngle(leftEye);
    setRel({ x: res?.relX!, y: res?.relY! });
  }

  function calcAngle(element: React.RefObject<HTMLElement>) {
    if (!element?.current) return;
    const objHTML = element.current;

    let relX = objHTML.offsetLeft + objHTML.clientWidth / 2;
    let relY = objHTML.offsetTop - objHTML.clientHeight / 2;

    var rotRad = Math.atan2(mousePos.x - relX, mousePos.y - relY);
    var rotDeg = Math.floor(rotRad * (180 / Math.PI) * -1 - 120);

    console.log(objHTML.offsetLeft);
    console.log(mousePos, relX, relY, rotDeg);

    return rotDeg;
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="w-full bg-gray-500 h-auto flex justify-center text-white">
        <div onClick={handleClick}>
          <div className="container flex justify-center align-center">
            <div
              ref={leftEye}
              style={{
                transform: `rotate(${calcAngle(leftEye)}deg)`,
              }}
              className="w-4 h-4 border-2 border-red-500 rounded-full after:absolute after:w-2 after:h-2 after:bg-red-500 after:rounded-full after:content-[' ']"
            >
            </div>
            <div
              ref={rightEye}
              style={{
                transform: `rotate(${calcAngle(leftEye)}deg)`,
              }}
              className="w-4 h-4 border-2 border-red-500 rounded-full after:absolute after:w-2 after:h-2 after:bg-red-500 after:rounded-full after:content-[' ']"
            >
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className="bg-sky-500 text-white flex justify-center">
          Nothing but our love for you (dancing video)
        </div>
      )}
    </div>
  );
}
