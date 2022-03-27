import React from "react";
import { Label, Avatar } from "atoms";
import { TwoLabels, AvatarLabels } from "molecules";
import { GrMail } from "react-icons/gr";

function TabAboutUpper(props) {
  const {
    mainClass,
    colClass1,
    colClass2,
    title1,
    col3Title1,
    infoValue1,
    infoValue2,
    infoValue3,
    infoValue4,
    infoValue5,
    infoValue6,
    infoValue7,
    infoValue8,
    infoValue9,
    infoValue10,
    infoValue11,
    infoValue12,
    infoValue13,
    infoValue14,
    infoValue15,
    infoValue16,
    infoValue17,
    infoValue18,
    infoValue19,
    infoValue20,
    mailIcon,
    profileName,
    profileDes,
    profileBar,
    colBody,
    colBody2,
    titleClass1,
  } = props;
  return (
    <>
      <div
        className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ${mainClass}`}
      >
        <div className={colClass1}>
          <Label value={title1} classes={{ root: `${titleClass1}` }} />
          <div className={colBody}>
            <TwoLabels
              mainClass="grid md:grid-cols-3 grid-cols-2"
              value={infoValue1}
              value2={infoValue2}
              labelClass="text-gray-300 text-md tracking-tight font-sans"
              labelClass2="text-gray-300 text-sm tracking-tight font-sans md:col-span-2"
            />
            <TwoLabels
              mainClass="grid md:grid-cols-3 grid-cols-2"
              value={infoValue3}
              value2={infoValue4}
              labelClass="text-gray-300 text-md tracking-tight font-sans"
              labelClass2="text-gray-300 text-sm tracking-tight font-sans md:col-span-2"
            />
            <TwoLabels
              mainClass="grid md:grid-cols-3 grid-cols-2"
              value={infoValue5}
              value2={infoValue6}
              labelClass="text-gray-300 text-md tracking-tight font-sans"
              labelClass2="text-gray-300 text-sm tracking-tight font-sans md:col-span-2"
            />
            <TwoLabels
              mainClass="grid md:grid-cols-3 grid-cols-2"
              value={infoValue7}
              value2={infoValue8}
              labelClass="text-gray-300 text-md tracking-tight font-sans"
              labelClass2="text-current text-sm tracking-tight font-sans md:col-span-2"
            />
          </div>
        </div>
        <div className={colClass2}>
          <div className={colBody2}>
            <TwoLabels
              mainClass="grid grid-cols-2"
              value={infoValue9}
              value2={infoValue10}
              labelClass="text-gray-300 text-md tracking-tight font-sans"
              labelClass2="text-current text-sm tracking-tight font-sans"
            />
            <TwoLabels
              mainClass="grid grid-cols-2"
              value={infoValue11}
              value2={infoValue12}
              labelClass="text-gray-300 text-md tracking-tight font-sans"
              labelClass2="text-gray-300 text-sm tracking-tight font-sans"
            />
            <TwoLabels
              mainClass="grid grid-cols-2"
              value={infoValue13}
              value2={infoValue14}
              labelClass="text-gray-300 text-md tracking-tight font-sans"
              labelClass2="text-gray-300 text-sm tracking-tight font-sans"
            />
          </div>
        </div>
        <div className="lg:px-3 pt-5 lg:pt-0">
          <Label value={col3Title1} classes={{ root: `${titleClass1}` }} />
          <div className="w-full mt-3">
            <div className={profileBar}>
              <AvatarLabels
                mainClasses="flex items-center"
                avaterClasses="h-8 w-8"
                title={profileName}
                titleClasses="text-gray-300 text-md tracking-tight font-sans leading-4"
                subtitle={profileDes}
                subtitleClasses="text-gray-900 text-sm"
              />
              <GrMail className={mailIcon} />
            </div>
            <TwoLabels
              mainClass="grid md:grid-cols-3 grid-cols-2"
              value={infoValue15}
              value2={infoValue16}
              labelClass="text-gray-900 text-md tracking-tight font-sans"
              labelClass2="text-gray-600 text-sm tracking-tight font-sans md:col-span-2"
            />
            <TwoLabels
              mainClass="grid md:grid-cols-3 grid-cols-2"
              value={infoValue17}
              value2={infoValue18}
              labelClass="text-gray-900 text-md tracking-tight font-sans"
              labelClass2="text-gray-600 text-sm tracking-tight font-sans md:col-span-2"
            />
            <TwoLabels
              mainClass="grid md:grid-cols-3 grid-cols-2"
              value={infoValue19}
              value2={infoValue20}
              labelClass="text-gray-900 text-md tracking-tight font-sans"
              labelClass2="text-gray-600 text-sm tracking-tight font-sans md:col-span-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
TabAboutUpper.defaultProps = {
  titleClass1: "text-current font-semibold text-base tracking-tight uppercase",
  colClass1: "pr-2",
  colClass2: "mt-5",
  colsMainClass: "grid grid-cols-2 gap-x-2 pb-3",
  titleLeft: "text-sm text-gray-300 font-sans tracking-tight whitespace-nowrap",
  colTitleRight: "text-sm font-thin text-gray-300",
  colTitleRight2: "text-current",
  avatarClass: "h-8 w-8",
  adminProfile: "text-gray-300 text-xs flex flex-col",
  profileBar: "flex w-full justify-between space-x-2",
  mailIcon: "text-gray-770 text-xl ml-auto",
  admin: "grid grid-cols-4",
  col3TitleLeft: "text-gray-300 text-xs",
  col3TitleRight: "text-gray-300 text-xs col-span-2",
  colBody: "space-y-3 mt-3",
  colBody2: "lg:border-r md:border-l space-y-3 md:mt-4 md:px-2",
};
export default TabAboutUpper;
