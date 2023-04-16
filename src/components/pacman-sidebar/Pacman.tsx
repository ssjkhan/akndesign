import { useRef } from "react";

export default function () {
  const pacmanRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    if (!pacmanRef.current) return;

    pacmanRef.current.classList.toggle("translate-y-6");
    pacmanRef.current.classList.toggle("after:h-0");
    pacmanRef.current.classList.toggle("after:w-0");
  }

  return (
    <div
      onClick={handleClick}
    >
      <div
        ref={pacmanRef}
        className="w-6 h-6 border-0 bg-alexRed rounded-full after:absolute after:bg-white after:w-3 after:h-3 after:transition-all after:ease-in-out after:duration-300 after:content-[' '] -rotate-[135deg] overflow-hidden"
      >
      </div>
    </div>
  );
}
