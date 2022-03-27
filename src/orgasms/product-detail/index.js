import React, { useState } from "react";
import { Button } from "atoms";
import { AboutProduct, PricingPopup } from "..";
function ProductDetail({
  iconClasses,
  saveBtn,
  state,
  clickHandler,
  postProductComment,
  onEdit,
  share,
}) {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  return (
    <>
      <AboutProduct
        postProductComment={postProductComment}
        state={state}
        iconClasses={iconClasses}
        clickHandler={clickHandler}
        onEdit={onEdit}
        share={share}
      />
      <div
        className={`flex justify-end xl:w-2/3 lg:w-11/12 w-full mx-auto p-4 pb-0 ${saveBtn}`}
      >
        <Button
          value="Save"
          classes={{
            root: `bg-ideeza-100 text-md text-white transform-none font-medium tracking-tight font-sans px-8 py-2 rounded`,
          }}
        />
      </div>
      <PricingPopup open={popup} toggleOpen={toggleOpen} />
    </>
  );
}
export default React.memo(ProductDetail);
