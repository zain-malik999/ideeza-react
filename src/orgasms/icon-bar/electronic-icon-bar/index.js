import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  IconsSide1,
  IconsSide2,
  IconsSide3,
  IconsSide4,
  IconsSide5,
  IconsSide6,
  IconsSide7,
  IconsSide8,
  IconsSide9,
} from "../..";
import { Callback } from "service";
function ElectronicIconBar(props) {
  const { toggle, callbacks } = props;
  const [state, setState] = useState("");
  const fadeStyles = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: toggle ? 1 : 0,
    },
  });
  const handleClick = (param) => {
    return setState(Callback(param, callbacks));
  };
  return (
    <>
      <animated.div
        style={{
          ...fadeStyles,
        }}
        className="absolute icon-bar flex justify-center"
      >
        <div className="bg-white rounded-b-lg shadow-lg flex justify-center space-x-2 px-4 pt-2">
          <div className="flex justify-center space-x-2 w-full">
            <IconsSide1 handleClick={handleClick} active={state} />
            <hr className="h-3/4 border-r" />
          </div>
          <div className="flex justify-center space-x-2 w-full">
            <IconsSide2 handleClick={handleClick} active={state} />
            <hr className="h-3/4 border-r" />
          </div>
          <div className="flex justify-center space-x-2 w-full">
            <IconsSide3 handleClick={handleClick} active={state} />
            <hr className="h-3/4 border-r" />
          </div>
          <div className="flex justify-center space-x-2 w-full">
            <IconsSide4 handleClick={handleClick} active={state} />
            <hr className="h-3/4 border-r" />
          </div>
          <div className="flex justify-center space-x-2 w-full">
            <IconsSide5 handleClick={handleClick} active={state} />
            <hr className="h-3/4 border-r" />
          </div>
          <div className="flex justify-center space-x-2 w-full">
            <IconsSide6 handleClick={handleClick} active={state} />
            <hr className="h-3/4 border-r" />
          </div>
          <div className="flex justify-center space-x-2 w-full">
            <IconsSide7 handleClick={handleClick} active={state} />
            <hr className="h-3/4 border-r" />
          </div>
          <div className="flex justify-center space-x-2 w-full">
            <IconsSide8 handleClick={handleClick} active={state} />
            <hr className="h-3/4 border-r" />
          </div>
          <IconsSide9 handleClick={handleClick} active={state} />
        </div>
      </animated.div>
    </>
  );
}

export default React.memo(ElectronicIconBar);
