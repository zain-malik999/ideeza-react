import React from "react";
import { Label } from "atoms";
import { IoIosLink } from "react-icons/io";
import { Working_request } from "..";
function NewsConnect(props) {
  const { value, connect, clickHandlerid } = props;
  return (
    <div className="bg-white w-full p-5  rounded shadow-md">
      <Label
        value={value}
        classes={{
          root: `text-ideeza-100 font-medium text-base font-sans tracking-tight border-b border-gray-750 pb-3 w-full`,
        }}
      />
      <div className="pt-4 space-y-6 max-h-48 overflow-y-auto pr-3 mt-2">
        {connect?.map((v, k) => (
          <Working_request
            clickHandler={() => clickHandlerid(v?.id)}
            icon="hidden"
            avatarClass="w-9 h-9"
            namevalue={v?.first_name + " " + v?.last_name}
            Compvalue="Frizty Studio LTD"
            btnvalue="Connect"
            btnClass="text-gray-900 py-1 capitalize bg-white border border-gray-250 border-solid"
            iconEnd={<IoIosLink className="text-gray-900 text-sm mr-1" />}
          />
        ))}
      </div>
    </div>
  );
}

NewsConnect.defaultProps = {};

export default NewsConnect;
