import React from "react";
import { Label, Button } from "atoms";
import { Icon_Label, Upload } from "..";
import { useState } from "react";

function UploadField(props) {
  const [selected, setSelected] = useState();
  const {
    value,
    placeholder,
    labelValue,
    mainClass,
    lableClass,
    iconMainClass,
    inputMainClass,
    iconComponent,
    titleClass,
    inputClass,
    btnClass,
    iconContanerClass,
    btnValue,
    uploadClass,
    error,
    ref,
    add,
    attachment,
    deleted,
  } = props;
  const handleSelect = (e) => {
    if (e?.target?.files) {
      setSelected(e.target.files[0]);
    }
  };
  const addImage = () => {
    add(selected);
    return setSelected(null);
  };
  return (
    <>
      <div className={mainClass}>
        <Label value={value} classes={{ root: `${titleClass}` }} />
        <div className={`${inputMainClass}`}>
          <Upload
            value={selected ? selected?.name : placeholder}
            icon=""
            selected={selected}
            className={`${uploadClass}`}
            labelClass={`${inputClass} `}
            register={ref}
            error={error}
            mainClass="flex items-center justify-center w-full p-0 rounded-sm"
            change={handleSelect}
          />
          <Button
            onClick={addImage}
            classes={{ root: `${btnClass}` }}
            value={btnValue}
          />
        </div>
        {attachment?.map((v, k) => (
          <Icon_Label
            key={k}
            mainClass={`${iconMainClass}`}
            labelValue={v?.name}
            tooltipProps={{ open: false }}
            lableClass={{ root: `${lableClass}` }}
            iconComponent={iconComponent}
            iconContanerClass={iconContanerClass}
            onClick={deleted.bind(this, k)}
          />
        ))}
      </div>
    </>
  );
}
UploadField.defaultProps = {
  mainClass: "",
  titleClass: "pb-2 tracking-tight text-gray-300",
  inputMainClass: "flex justify-between w-full space-x-2",
  inputClass: "text-gray-900 p-1 w-full text-sm",
  btnClass: "bg-gray-900 capitalize px-6 tracking-tight text-white",
  iconMainClass: "flex rounded-none pt-3 items-center",
  lableClass: "text-gray-300 text-sm underline tracking-tight",
  iconContanerClass: "text-ideeza-100",
  uploadClass: "border border-gray-160 py-1 w-60 rounded px-2",
};
export default React.memo(UploadField);
