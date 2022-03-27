import React from "react";
import { CheckboxFields } from "..";
import { Label } from "atoms";
export default function PrivacySection(props) {
  const {
    heading,
    label1Value,
    label1Class,
    label2Value,
    label3Value,
    label2Class,
    label3Class,
    lableBottom,
    lableBottomClass,
  } = props;
  return (
    <div>
      <Label
        value={heading}
        classes={{
          root:
            "text-ideeza-100 text-lg font-sans tracking-tight font-semibold border-b pb-2 border-gray-750 mb-4",
        }}
      />
      <div className="rounded-md bg-white shadow">
        <div className="md:px-6 px-4">
          <Label value={label1Value} classes={{ root: `${label1Class}` }} />
          <Label value={label2Value} classes={{ root: `${label2Class}` }} />
          <Label value={label3Value} classes={{ root: `${label3Class}` }} />
        </div>
        <Label className="border-t border-gray-750 mt-4" />
        <CheckboxFields
          mainClass="p-3 md:px-4 items-start md:items-center"
          value={lableBottom}
          labelClass={`text-gray-300 text-sm pt-0.5 md:pt-0 ${lableBottomClass}`}
        />
      </div>
    </div>
  );
}
PrivacySection.defaultProps = {
  label1Class: "text-gray-300 text-sm pt-4 leading-5",
  label2Class: "text-gray-300 text-sm pt-4 leading-5",
  label3Class: "text-gray-300 text-sm pt-4 leading-5",
};
