import React from "react";
import { CircularProgress } from "@material-ui/core";
function Loader(props) {
  return (
    <div className="flex w-full border h-screen top-0 left-0 bg-white absolute items-center justify-center">
      <CircularProgress size={50} />
    </div>
  );
}
export default Loader;
