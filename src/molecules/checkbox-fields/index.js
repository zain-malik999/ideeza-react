import React from "react";
import { Checkbox, Label } from "atoms";
import { FormControlLabel } from "@material-ui/core";
import { Controller } from "react-hook-form";
function CheckboxFields(props) {
  const {
    value,
    labelClass,
    color,
    size,
    mainClass,
    checkboxClass,
    checked,
    control,
    name,
    isControl,
  } = props;

  return (
    <div className={`flex ${mainClass}`}>
      {isControl ? (
        <FormControlLabel
          control={
            <Controller
              name={name}
              control={control}
              render={(props) => (
                <Checkbox
                  {...props}
                  checked={props.value}
                  color={color}
                  size={size}
                  className={`p-1 ${checkboxClass}`}
                  onChange={(e) => props.onChange(e.target.checked)}
                />
              )}
            />
          }
          label={<Label value={value} classes={{ root: `${labelClass}` }} />}
        />
      ) : (
        <>
          <Checkbox
            checked={checked}
            color={color}
            size={size}
            className={`p-1 ${checkboxClass}`}
          />
          <Label value={value} classes={{ root: `${labelClass}` }} />
        </>
      )}
    </div>
  );
}
CheckboxFields.defaultProps = {
  mainClass: "items-center -ml-1",
  isControl: false,
};
export default CheckboxFields;
