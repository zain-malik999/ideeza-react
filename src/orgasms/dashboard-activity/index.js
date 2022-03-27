import React from "react";
import { Activity, LabelFields } from "molecules";
function DashboardActivity({ activity }) {
  return (
    <div>
      <div className="pr-14 mt-1 mb-2">
        <LabelFields
          mainClass="pb-2 border-current"
          value="Last activities"
          selectdivclass="hidden"
          btnValue="View last activity"
        />
      </div>
      <div className="space-y-3 max-h-52 min-h-32 overflow-y-auto">
        {activity?.length > 0 ? (
          activity?.map((val) => {
            return (
              <Activity
                date={val?.created_at}
                title={val?.title}
                description={val?.document_type}
              />
            );
          })
        ) : (
          <p className="text-center h-full flex items-center justify-center w-full text-gray-500">
            User Have No Activity!
          </p>
        )}
      </div>
    </div>
  );
}

export default DashboardActivity;
