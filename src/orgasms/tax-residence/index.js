import React from "react";
import { Label, Button } from "atoms";
import { TaxResidence1, TaxResidence2 } from "..";
function TaxResidence(props) {
  const { main1Class, main2Class } = props;
  return (
    <div className="p-5 space-y-5">
      <div>
        <Label
          value="Tax Residence"
          classes={{ root: `font-sans text-xl pb-1 tracking-tight` }}
        />
        <hr className="w-8 border-t border-ideeza-100" />
      </div>
      <TaxResidence1 mainClass={`${main1Class}`} />
      <TaxResidence2 mainClass={`${main2Class}`} />
      <div className="flex items-center space-x-3">
        <Button
          value="Save"
          classes={{
            root: `text-white bg-ideeza-100 border border-solid border-ideeza-100 tracking-tight text-sm capitalize p-2 w-3/12`,
          }}
        />
        <Button
          value="Cancel"
          classes={{
            root: `border border-solid border-gray-300 text-gray-300 p-2 tracking-tight text-sm capitalize w-3/12`,
          }}
        />
      </div>
    </div>
  );
}

TaxResidence.defaultProps = {
  labelPara: "",
  button: "border-solid",
};
export default TaxResidence;
