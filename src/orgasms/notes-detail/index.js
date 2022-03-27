import React from "react";
import { Label } from "atoms";
import { FaRegComment } from "react-icons/fa";
import { BsPaperclip } from "react-icons/bs";
import { CheckboxFields, Icon_Label, AddAvatar } from "molecules";

function NotesDetail(props) {
  const {
    labelDate,
    labelheading,
    label3,
    label1Value,
    label2Value,
    label3Value,
    descValue,
    checkboxValue,
    checkboxValue1,
    descClass,
    label4,
    mainClass,
    avatarClass,
    bottomClass,
    chackboxClass,
  } = props;

  return (
    <div
      className={`NotesDetail border hover:border-transparent transition-all duration-500 ease-in-out cursor-pointer border-ideeza-100 rounded-sm w-full bg-gray-150 hover:bg-purple-400 ${mainClass}`}
    >
      <Label
        value={label1Value}
        classes={{ root: `mb-2 font-medium hover-text ${labelDate}` }}
      />
      <Label
        value={label2Value}
        classes={{
          root: `hover-text text-gray-300 font-semibold ${labelheading}`,
        }}
      />
      <Label value={label3Value} classes={{ root: `hover-text ${label3}` }} />
      <div className={`${chackboxClass}`}>
        <CheckboxFields
          value={checkboxValue}
          labelClass="hover-text text-gray-900 tracking-tight"
        />
        <CheckboxFields
          value={checkboxValue1}
          labelClass="hover-text text-gray-900 tracking-tight"
        />
      </div>
      <Label value={descValue} classes={{ root: `hover-text ${descClass}` }} />
      <div className={`flex justify-between ${bottomClass}`}>
        <AddAvatar labelClass="hidden" avatarClass={avatarClass} />
        <div className="flex items-center -mr-3">
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue="5"
            iconContanerClass="text-lg"
            lableClass={{
              root: "hover-text text-gray-900 text-base ml-1 font-sans",
            }}
            iconComponent={<FaRegComment className="text-ideeza-100" />}
          />
          <Icon_Label
            tooltipProps={{ open: false }}
            labelValue="5"
            iconContanerClass="text-lg"
            lableClass={{
              root: "hover-text text-gray-900 text-base font-sans",
            }}
            iconComponent={<BsPaperclip className="text-ideeza-100" />}
          />
        </div>
      </div>
      <Label
        value="Introduction to the task 4.png"
        classes={{ root: `${label4}` }}
      />
    </div>
  );
}

NotesDetail.defaultProps = {
  mainClass: "p-4 lg:px-7 px-5",
  labelDate: "text-gray-900",
  labelheading: "text-lg text-gray-300 font-semibold",
  label3: "text-gray-300 mb-3",
  descClass: "font-normal text-gray-770 pt-2",
  comment: "text-ideeza-100",
  label4: "text-ideeza-100 tracking-tight pt-2",
  label5: "text-ideeza-100 py-1",
  read: "text-ideeza-100",
  avatarClass: "w-8 h-8",
  bottomClass: "pt-7",
};

export default NotesDetail;
