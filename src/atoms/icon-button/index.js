import React from "react";
import { IconButton as Icon } from "@material-ui/core";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function IconButton({ handlePage, page, loading, count }) {
  return (
    <div className={` flex items-center `}>
      <Icon
        disabled={loading || page === 1}
        onClick={() => handlePage(page - 1)}
        classes={{
          root: `rounded-none px-2 py-2 rounded-l ${
            loading || page === 1 ? "bg-ideeza-400" : "bg-current"
          }`,
        }}
      >
        <FaChevronLeft color="white" fontSize="16" />
      </Icon>
      <Icon
        disabled={loading || count === page}
        onClick={() => handlePage(page + 1)}
        classes={{
          root: `rounded-none px-2 py-2 rounded-r ${
            loading || count === page ? " bg-ideeza-400" : "bg-current"
          }`,
        }}
      >
        <FaChevronRight color="white" fontSize="16" />
      </Icon>
    </div>
  );
}

export default IconButton;
