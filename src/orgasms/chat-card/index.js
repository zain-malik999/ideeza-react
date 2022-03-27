import React from "react";
import { Label } from "atoms";
import { AvatarLabels } from "molecules";

function ChatCard(props) {
  const {
    mainClass,
    src,
    title2,
    msg,
    titleClasses,
    subtitleClasses,
    avaterClasses,
    time,
    timeClass,
    number,
    number2,
    numberClass,
    labels,
    main,
  } = props;
  const data = [{}, {}, {}, {}, {}, {}];
  return (
    <>
      {data.map((v, k) => {
        return (
          <div className={mainClass}>
            <AvatarLabels
              src={src}
              mainClasses={main}
              title={title2}
              subtitle={msg}
              titleClasses={titleClasses}
              subtitleClasses={subtitleClasses}
              avaterClasses={avaterClasses}
              mainClassesLabel={labels}
            />
            <Label
              value={
                <>
                  {time} <span className={numberClass}>{number2}</span>
                </>
              }
              classes={{ root: `${timeClass}` }}
            />
          </div>
        );
      })}
    </>
  );
}
ChatCard.defaultProps = {
  mainClass:
    "xl:pl-4 p-2 flex justify-between items-center bg-white cursor-pointer hover:bg-blue-950 overflow-hidden",
  avaterClasses: "h-12 w-12 rounded-full",
  titleClasses: "text-md font-thin text-black-100 whitespace-nowrap",
  subtitleClasses: "text-gray-900 md:text-xs text-2xs pt-1",
  timeClass:
    "md:text-xs text-2xs text-gray-990 whitespace-nowrap pt-2 flex flex-col items-center",
  numberClass: "text-ideeza-100 text-sm pt-1",
  labels: "pl-4",
  main: "mt-0 flex items-center",
};
export default ChatCard;
