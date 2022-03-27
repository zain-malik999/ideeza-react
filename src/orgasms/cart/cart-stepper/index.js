import React from "react";
import {
  FaClipboardList,
  FaUserPlus,
  FaTelegramPlane,
  FaCreditCard,
} from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";
import { Steppers } from "molecules";
export default function CartStepper(props) {
  const { currentStep, mainClass } = props;
  return (
    <div className={`lg:w-1/2 md:w-3/5 w-full ${mainClass}`}>
      <Steppers
        currentStep={currentStep}
        className=""
        options={[
          "Overview",
          "Cart",
          "Add Service",
          "Delivery",
          "Payment",
          "Confirmation",
        ]}
        Icons={{
          1: (
            <FaClipboardList className="p-3 w-12 h-12 border-t border-b rounded-full border-current " />
          ),
          2: (
            <MdShoppingCart className="p-3 w-12 h-12 border-t border-b rounded-full border-current " />
          ),
          3: (
            <FaUserPlus className="p-3 w-12 h-12 border-t border-b rounded-full border-current " />
          ),
          4: (
            <FaTelegramPlane className="p-3 w-12 h-12 border-t border-b rounded-full border-current " />
          ),
          5: (
            <FaCreditCard className="p-3 w-12 h-12 border-t border-b rounded-full border-current " />
          ),
          6: (
            <BiCheckCircle className="p-3 w-12 h-12 border-t border-b border-r rounded-full border-current" />
          ),
        }}
      />
    </div>
  );
}
