import React from "react";
import { Label } from "atoms";
import { ProductCard } from "..";
function ProjectProducts({ detail, changeid }) {
  return (
    <div>
      <div className="flex">
        <Label
          value="Products"
          classes={{
            root:
              "text-xl border-b-2 font-sans font-semibold border-gray-870 pr-8 pb-1",
          }}
        />
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-6 h-60vh overflow-auto pr-4">
        {detail?.user_products?.map((v, k) => {
          return (
            <div onClick={() => changeid(v?.id)}>
              <ProductCard data={v} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProjectProducts;
