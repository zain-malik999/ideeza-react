import React, { useState } from "react";
import { Label, Button, Input } from "atoms";
import { SelectedPayment, PaymentMethodPopup } from "..";
function PaymentDetails(props) {
  const [popup, SetPopup] = useState(false);
  const toggleOpen = () => SetPopup(!popup);
  const {
    value,
    value2,
    btnValue,
    value2Class,
    SelectedPaymentClass,
    bottomClass,
    labelBtnClass,
    btnValue2,
    btnClass2,
    btnClass,
    noSetupClass,
  } = props;
  return (
    <div className="p-4 px-5 bg-white rounded shadow-md">
      <div className="flex justify-between">
        <div className="">
          <Label
            value={value}
            classes={{
              root: `text-ideeza-100 font-semibold text-xl pb-1 tracking-normal font-sans`,
            }}
          />
          <hr className="w-8 border-t border-ideeza-100" />
        </div>
        <Button
          value={btnValue}
          onClick={toggleOpen}
          classes={{
            root: `capitalize text-white bg-ideeza-100 rounded-md font-sans py-2 md:px-10 px-8 tracking-tighter text-sm ${btnClass}`,
          }}
        />
      </div>
      <div className={`${noSetupClass}`}>
        <Label
          value="You have no setup with any payment methods yet."
          classes={{ root: `text-sm font-sans mt-5 text-gray-300` }}
        />
        <Label
          value="Tell us how you want to receive your funds."
          classes={{ root: `text-sm font-sans mt-3 text-gray-300` }}
        />
        <Label
          value="It may take up to 3 days to activate your payment method."
          classes={{ root: `text-sm font-sans text-gray-300` }}
        />
      </div>
      <div className={`${SelectedPaymentClass}`}>
        <SelectedPayment />
      </div>
      <div
        className={`flex items-center justify-between pb-1 pt-6 ${labelBtnClass}`}
      >
        <Label classes={{ root: `font-sans ${value2Class}` }} value={value2} />
        <Button
          value={btnValue2}
          size=""
          classes={{
            root: `capitalize text-white bg-gray-900 rounded-md font-sans py-3 px-6 tracking-tighter text-sm ${btnClass2}`,
          }}
        />
      </div>
      <div className={`${bottomClass}`}>
        <Label
          value="The credit balance from coupons will be automatically applien when you buy a product."
          classes={{ root: `text-xs text-gray-900 font-sans` }}
        />
        <Label
          value="Enter Ideeza coupon code"
          classes={{
            root: `text-sm mt-5 text-gray-600 font-sans md:pl-3 pb-2`,
          }}
        />
        <div className="flex space-x-4 md:justify-start justify-between pb-4">
          <div className="md:w-2/4 w-2/4">
            <Input className={{ root: "bg-gray-1000 rounded-lg" }} />
          </div>
          <Button
            value="Apply to Account"
            size="large"
            classes={{
              root:
                "capitalize text-white bg-ideeza-100 w-auto font-medium py-1 lg:px-9 md:px-6 px-4 tracking-tighter text-sm",
            }}
          />
        </div>
      </div>
      <PaymentMethodPopup open={popup} toggleOpen={toggleOpen} />
    </div>
  );
}
export default PaymentDetails;
