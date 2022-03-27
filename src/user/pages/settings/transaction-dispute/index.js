import React from "react";
import { Icon_Label } from "molecules";
import { Dispute } from "orgasms";

function TransactionDispute() {
  return (
    <div className="pt-2 md:pt-0">
      <Icon_Label
        mainClass="flex w-full items-center space-x-1 pb-4"
        lableClass={{
          root: `text-xl font-semibold text-current tracking-tight font-sans`,
        }}
        labelValue={<>Dispute to Giorgi John</>}
        iconContanerClass=""
        iconComponent={
          <img
            src="/assets/images/dispute.png"
            className="w-8"
            alt="dispute"
            srcset=""
          />
        }
        tooltipProps={{ open: false }}
      />
      <Dispute />
    </div>
  );
}

export default TransactionDispute;
