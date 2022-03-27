import React from "react";
import { ConfirmationLeft } from "..";
import { Button } from "atoms";

function Confirmation4(props) {
  const {
    mainClass,
    main,
    btnIcon,
    btnValue,
    btnClass,
    title1,
    src,
    value1,
    value2,
    value3,
    value4,
    value5,
    btnValue2,
    title2,
    title2left,
    placeholder,
    v1,
    v2,
    v3,
    v4,
    v5,
    v6,
    btn,
    icon,
    inputIcon,
    title3,
    va1,
    va2,
    title4,
    val1,
    val2,
    val3,
    btnVal1,
    btnVal2,
    btnVal3,
    btnVal4,
    checkboxVal,
    title5,
    valu1,
    valu2,
    valu3,
    valu4,
    valu5,
    valu6,
    vel1,
    vel2,
    vel3,
    vel4,
    vel5,
    vel6,
    vel7,
    vel8,
    srcRight,
  } = props;
  return (
    <div className={mainClass}>
      <Button
        iconStart={btnIcon}
        value={btnValue}
        color="current"
        className={btnClass}
      />
      <div className={main}>
        <ConfirmationLeft
          title1={title1}
          src={src}
          value1={value1}
          value2={value2}
          value3={value3}
          btnValue={btnValue2}
          value4={value4}
          value5={value5}
          title2={title2}
          title2left={title2left}
          placeholder={placeholder}
          v1={v1}
          v2={v2}
          v3={v3}
          v4={v4}
          v5={v5}
          v6={v6}
          btn={btn}
          icon={icon}
          inputIcon={inputIcon}
          title3={title3}
          va1={va1}
          va2={va2}
          title4={title4}
          val1={val1}
          val2={val2}
          val3={val3}
          btnVal1={btnVal1}
          btnVal2={btnVal2}
          btnVal3={btnVal3}
          btnVal4={btnVal4}
          checkboxVal={checkboxVal}
          title5={title5}
          valu1={valu1}
          valu2={valu2}
          valu3={valu3}
          valu4={valu4}
          valu5={valu5}
          valu6={valu6}
        />
        <Confirmation4Right
          value1={vel1}
          value2={vel2}
          value3={vel3}
          value4={vel4}
          value5={vel5}
          value6={vel6}
          value7={vel7}
          value8={vel8}
          src={srcRight}
        />
      </div>
    </div>
  );
}
Confirmation4.defaultProps = {
  main: "grid grid-cols-10 mt-5 space-x-4",
  btnClass: "text-white bg-current rounded px-6 py-3 space-x-4",
};
export default Confirmation4;
