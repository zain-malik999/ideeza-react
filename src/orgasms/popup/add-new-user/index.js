import React, { useState } from "react";
import { Modal, Label, Button } from "atoms";
import { SearchInputAsync } from "molecules";
import { useEffect } from "react";

function AddNewUser({ open, toggle, user, add }) {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    return () => setSelected("");
  }, []);
  return (
    <Modal
      open={open}
      close={toggle}
      width="sm"
      header={
        <Label
          color="primary"
          variant="h6"
          className="pl-3"
          value="Add New User"
        />
      }
      content={
        <div className="w-full pt-6">
          <SearchInputAsync
            option={user}
            id="Add New User"
            placeholder="User"
            setValue={setSelected}
          />
        </div>
      }
      actions={
        <div className="flex w-full justify-end">
          <Button onClick={toggle} value="Cancel" color="primary" />
          <Button
            onClick={add.bind(this, selected)}
            value="Add"
            color="primary"
            variant="contained"
            className="shadow-none w-32 ml-2"
          />
        </div>
      }
    />
  );
}
export default React.memo(AddNewUser);
