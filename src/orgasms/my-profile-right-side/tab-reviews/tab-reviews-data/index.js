import React from "react";
import { TabReviewsDataUpper, TabReviewsDataLower } from "../../..";

function TabReviewsData() {
  return (
    <div className="mt-5">
      <TabReviewsDataUpper
        labelInner1="Piter Parker"
        labelInner2="Back-end developer"
        valueInner1="Epic coders LTD"
        valueInner2="Assembly"
        rightValue="Report"
      />
      <TabReviewsDataLower
        value1="“Perfect innovative gift of my Dreams!”"
        value2="4.9"
        value3="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        value4="12.02.2020"
      />
    </div>
  );
}
export default TabReviewsData;
