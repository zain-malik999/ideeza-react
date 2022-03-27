import React from "react";

function CheckboxCustom({ className, id }) {
  return (
    <>
      <input className="hidden checkbox" type="checkbox" id={id} />
      <label for={id} className={className}></label>
    </>
  );
}
CheckboxCustom.defaultProps = {
  className: "w-7 h-7 rounded-sm check",
};
export default CheckboxCustom;
