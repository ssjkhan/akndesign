import { useRef, useState } from "react";

type SplittingProps = {
  text: string;
  classNameBase: string[];
  classNameHover: string[];
};

export default function Splitting(
  { text, classNameBase, classNameHover }: SplittingProps,
) {
  const [hovered, setHovered] = useState(false);
  const splitElArr = useRef<HTMLSpanElement[]>([]);

  const charArr = text.split("");
  const classNameAll = classNameBase[0].concat(" ", classNameHover[0]);
  const classNameFirstBase = classNameBase[1];
  const classNameFirstHover = classNameHover[1];
  const classNameSecondBase = classNameBase[2];
  const classNameSecondHover = classNameHover[2];

  function onMouseEnter() {
    setHovered(true);
    console.log("Mouse Entered");
    splitElArr.current?.forEach((el, index) => {
      const hoverClass = index % 2 === 0
        ? classNameFirstHover
        : classNameSecondHover;

      hoverClass.split(" ").forEach((cls) => {
        el.classList.toggle(cls);
      });
    });
  }

  function onMouseLeave() {
    setHovered(false);
    console.log("Mouse Exit");
  }

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {charArr && charArr.map((char, index) => {
        const classNameBase = index % 2 === 0
          ? classNameFirstBase
          : classNameSecondBase;
        const classNameHover = index % 2 === 0
          ? classNameFirstHover
          : classNameSecondHover;

        const classNames = classNameBase.concat(" ", classNameHover);

        return (
          <span
            ref={(el: HTMLSpanElement) => (splitElArr.current[index] = el)}
            className={classNames}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
