import React, { useState } from "react";
import { RemoveAccount, DeleteAccountPopup } from "orgasms";
import { Button, Label } from "atoms";
function AccountAction() {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  return (
    <div className="lg:w-7/12 md:w-8/12">
      <Label
        value="Remove the account"
        classes={{
          root:
            "text-ideeza-100 text-2xl tracking-normal font-semibold font-sans pb-1 border-b border-gray-750 mb-3",
        }}
        selectdivclass="hidden"
      />
      <RemoveAccount />
      <div className="flex justify-center pt-14">
        <Button
          value="Delete"
          onClick={toggleOpen}
          classes={{
            root: "bg-red-500 px-12 text-white py-2 capitalize tracking-tight",
          }}
        />
      </div>
      <DeleteAccountPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}

export default AccountAction;
