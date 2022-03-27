import React from "react";
import { TabReviewsData } from "../..";

function TabReviews() {
  const data = [{}, {}, {}, {}, {}];
  return (
    <div className="max-h-96 p-3 pr-5 overflow-y-auto">
      <div className="w-full gap-4 mt-4">
        {data.map((v, k) => {
          return (
            <>
              <div>
                <TabReviewsData />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default TabReviews;
