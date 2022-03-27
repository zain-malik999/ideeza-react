import React from "react";
import { Icon_Label } from "molecules";
import { Button } from "atoms";

function ElectronicsHeader(props) {
  const {
    mainClass,
    imageClass,
    circleClass,
    labelClass,
    buttonGroup,
    buttonIcon,
    buttonIcon2,
    buttonIcon5,
    btnClass,
    btnValue1,
    btnValue2,
    btnValue3,
    btnValue4,
    btnValue5,
    value,
    value2,
    btnClass1,
    btnClass2,
    btnClass3,
    btnClass4,
    btnClass5,
  } = props;
  return (
    <div className={mainClass}>
      <Icon_Label
        mainClass="flex items-center w-full md:w-auto"
        tooltipProps={{ open: false }}
        labelValue={
          <>
            <span>{value}</span>
            <span>{value2}</span>
          </>
        }
        iconContanerClass="text-lg"
        lableClass={{
          root: `${labelClass}`,
        }}
        iconComponent={
          <div className={circleClass}>
            <img src="/assets/images/Layer 4.png" className={imageClass} />
          </div>
        }
      />
      <div className={buttonGroup}>
        <Button
          value={btnValue1}
          classes={{
            root: `${btnClass} ${btnClass1}`,
          }}
          iconStart={buttonIcon}
        />
        <Button
          value={btnValue2}
          classes={{
            root: `${btnClass} ${btnClass2}`,
          }}
          iconStart={buttonIcon2}
        />
        <Button
          value={btnValue3}
          classes={{
            root: `${btnClass} ${btnClass3}`,
          }}
        />
        <Button
          value={btnValue4}
          classes={{
            root: `${btnClass} ${btnClass4}`,
          }}
        />
        <Button
          value={btnValue5}
          classes={{
            root: `${btnClass} ${btnClass5}`,
          }}
          iconStart={buttonIcon5}
        />
      </div>
    </div>
  );
}
ElectronicsHeader.defaultProps = {
  mainClass:
    "flex flex-wrap gap-2 md:px-5 p-3 md:py-4 bg-white md:items-center w-full border justify-between rounded",
  circleClass: "rounded-full bg-white p-2 h-11 w-11",
  imageClass: "w-8",
  labelClass:
    "text-gray-600 font-extralight pl-4 flex flex-col tracking-tight text-sm xl:whitespace-nowrap",
  buttonGroup:
    "grid grid-cols-2 md:flex md:gap-1 gap-2 md:ml-7 w-full md:w-auto",
  btnClass:
    "text-gray-600 bg-gray-375 font-sans whitespace-nowrap py-2 lg:w-36 w-full border border-solid border-gray-325 tracking-tight md:text-sm text-base rounded capitalize",
  value: "ATMEGA32M1-AU",
  value2: "AVR microcontroller;  EEPROM: 1kB;  SRAM: 2kB;  Flash: 32kB; TQFP32",
  buttonIcon: <img src="/assets/images/-e-pdf.png" alt="" />,
  buttonIcon2: <img src="/assets/images/-e-pdf.png" alt="" />,
  buttonIcon5: <img src="/assets/images/-e-pdf.png" alt="" />,
};
export default ElectronicsHeader;
