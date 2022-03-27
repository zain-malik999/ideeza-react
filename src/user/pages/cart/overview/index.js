import React, { useState, useEffect } from "react";
import { Dropdown, Label } from "atoms";
import { useSelector } from "react-redux";
import { CartStepper, Overview as CartOverview, CartFooter } from "orgasms";
export default function Overview() {
  const [cartItem, setCartItem] = useState();
  const cart = useSelector(({ cart }) => cart?.cart);
  useEffect(() => {
    setCartItem(cart);
  }, [cart]);
  return (
    <div>
      <div className="flex md:justify-center">
        <CartStepper currentStep={0} />
      </div>
      <div className="bg-white shadow rounded-lg p-7">
        {cartItem?.products?.map((v, k) => (
          <>
            <div className="flex items-center justify-between w-full pb-2 pr-2">
              <Label
                value={v?.user_product?.project?.title}
                className="text-lg cursor-pointer transition-all font-semibold text-current tracking-tight font-sans"
              />
              <Dropdown
                icons={
                  <img
                    src="/assets/images/Mask Group 3.png"
                    alt="setting"
                    className="h-4"
                  />
                }
                itemsClasses={{
                  root:
                    "font-sans text-sm px-4 w-32 py-3 hover:text-current text-gray-300",
                }}
                options={[
                  {
                    name: "View",
                    value: "View",
                  },
                ]}
              />
            </div>
            <CartOverview cartitem={[v]} />
          </>
        ))}

        <CartFooter btnBack="hidden" />
      </div>
    </div>
  );
}
