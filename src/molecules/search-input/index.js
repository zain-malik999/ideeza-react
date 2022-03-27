import React from "react";
import { Input } from "atoms";
import { BsSearch } from "react-icons/bs";

function SearchInput(props) {
  const {
    className,
    inputClass,
    placeholder,
    position,
    iconClass,
    change,
  } = props;
  return (
    <div>
      <Input
        isIcon
        placeholder={placeholder}
        className={{ root: `bg-white w-full text-sm py-0 ${className}` }}
        inputProps={`${inputClass}`}
        position={position}
        containerClass="bg-white"
        change={change}
      >
        <BsSearch className={`mr-2 ${iconClass}`} />
      </Input>
    </div>
  );
}
SearchInput.defaultProps = {
  iconClass: "text-gray-300",
};
export default SearchInput;
