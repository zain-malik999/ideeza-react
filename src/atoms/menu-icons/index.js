import React from "react";
import { Button } from "../index";

function CustomizedMenus() {
  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="current"
        value="Open menu"
      />
    </div>
  );
}
export default CustomizedMenus;
