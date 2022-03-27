import React from "react";
import { TimeSheet, HeaderHourly, AdditionalPayment } from "../../..";
export default function TimePaymentHourly(props) {
  return (
    <div className="bg-white md:p-8 p-4">
      <HeaderHourly />
      <TimeSheet />
      <AdditionalPayment />
    </div>
  );
}
