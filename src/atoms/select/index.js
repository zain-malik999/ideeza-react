import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ListSubheader from "@material-ui/core/ListSubheader";
import Proptype from "prop-types";
import { Controller } from "react-hook-form";
function Simple(props) {
  const {
    label,
    options,
    defaultValue,
    register,
    errors,
    name,
    isDisable,
    className,
    placeholder,
    containerClass,
    change,
    inputClass,
    isGrouped,
  } = props;
  const hasError = (inputName) => !!(errors && errors[inputName]);

  return (
    <Select
      ref={register}
      innerRef={register}
      labelId={label}
      label={label}
      id={label}
      variant="outlined"
      error={hasError(name)}
      name={name}
      disabled={isDisable}
      defaultValue={defaultValue}
      classes={
        className && {
          root: `${className} text-xs py-3`,
        }
      }
      value={props.value}
      className={containerClass}
      fullWidth
      onChange={props.change}
      inputProps={{
        shrink: "true",
        className: "border border-gray-135 text-gray-135 py-2",
      }}
      {...props}
    >
      <MenuItem value="placeholder" disabled>
        {placeholder}
      </MenuItem>
      {options &&
        Array.isArray(options) &&
        options?.map((v, k) =>
          isGrouped ? (
            <ListSubheader></ListSubheader>
          ) : (
            <MenuItem key={"a" + k} value={v.value}>
              {v.name}
            </MenuItem>
          )
        )}
    </Select>
  );
}
function ReactSelect(props) {
  const { isControlled, control, name } = props;
  const [value, setValue] = useState("placeholder");
  const setSelect = (e) => setValue(e.target.value);
  return isControlled ? (
    <Controller
      rules={{ required: true }}
      control={control}
      name={name}
      defaultValue={props.defaultValue}
      render={(proper) => (
        <Simple
          {...props}
          name={name}
          value={proper.value}
          change={(e, v) => proper.onChange(v.props.value)}
        />
      )}
    />
  ) : (
    <Simple change={setSelect} value={value} {...props} />
  );
}
ReactSelect.prototype = {
  label: Proptype.string,
  value: Proptype.string || Proptype.number,
  options: Proptype.array,
  defaultValue: Proptype.string,
  name: Proptype.string,
  isDisable: Proptype.bool,
  register: Proptype.any,
  errors: Proptype.object,
  className: Proptype.string,
  isGrouped: Proptype.bool,
};
ReactSelect.defaultProps = {
  defaultValue: "placeholder",
  isControlled: false,
  options: [],
  isGrouped: false,
  inputClass: "border my-2 border-gray-135 px-1 py-1",
};
export default ReactSelect;
