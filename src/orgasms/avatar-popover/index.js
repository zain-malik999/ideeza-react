import React from "react";
import { Button } from "atoms";
import { AvatarLabels, Icon_Label } from "molecules";
import { IoLocation } from "react-icons/io5";

function AvatarPopover(props) {
  const { mainClass, img, title, subtitle, iconLabel } = props;
  return (
    <div className={`bg-white rounded-lg shadow p-4 space-y-4 ${mainClass}`}>
      <AvatarLabels
        src={img}
        avaterClasses="w-12 h-12"
        mainClasses="flex items-center"
        title={title}
        titleClasses="text-md font-semibold taxt-black-100 leading-4"
        subtitleClasses="text-gray-300 text-sm leading-4"
        subtitle={
          <>
            {subtitle}
            <Icon_Label
              mainClass="flex items-center"
              tooltipProps={{ open: false }}
              labelValue={iconLabel}
              iconContanerClass="text-lg"
              lableClass={{
                root: `text-gray-900 tracking-tight text-xs font-sans`,
              }}
              iconComponent={
                <IoLocation className="text-gray-900 text-sm -ml-1 -mt-1" />
              }
            />
          </>
        }
      />
      <div className="grid grid-cols-2 gap-x-2">
        <Button
          value="Connect"
          classes={{
            root:
              "bg-current py-1 tracking-tight text-white transform-none font-sans",
          }}
        />
        <Button
          value="Send Message"
          classes={{
            root:
              "bg-current py-1 tracking-tight text-white transform-none font-sans",
          }}
        />
      </div>
    </div>
  );
}

export default React.memo(AvatarPopover);
