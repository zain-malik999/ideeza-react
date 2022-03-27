import React from "react";
import { Activity } from "molecules";
function TabActivities(props) {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="max-h-96 space-y-3 overflow-y-auto">
      {data.map((v, k) => {
        return (
          <>
            <Activity
              date="29/03/2019, 23:00"
              title="User Log in"
              description="Karen Allen logged into a system"
              dateClass="text-gray-900"
              titleClass="text-gray-300"
              descriptionClass="text-gray-300"
            />
          </>
        );
      })}
    </div>
  );
}
export default TabActivities;
