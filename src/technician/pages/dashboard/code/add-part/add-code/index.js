import React, { useState } from "react";
import { CodeHeader, CustomBlockly, CodeStepper } from "orgasms";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import { TabsMolecule } from "molecules";
import { Button, Label } from "atoms";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
function AddCode() {
  const route = useRouteMatch();
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <CodeStepper currentStep={1} />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-6 w-full">
        <div className="w-full">
          <Label
            value={
              <>
                <div className="text-ideeza-100 font-bold text-xl leading-tight">
                  Edit SQN Block
                </div>
                <div className="text-gray-900 font-normal text-right">
                  1 / 3
                </div>{" "}
              </>
            }
            className="text-gray-300 flex justify-between items-center font-sans md:text-lg text-md tracking-tight border-b border-gray-750 border-opacity-50 pb-2 mb-2"
          />
          <Switch>
            <Route exact path={`${route.url}/step-1`} component={Step1} />
            <Route exact path={`${route.url}/step-2`} component={Step2} />
            <Route exact path={`${route.url}/step-3`} component={Step3} />
            <Route
              path="*"
              render={() => <Redirect to={`${route.url}/step-1`} />}
            />
          </Switch>
          <div className="flex items-center justify-between w-full">
            <Button
              value="Back"
              variant="outlined"
              size="sm"
              className="text-sm text-gray-135 font-sans capitalize px-10 py-2"
              color="info"
            />
            <Button
              value="Next Step"
              variant="contained"
              size="sm"
              className="text-sm shadow-none font-sans capitalize px-8 py-2"
              color="primary"
            />
          </div>
        </div>
        <div>
          <TabsMolecule
            index={index}
            selected="z-100"
            handleChange={handleChange}
            tabsClasses="md:w-125 w-4/5 ml-auto rounded-full border mb-3"
            tabClasses="bg-white rounded-full py-0 text-sm font-sans tracking-tight news-tabs focus:text-white focus:bg-secondary focus:font-semibold transition-all duration-500 ease-in-out transform-none text-gray-300"
            tabsData={[
              {
                name: "Code Preview",
                component: (
                  <div className="bg-gray-200 h-96">
                    <CustomBlockly />
                  </div>
                ),
              },
              {
                name: "2D Preview",
                component: (
                  <div className="bg-gray-200 h-96 flex items-center justify-center">
                    Engine3
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default AddCode;
