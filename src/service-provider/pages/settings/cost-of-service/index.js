import React, { useState, useEffect } from "react";
import { Label, Button } from "atoms";
import { TabsMolecule } from "molecules";
import { Fabrication1, Specification, AssemblyService, Dealer } from "orgasms";

function CostOfService() {
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  return (
    <div className="">
      <TabsMolecule
        index={index}
        handleChange={handleChange}
        tabsClasses="md:w-3/5 mx-auto lg:px-3"
        // tabClasses=""
        tabsData={[
          {
            name: "Fabrication",
            component: (
              <div className="lg:w-8/12 xl:w-7/12 mx-auto w-full pt-8 space-y-8 flex flex-col items-end">
                <Fabrication1 />
                <Specification />
                <Button
                  value="Save"
                  classes={{
                    root: `text-white bg-ideeza-100 px-8 tracking-tight font-sans text-base transform-none`,
                  }}
                />
              </div>
            ),
          },
          {
            name: "Assembly Service",
            component: (
              <>
                <div className="lg:w-8/12 xl:w-7/12 mx-auto w-full pt-8 space-y-8 flex flex-col items-end">
                  <AssemblyService />
                  <Button
                    value="Save"
                    classes={{
                      root: `text-white bg-ideeza-100 px-8 tracking-tight font-sans text-base transform-none`,
                    }}
                  />
                </div>
              </>
            ),
          },
          {
            name: "Dealer",
            component: (
              <div className="flex flex-col items-end space-y-6 pt-8 md:w-11/12 mx-auto">
                <Dealer />
                <Button
                  value="Update"
                  classes={{
                    root: `text-white bg-ideeza-100 px-8 tracking-tight font-sans text-base transform-none`,
                  }}
                />
              </div>
            ),
          },
        ]}
      />
      <div className="lg:w-8/12 xl:w-7/12 mx-auto w-full pt-3 space-y-12 flex flex-col items-center">
        <div className="w-full">
          {/* <Label
                    classes={{
                        root:
                            "text-current border-b border-gray-750 tracking-tight pb-1 mb-5 md:text-2xl text-xl font-sans font-bold flex justify-between items-center w-full",
                    }}
                    value={
                        <>
                            Business Informations <span className="text-gray-900 text-base font-normal">*Requried</span>
                        </>
                    }
                /> */}
          {/* <div className="flex flex-col items-end space-y-8">
                    <Fabrication1 />
                    <Specification />
                    <Button
                        value="Save"
                        classes={{
                            root: `text-white bg-ideeza-100 px-8 tracking-tight font-sans text-base transform-none`,
                        }}
                    />
                </div>
                <div className="flex flex-col items-end space-y-8">
                    <AssemblyService />
                    <Button
                        value="Save"
                        classes={{
                            root: `text-white bg-ideeza-100 px-8 tracking-tight font-sans text-base transform-none`,
                        }}
                    />
                </div> */}
        </div>
      </div>
    </div>
  );
}

export default CostOfService;
