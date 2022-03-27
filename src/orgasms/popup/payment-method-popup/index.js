import React from "react";
import { Modal } from "atoms";
import { PaymentMethod, Icon_Label } from "molecules";
import { IoClose } from "react-icons/io5";

function PaymentMethodPopup(props) {
  const { open, toggleOpen } = props;

  return (
    <div>
      <Modal
        width="sm"
        close={toggleOpen}
        header={
          <>
            <Icon_Label
              mainClass="flex w-full items-center justify-between flex-row-reverse p-5 pb-7"
              lableClass={{
                root: `text-2xl text-gray-300 flex flex-col tracking-normal font-sans`,
              }}
              labelValue={
                <>
                  Payment methods
                  <hr className="border-t w-8 border-ideeza-100 mt-1" />
                </>
              }
              iconContanerClass=""
              iconComponent={
                <IoClose
                  className="text-gray-300 text-lg cursor-pointer"
                  onClick={toggleOpen}
                />
              }
              tooltipProps={{ open: false }}
            />
          </>
        }
        content={
          <>
            <div className="space-y-5">
              <PaymentMethod />
              <PaymentMethod />
              <PaymentMethod />
            </div>
          </>
        }
        actions={<></>}
        open={open}
      />
    </div>
  );
}
export default PaymentMethodPopup;
