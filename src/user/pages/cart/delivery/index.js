import React from "react";
import { CartStepper, Delivery as CartDelivery, CartFooter } from "orgasms";
export default function Delivery() {
  return (
    <div>
      <div className="flex justify-center">
        <CartStepper currentStep={3} />
      </div>
      <div className="bg-white shadow rounded-lg md:p-8 p-4">
        <CartDelivery
          value1="Shipping Service:"
          placeholder1="Ali Express Standard"
          checkValue="Use the same address from my settings"
          value2="Delivery Time:"
          value3="2 to 5 business days."
          value4="First Name"
          value5="Last Name"
          value6="Phone Number"
          value7="E-mail"
          value8="Country"
          value9="City"
          value10="Adress"
          value11="Zipcode"
          cost="Shipping Cost:"
          inner="$50"
        />
        <CartFooter />
      </div>
    </div>
  );
}
