import React from "react";
import { Label } from "atoms";

function ProductAttachment() {
  return (
    <div className="p-4">
      <div className="bg-ideeza-100 rounded-t-xl p-2 bgLinear">
        <Label
          value="Attachments"
          classes={{ root: `text-xl font-semibold text-white ` }}
        />
      </div>
      <Label value="3 Pics attached" classes={{ root: `text-lg mt-3` }} />
      <div className="flex space-x-5 mt-3">
        <img src="/assets/images/attach1.png" alt="some" />
        <img src="/assets/images/attach2.png" alt="some" />
        <img src="/assets/images/attach3.png" alt="some" />
      </div>
      <Label value="Link attached:" classes={{ root: `text-lg mt-3` }} />
      <Label
        value="https://www.youtube.com/watch?v=0SPwwpruGIA"
        classes={{ root: `text-blue-600` }}
      />
    </div>
  );
}
export default ProductAttachment;
