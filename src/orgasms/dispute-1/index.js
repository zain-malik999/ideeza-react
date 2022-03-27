import React from "react";
import { DisputeText } from "molecules";

function Dispute1() {
  return (
    <div className="bg-gray-150 rounded-xl p-4 md:col-span-3 space-y-4">
      <DisputeText value="Did you receive your package?" detail="Yes" />
      <DisputeText
        value="Logistics tracking problem"
        detail="Purchase Protection is running 
            out, but package is still in transit"
        detailClass="w-1/2 text-gray-810"
      />
      <DisputeText
        value="Customs problem"
        detail="Customs is holding the package"
      />
      <DisputeText value="Other" detail="Package sent to a wrong address" />
      <DisputeText value="Refund Request:" detail="1000 USD From  3000 USD" />
      <DisputeText
        value="User request details:"
        detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <DisputeText
        value="User evidence:"
        detail="Text.txt"
        detailClass="text-gray-300"
      />
    </div>
  );
}

export default Dispute1;
