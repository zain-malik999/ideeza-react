import React from "react";
import { Label, IconButton, Input } from "atoms";

function Pagination({ mainClass, pager, handlePage, loading }) {
  return (
    <div
      className={`w-full justify-center items-center flex space-x-2 ${mainClass}`}
    >
      <Label
        value="Page"
        classes={{ root: "text-md text-gray-300 font-sans tracking-tight" }}
      />
      <Input
        value={pager?.page ? pager?.page : 0}
        containerClass="w-10 text-current rounded-lg p-0"
        inputProps="text-current bg-gray-150 h-4 -ml-3 font-semibold text-base font-lato p-2 rounded border border-solid border-gray-160"
      />
      <Label
        value={`of ${pager?.count ? pager?.count : 0}`}
        classes={{ root: "tracking-tight text-md font-san text-gray-300 pr-1" }}
      />
      <IconButton
        loading={loading}
        count={pager?.count}
        page={pager?.page}
        handlePage={handlePage}
      />
    </div>
  );
}

export default Pagination;
