import React from "react";
import { Label, Input } from "atoms";

function TextField(props) {
  const {
    labelvalue,
    mainClass,
    labelClasses,
    inputClasses,
    placeholder,
    multiline,
    rows,
    type,
    InputProps,
    icon,
    isIcon,
    position,
    register,
    error,
    name,
    defaultValue,
    containerClass,
    helperText,
    change,
  } = props;
  return (
    <div className={`${mainClass}`}>
      <Label value={labelvalue} classes={{ root: `${labelClasses}` }} />
      <Input
        isIcon={isIcon}
        position={position}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        type={type}
        register={register}
        error={error}
        InputProps={InputProps}
        containerClass={containerClass}
        className={{ root: `${inputClasses}` }}
        name={name}
        defaultValue={defaultValue}
        helperText={helperText}
        change={change}
        {...props}
      >
        {icon}
      </Input>
    </div>
  );
}
TextField.defaultProps = {
  position: "start",
  mainClass: "flex items-center justify-between",
  labelClasses: "font-medium text-gray-550 tracking-tight",
};
export default TextField;
