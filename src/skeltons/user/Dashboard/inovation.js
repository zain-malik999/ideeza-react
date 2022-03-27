import React from "react";
import { Skeleton } from "@material-ui/lab";
function Inovation() {
  return (
    <div className="flex flex-col bg-white p-1">
      <Skeleton variant="react" width="100%" height="220px" />
      <Skeleton variant="text" width="100px" />
      <Skeleton variant="text" width="200px" height="30px" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="100%" />
      <div className="flex p-2 items-center justify-between">
        <Skeleton variant="text" width="50px" />
        <Skeleton variant="react" width="100px" height="30px" />
      </div>
    </div>
  );
}
export default Inovation;
