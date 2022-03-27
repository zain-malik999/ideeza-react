import React from "react";
import { Menu, MenuItem, IconButton, Fade } from "@material-ui/core";
import Prototype from "prop-types";
function Dropdown(props) {
  const { options, itemsClasses, icons, className } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (func) => {
    setAnchorEl(null);
    if (func) {
      func();
    }
  };
  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={`outline-none md:z-10 ${className}`}
      >
        {icons}
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted={false}
        open={open}
        onClose={() => handleClose(() => {})}
        PaperProps={{}}
        TransitionComponent={Fade}
      >
        {options?.map((v, k) => (
          <MenuItem
            classes={itemsClasses}
            key={k}
            value={v.value}
            onClick={() => handleClose(v.func ? v.func : () => {})}
          >
            {v.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
Dropdown.prototype = {
  id: Prototype.string,
  handleClose: Prototype.func,
};
export default Dropdown;
