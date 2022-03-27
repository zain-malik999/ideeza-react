import React from "react";
import { Label } from "atoms";
import { SearchInput } from "molecules";
import { AgentCard } from "../..";

function Agent() {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="max-h-96 pr-3 pb-3 overflow-y-auto">
      <div className="flex justify-end ">
        <SearchInput
          placeholder="Search"
          className="border"
          inputClass="text-sm py-2"
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {data.map((v, k) => {
          return (
            <>
              <AgentCard />
            </>
          );
        })}
      </div>
      <Label
        value="End of the search results"
        className="text-gray-900 text-center tracking-tight w-full pt-14"
      />
    </div>
  );
}
export default Agent;
