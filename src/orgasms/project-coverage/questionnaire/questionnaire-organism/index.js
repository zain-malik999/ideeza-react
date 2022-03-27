import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { Label, Input, Button, Popover } from "atoms";
function QuestionnaireOrganism(props) {
  const {
    number,
    question,
    description,
    dot,
    iconClass,
    rows,
    inputClass,
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <div className="flex items-center space-x-4 pb-2">
        <Label
          value={`${number}${dot}  ${question}`}
          classes={{ root: "text-base font-sans text-gray-300 tracking-tight" }}
        />
        <IconButton
          className={`p-0 outline-none ${iconClass}`}
          onClick={handleClick}
          aria-describedby={id}
          id={id}
        >
          <Label
            value="?"
            classes={{
              root:
                "bg-blue-150 rounded-full text-white text-lg flex items-center justify-center w-6 h-6",
            }}
          />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          classes={{ paper: "md:w-1/2" }}
        >
          <Label
            classes={{
              root:
                "text-base tracking-tight font-sans text-ideeza-100 font-sans p-3 font-light",
            }}
            value={description}
          />
        </Popover>
      </div>
      <Input
        placeholder="Write here..."
        className={{ root: `text-md p-0 border border-gray-160 ${inputClass}` }}
        containerClass="text-xs"
        multiline={true}
        rows={rows}
      />
    </div>
  );
}
QuestionnaireOrganism.defaultProps = {
  dot: ".",
  rows: "6",
};
export default QuestionnaireOrganism;
