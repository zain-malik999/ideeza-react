import React from "react";
import { Button } from "atoms";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

function CartFooter({ btnBack, btnContinue, btnNext, valueNext }) {
  return (
    <div
      className={`flex md:flex-row flex-col space-y-3 w-full items-center justify-between md:space-y-0 md:space-x-3`}
    >
      <Button
        value="Back Step"
        iconStart={<IoArrowBackCircleOutline className="text-lg" />}
        classes={{
          root: `text-white bg-current border border-solid border-current tracking-tight font-sans capitalize p-2 px-4 text-md ${btnBack}`,
        }}
      />
      <Button
        value="Continue Shopping"
        classes={{
          root: `border-2 border-solid border-current text-current px-4 text-md p-2 tracking-tight font-sans capitalize ${btnContinue}`,
        }}
      />
      <Button
        value={valueNext}
        iconEnd={<IoArrowForwardCircleOutline className="text-lg" />}
        classes={{
          root: `text-white bg-current border border-solid border-current tracking-tight font-sans capitalize p-2 px-4 text-md ${btnNext}`,
        }}
      />
    </div>
  );
}
CartFooter.defaultProps = {
  valueNext: "Next Step",
  mainClass: "lg:mt-12 md:pt-8 pt-4",
};
export default CartFooter;
