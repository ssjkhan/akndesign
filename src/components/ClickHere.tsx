import { useState } from "react";

export default function ClickHere() {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  console.log(show);
  return (
    <div>
      <div className="w-full bg-gray-500 h-auto flex justify-center text-white">
        <div onClick={handleClick}>
          What's Here {">.>"}
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
