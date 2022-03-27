import React from "react";
import { Label } from "atoms";
import { Icon_Label, TwoLabels } from "molecules";

function TabMachineProcessUpper(props) {
  const data = [
    {
      src: "/assets/images/51T+nA5ZhWL._SY355_.png",
      itemTitle: "Flame reducers for military ",
      subTitle: "3D Systems",
    },
    {
      src: "/assets/images/6d22daf4-18cb-4348-9d30-29ce186d6da3.png",
      itemTitle: "Prototype",
      subTitle: "3D Systems",
    },
    {
      src: "/assets/images/312639.png",
      itemTitle: "Wire grippers",
      subTitle: "3D Systems",
    },
  ];
  const data2 = [
    {
      src: "/assets/images/1563886209_1490619.png",
      itemTitle: "Flame reducers for military",
      subTitle: "3D Systems",
    },
    {
      src: "/assets/images/DSC_0083__17745.1423154114.1200.1200.png",
      itemTitle: "Prototype",
      subTitle: "3D Systems",
    },
    {
      src:
        "/assets/images/Processor-Application-and-Computer-Case-CPU-Cooler-Heatsink-Type.png",
      itemTitle: "Wire grippers",
      subTitle: "3D Systems",
    },
  ];
  const { mainClass, title, titleClass, title2 } = props;
  return (
    <>
      <div className={mainClass}>
        <Label value={title} classes={{ root: `${titleClass}` }} />
        <div className="grid grid-cols-3 md:px-20 py-2">
          {data.map((v, k) => {
            return (
              <>
                <div>
                  <img src="/assets/images/printer.png" alt="" />
                  <TwoLabels
                    value={v.itemTitle}
                    value2={v.subTitle}
                    labelClass="text-md tracking-tight text-gray-300 font-sans leading-4 pt-2"
                    labelClass2="text-sm tracking-tight text-gray-850 font-sans"
                  />
                </div>
              </>
            );
          })}
        </div>
        <Label value={title2} classes={{ root: `${titleClass}` }} />
        <div className="grid grid-cols-3 md:px-20 py-2">
          {data2.map((v, k) => {
            return (
              <>
                <div>
                  <img src="/assets/images/printer.png" alt="" />
                  <TwoLabels
                    value={v.itemTitle}
                    value2={v.subTitle}
                    labelClass="text-md tracking-tight text-gray-300 font-sans leading-4 pt-2"
                    labelClass2="text-sm tracking-tight text-gray-850 font-sans"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
TabMachineProcessUpper.defaultProps = {
  mainClass: "max-h-96 overflow-y-auto",
  titleClass: "text-current text-base font-semibold pl-3",
  itemvalueClass: "flex flex-col text-gray-300 text-xs",
  innerItemValueClass: "text-gray-850",
  item: "flex flex-col p-4",
  itemList: "flex justify-center w-full mt-2",
  itemImage: "w-40",
};
export default TabMachineProcessUpper;
