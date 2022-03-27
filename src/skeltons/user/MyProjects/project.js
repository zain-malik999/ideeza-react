import React from "react";
import { Skeleton } from "@material-ui/lab";
function Project() {
  return (
    <div className="flex flex-col bg-white p-1">
      <Skeleton variant="react" width="100%" height="220px" />
      <Skeleton variant="text" width="100px" />
      <Skeleton variant="text" width="200px" height="30px" />
      <div className="flex p-2 items-center justify-start">
        <Skeleton variant="circle" width="50px" height="50px" />
        <Skeleton variant="text" className="ml-2" width="100px" />
      </div>
    </div>
  );
}
export default Project;
