import React from "react";
import { Skeleton } from "@material-ui/lab";
function NewsFeed() {
  return (
    <div className="flex items-start">
      <Skeleton variant="circle" width="80px" height="80px" className="mr-5" />
      <div className="w-full bg-white flex flex-col justify-start items-center">
        <div className="w-full p-5 border border-gray-100 justify-between flex items-center">
          <div className="flex items-center">
            <Skeleton variant="text" width="100px" />
            <Skeleton variant="text" width="80px" className="mx-2" />
            <Skeleton variant="text" width="40px" />
          </div>
          <Skeleton variant="react" width="40px" height="25px" />
        </div>
        <div className="w-full p-4">
          <Skeleton
            variant="react"
            width="100%"
            height="400px"
            className="rounded-md"
          />
        </div>
        <div className="flex w-full items-center">
          <Skeleton variant="text" width="40px" />
          <Skeleton variant="text" width="40px" className="mx-2" />
          <Skeleton variant="text" width="40px" />
        </div>
      </div>
    </div>
  );
}
export default NewsFeed;
