import React from "react";
import { TextField, Select } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
function Asynchronous({ id, option, placeholder, setValue }) {
  return (
    <>
      <Autocomplete
        id={id}
        options={option}
        variant="standard"
        className="capitalize"
        onChange={(e, v) => setValue(v)}
        getOptionLabel={(option) => `${option.first_name} ${option.last_name}`}
        renderInput={(params) => (
          <TextField
            {...params}
            color="primary"
            variant="outlined"
            label={placeholder}
            className="capitalize"
            variant="outlined"
          />
        )}
      />
    </>
  );
}
Asynchronous.defaultProps = {
  option: [],
};
export default Asynchronous;
