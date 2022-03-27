import React from "react";
import { TabMachineProcessUpper, TabMachineProcessLower } from "../..";
function TabMachineProcess(props) {
  const { mainClass } = props;
  return (
    <div className={mainClass}>
      <TabMachineProcessUpper
        title="3D printing - Additive"
        title2="CNC Machining - Subtractive"
      />
      <TabMachineProcessLower
        item="- > Maraging Steel MS1"
        item2="- > Maraging Steel (1.2709)"
        col2Value1="Colors"
        col2Value2="Finish"
        col2Value3="TAT"
        col2Value4="3 days"
        col2Value5="3 days"
      />
    </div>
  );
}
TabMachineProcess.defaultProps = {
  mainClass: "",
};
export default TabMachineProcess;
