import React from "react";
import { Label } from "atoms";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((props) => ({
  root: {
    width: "70%",
  },
}));
function TimeLine(props) {
  const { value, mainClass, labelClass, root, width } = props;
  const classes = useStyles();
  return (
    <div className={`rounded-full h-9 relative ${mainClass}`}>
      <Label
        value={value}
        className={`absolute w-full tracking-wide top-2 left-0 bottom-0 text-center font-sans ${labelClass}`}
      />
      <div
        className={`bg-current rounded-full px-3 h-full ${classes.root}`}
      ></div>
    </div>
  );
}
TimeLine.defaultProps = {
  value: "10.10.2021",
  mainClass: "bg-gray-600 w-64",
  labelClass: "text-white",
};
export default TimeLine;
