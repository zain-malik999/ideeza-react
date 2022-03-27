import React from "react";
import { Icon_Label } from "molecules";
import { Label } from "atoms";
import { MessagesFavourites, ChatCard } from "../..";

function MessageLeft(props) {
  const {
    mainClass,
    icon,
    value1,
    labelClass,
    headerClass,
    iconClass,
    value2,
    value3,
    value4,
    value5,
    class2,
    class3,
    avatarSrc,
    recent,
    recentInner,
    recentClass,
    innerClass,
    src,
    title,
    title2,
    number2,
    msg,
    time,
    number,
  } = props;
  return (
    <div className={mainClass}>
      <Icon_Label
        tooltipProps={{ open: false }}
        iconComponent={icon}
        labelValue={value1}
        lableClass={labelClass}
        mainClass={headerClass}
        iconContanerClass={iconClass}
      />
      <Label value={value2} classes={{ root: `${class2}` }} />
      <MessagesFavourites
        mainClass={class3}
        value1={value3}
        value2={value4}
        value3={value5}
        src={avatarSrc}
      />
      <Label
        value={
          <>
            {recent}
            <span className={innerClass}>{recentInner}</span>
          </>
        }
        classes={{ root: `${recentClass}` }}
      />
      <ChatCard
        src={src}
        title={title}
        title2={title2}
        number2={number2}
        msg={msg}
        time={time}
        number={number}
      />
    </div>
  );
}
MessageLeft.defaultProps = {
  headerClass:
    "flex items-center flex-row-reverse items-center justify-between px-4 py-3 border-b border-solid border-gray-425",
  labelClass: {
    root: "uppercase text-blue-550 font-semibold text-md font-sans",
  },
  iconClass: "text-blue-800 text-2xl cursor-pointer",
  class2: "text-blue-550 tracking-tight font-sans text-md p-3 pb-2",
  class3: "px-3 space-x-3 flex w-full overflow-x-auto",
  recentClass:
    "flex text-blue-550 font-mont font-semibold text-md px-3 pt-4 pb-2",
  innerClass: "text-gray-300 font-sans tracking-tight font-normal text-sm pl-1",
};
export default MessageLeft;
