import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { CoverCallback } from "service";
import Clipboard from "../Clipboard";
import Select from "../Select";
import Operation from "../Operation";
import General from "../General";
import Draw from "../Draw";
import Dimensions from "../Dimensions";
import Plan from "../Plane";
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
    return setState(CoverCallback(param, callbacks));
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
          <Clipboard handleClick={handleClick} active={state} />
          <hr className="h-3/4 border-r" />
          <Select handleClick={handleClick} active={state} />
          <hr className="h-3/4 border-r" />
          <Operation handleClick={handleClick} active={state} />
          <hr className="h-3/4 border-r" />
          <General handleClick={handleClick} active={state} />
          <hr className="h-3/4 border-r" />
          <Draw handleClick={handleClick} active={state} />
          <hr className="h-3/4 border-r" />
          <Dimensions handleClick={handleClick} active={state} />
          <hr className="h-3/4 border-r" />
          <Plan handleClick={handleClick} active={state} />
        </div>
      </animated.div>
    </>
  );
}

export default ElectronicIconBar;
