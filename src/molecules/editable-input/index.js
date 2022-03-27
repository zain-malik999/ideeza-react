import React from "react";
import { Label, Input } from "atoms";
import Proptype from "prop-types";
function EditableInput(props) {
  const {
    mainClass,
    childrenClass,
    editContanerClass,
    multiline,
    rows,
    headerMainClasses,
    headerClasses,
    editComponent,
    headerLabel,
    labelValue,
    handleChange,
    lableClass,
    edit,
    inputClasses,
    setTitle,
  } = props;
  return (
    <div className={mainClass}>
      <div className={headerMainClasses}>
        <Label value={headerLabel} classes={headerClasses} />
        <div className={editContanerClass} onClick={handleChange}>
          {editComponent}
        </div>
      </div>
      <div className={childrenClass}>
        {edit === true ? (
          <Input
            change={(e) => setTitle(e.target.value)}
            multiline={multiline}
            defaultValue={labelValue}
            rows={rows}
            containerClass={inputClasses}
          />
        ) : (
          <Label value={labelValue} classes={lableClass} />
        )}
        {props.children}
      </div>
    </div>
  );
}
EditableInput.defaultProps = {
  mainClass: "flex items-center mr-3",
  editContanerClass:
    "bg-white flex tems-center justify-center border border-ideeza-100 text-3xl rounded-full w-8 h-8",
  lableClass: { root: "font-bold text-2xl font-rubik text-white" },
  headerMainClasses: "flex",
};
EditableInput.prototype = {
  mainClass: Proptype.string,
  editContanerClass: Proptype.string,
  editComponent: Proptype.element,
  labelValue: Proptype.string,
  lableClass: Proptype.object,
  tooltipProps: Proptype.object,
  inputClasses: Proptype.object,
  handleChange: Proptype.object,
  headerLabel: Proptype.string,
};
export default EditableInput;
