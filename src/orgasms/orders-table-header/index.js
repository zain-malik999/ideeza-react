import React from "react";
import { Select } from "atoms";
import { SearchInput } from "molecules";

function OrdersTableHeader(props) {
  const { handleSearch, placeholder } = props;
  return (
    <div className="grid grid-cols-2 md:grid-cols-7 gap-2 items-center lg:flex w-full p-4">
      <Select
        placeholder="All payouts methods"
        containerClass="bg-gray-1000 w-auto text-gray-600 text-sm tracking-tight "
        inputClass="text-sm tracking-tight py-2 px-2 pr-8"
        options={[{ name: "All payouts methods", value: "all" }]}
      />
      <Select
        placeholder="All type products"
        containerClass="bg-gray-1000 w-auto text-gray-600 text-sm tracking-tight "
        inputClass="text-sm tracking-tight py-2 px-2 pr-8"
        options={[{ name: "All type products", value: "products" }]}
      />
      <Select
        placeholder="2018"
        containerClass="bg-gray-1000 w-auto text-gray-600 text-sm tracking-tight "
        inputClass="text-sm tracking-tight py-2 px-2 pr-8"
        options={[{ name: "2018", value: "2018" }]}
      />
      <Select
        placeholder="Orders Status"
        containerClass="bg-gray-1000 w-auto text-gray-600 text-sm tracking-tight "
        inputClass="text-sm tracking-tight py-2 px-2 pr-8"
        options={[{ name: "Orders Status", value: "Orders_Status" }]}
      />
      <Select
        placeholder="Type"
        containerClass="bg-gray-1000 w-auto text-gray-600 text-sm tracking-tight "
        inputClass="text-sm tracking-tight py-2 px-2 pr-8"
        options={[{ name: "Type", value: "Type" }]}
      />
      <div className="w-full flex justify-end md:col-span-2">
        <SearchInput
          change={handleSearch}
          className="rounded-md border pl-0 ml-auto lg:w-48"
          placeholder={placeholder}
          inputClass="md:py-2 py-2.5 border"
        />
      </div>
    </div>
  );
}
OrdersTableHeader.defaultProps = {
  containerClass:
    "flex flex-col lg:flex-row lg:items-center items-end justify-between p-4",
  labelClass: "text-gray-300 text-base font-sans tracking-tight font-semibold",
  placeholder: "Search",
};
export default OrdersTableHeader;
