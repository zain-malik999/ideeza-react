import React from "react";
import { Label } from "atoms";
import { Contributor } from "molecules";
function Admin(props) {
  const {
    heading,
    bodyValue,
    headingClass,
    bodyClass,
    contName,
    contAbout,
    iconsideValue,
  } = props;
  return (
    <div>
      <Label value={heading} classes={{ root: `${headingClass}` }} />
      <Label value={bodyValue} classes={{ root: `${bodyClass}` }} />
      <Contributor
        nameValue={contName}
        aboutValue={contAbout}
        iconValue={iconsideValue}
      />
    </div>
  );
}
Admin.defaultProps = {
  headingClass: "text-ideeza-100 tracking-tight font-sans text-lg",
  bodyClass: "pb-3 text-gray-900 text-base font-sans leading-5",
};
export default Admin;
