import React from "react";
import { Label } from "atoms";
import TouchRipple from "@material-ui/core/ButtonBase";
import { useSpring, animated } from "react-spring";

function MyIdeezaIcon({ img, value, right, bottom, toggle, click }) {
  const fadeStyles = useSpring({
    from: { opacity: 0, right: 0, bottom: 0 },
    to: {
      opacity: toggle ? 1 : 0,
      right: toggle ? right : 0,
      bottom: toggle ? bottom : 0,
    },
  });
  return (
    <animated.div
      style={fadeStyles}
      className={`w-auto flex items-center justify-center flex-col absolute`}
    >
      <div
        onClick={click}
        className="bg-secondary w-9 h-9 flex items-center justify-center rounded-full"
      >
        <TouchRipple className="outline-none hover:bg-transparent">
          <img className="w-4" src={img} alt="" />
        </TouchRipple>
      </div>
      <Label
        variant="caption"
        value={value}
        classes={{
          root: "font-sans mt-1 w-32 text-center text-3xs font-semibold",
        }}
      />
    </animated.div>
  );
}
export default MyIdeezaIcon;
