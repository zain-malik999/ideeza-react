import React from "react";
import { Dropdown } from "atoms";
import { AvatarLabels, TextField } from "molecules";
import { IoHappySharp, IoSendSharp } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";

function MessageCenter(props) {
  const {
    mainClass,
    header,
    src,
    avatarClass,
    labelsClass,
    user,
    status,
    userClass,
    statusClass,
    person,
    dotBars,
    circle,
    circleClass,
    labelsClass2,
    textMsg,
    textMsgClass,
    textMsgClass2,
    time,
    timeClass,
    msg,
    send,
    recive,
    textMsg2,
    msg2,
    src2,
    labelsClass3,
    inputClass,
    inputText,
    class1,
  } = props;
  return (
    <div className={mainClass}>
      <div>
        <div className={header}>
          <AvatarLabels
            src={src}
            avaterClasses={avatarClass}
            mainClassesLabel={labelsClass}
            title={user}
            subtitleClasses={statusClass}
            titleClasses={userClass}
            subtitle={
              <>
                <span className={circleClass}>{circle}</span>
                <span className={statusClass}>{status}</span>
              </>
            }
            mainClasses={person}
          />
          <Dropdown
            mainClass="p-0 md:p-auto"
            icons={<BiDotsVerticalRounded className="text-3xl text-blue-800" />}
            itemsClasses={{
              root:
                "font-sans text-sm px-3 md:py-1 hover:text-current text-gray-300",
            }}
            options={[
              {
                name: "Blog",
                value: "Blog",
              },
              {
                name: "Report this user",
                value: "Report",
              },
              {
                name: "Leave this conversation",
                value: "Leave",
              },
            ]}
          />
        </div>
        <div className="p-3 pt-8 space-y-2">
          <div className={send}>
            <AvatarLabels
              src={src}
              avaterClasses={avatarClass}
              mainClassesLabel={labelsClass2}
              title={time}
              titleClasses={timeClass}
              subtitle={textMsg}
              subtitleClasses={textMsgClass}
              mainClasses={msg}
            />
            <Dropdown
              icons={
                <img
                  src="/assets/images/Mask Group 3.png"
                  alt="setting"
                  className="w-4"
                />
              }
              itemsClasses={{
                root:
                  "font-sans text-sm px-3 py-1 hover:text-current text-gray-300",
              }}
              options={[
                {
                  name: "Delete",
                  value: "delete",
                },
                {
                  name: "Edit",
                  value: "edit",
                },
                {
                  name: "Mark as unread",
                  value: "unread",
                },
              ]}
            />
          </div>
          <div className={recive}>
            <Dropdown
              icons={
                <img
                  src="/assets/images/Mask Group 3.png"
                  alt="setting"
                  className="w-4"
                />
              }
              itemsClasses={{
                root:
                  "font-sans text-sm px-3 py-1 hover:text-current text-gray-300",
              }}
              options={[
                {
                  name: "Delete",
                  value: "delete",
                },
                {
                  name: "Edit",
                  value: "edit",
                },
                {
                  name: "Mark as unread",
                  value: "unread",
                },
              ]}
            />
            <AvatarLabels
              src={src2}
              avaterClasses={avatarClass}
              mainClassesLabel={labelsClass3}
              title={time}
              titleClasses={timeClass}
              subtitle={textMsg2}
              subtitleClasses={textMsgClass2}
              mainClasses={msg2}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center border-t border-solid border-gray-425 px-4 mt-5">
        <IoHappySharp className="text-blue-800 text-2xl" />
        <TextField
          mainClass={inputClass}
          isIcon
          position="end"
          icon={<IoSendSharp className="text-blue-800 text-xl" />}
          placeholder={inputText}
          inputClasses={class1}
        />
      </div>
    </div>
  );
}
MessageCenter.defaultProps = {
  mainClass: "h-full flex flex-col justify-between",
  header:
    "flex items-center justify-between pl-4 md:pr-3 py-3 border-b bolrder-solid border-gray-425",
  person: "flex items-center",
  avatarClass: "h-12 w-12",
  userClass: "text-blue-550 text-base font-sans tracking-tight font-semibold",
  statusClass: "text-blue-800 flex items-center",
  circleClass: "text-current",
  send: "flex items-center md:pr-12",
  recive: "flex items-center justify-end md:pl-12",
  timeClass: "text-blue-125 text-xs",
  msg: "items-end flex",
  labelsClass2: "items-end flex flex-col pl-4",
  textMsg:
    "I need someone to walk out with my dog for a while. He's very sad now and needs some relax. Could you help me with this?",
  textMsg2: "Hello, sure. How can I help you?",
  textMsgClass:
    "border border-solid text-sm tracking-tight border-gray-425 rounded-t-md rounded-r-md font-sans md:p-5 p-4",
  msg2: "flex flex-row-reverse items-end",
  labelsClass3: "flex items-end pr-4 flex-col",
  textMsgClass2:
    "border border-solid text-sm tracking-tight bg-current text-white font-sans border-gray-425 rounded-t-md rounded-l-md md:px-8 px-4 py-3 md:py-5",
  inputClass: "flex items-center justify-between py-5 w-full",
  class1: "text-gray-990 tracking-tight font-sans text-sm",
};
export default MessageCenter;
