import React, { useEffect } from "react";
import useLockBodyScroll from "../../Hooks/useLockBodyScroll";

const Overlay = ({ onClick, opacity, onMouseEnter, top }) => {
  useLockBodyScroll();

  return (
    <a
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      onMouseEnter={onMouseEnter}
    >
      <div className="overlay show" style={{ opacity, top: top || 0 }} />
    </a>
  );
};

export default Overlay;
