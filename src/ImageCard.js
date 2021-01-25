import React, { useState } from "react";
import "./ImageCard.css";
import { useSpring, animated } from "react-spring";
import "animate.css";
const trans = (s) => `scale(${s})`;

export default function ImageCard({ children }) {
  const [props, set] = useSpring(() => ({
    scale: 1,
  }));

  const [load, setLoad] = useState(false);
  return (
    <div className="col-4 p-5">
      <animated.img
        src={children}
        onMouseOver={() => set({ scale: 1.1 })}
        onMouseLeave={() => set({ scale: 1 })}
        onLoad={() => setLoad(true)}
        className={"c " + `${load && "animate__animated animate__fadeIn"}`}
        style={{ transform: props.scale.interpolate(trans) }}
      />
    </div>
  );
}
