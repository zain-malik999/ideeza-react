import React from "react";
import { Label } from "atoms";

function DisputeText(props) {
  const { value, detail, valueClass, detailClass } = props;
  return (
    <div>
      <Label
        value={value}
        classes={{
          root: `text-current tracking-tight text-sm pb-2 ${valueClass}`,
        }}
      />
      <Label
        value={detail}
        classes={{ root: `text-md font-semibold leading-6 ${detailClass}` }}
      />
    </div>
  );
}
DisputeText.defaultProps = {
  detailClass: "text-gray-810",
};
export default DisputeText;
