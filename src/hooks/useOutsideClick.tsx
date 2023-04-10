import React, { useEffect } from "react";

export default function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
) {
  useEffect(() => {
    function handleClickOutside({ target }: MouseEvent) {
      if (ref.current && !ref.current.contains(target as Node)) {
        alert("Clicked outside");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
