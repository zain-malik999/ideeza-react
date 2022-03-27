import React from "react";
import { Select, Label } from "atoms";
import Proptype from "prop-types";
function SelectField(props) {
  const {
    mainClasses,
    value,
    labelClasses,
    containerClass,
    options,
    className,
    placeholder,
    isControlled,
    name,
    control,
    defaultValue,
    change,
    register,
    error,
  } = props;
  return (
    <div className={mainClasses}>
      <Label value={value} classes={{ root: `${labelClasses}` }} />
      <Select
        options={options}
        inputClass={className}
        placeholder={placeholder}
        containerClass={containerClass}
        name={name}
        defaultValue={defaultValue}
        control={control}
        change={change}
        isControlled={isControlled}
        register={register}
        error={error}
      />
    </div>
  );
}
SelectField.defaultProps = {
  mainClasses: "flex items-center w-full",
  labelClasses: { root: "text-md mb-0" },
  className: "w-48 p-0",
  containerClass: { root: "px-3 w-full h-2" },
  options: [{ value: "Some", name: "Some" }],
};
SelectField.prototype = {
  mainClasses: Proptype.string,
  labelClasses: Proptype.object,
  value: Proptype.string,
  containerClass: Proptype.object,
  options: Proptype.array,
};

export default React.memo(SelectField);
