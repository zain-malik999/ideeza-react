import React from "react";
import { Label } from "atoms";
import { Icon_Label, SearchInput } from "molecules";
export default function UserHelp(props) {
  const { imgDiv, labelClass } = props;
  return (
    <div>
      <Label
        value="How can we help?"
        classes={{
          root: `text-xl font-sans py-2 ${labelClass}`,
        }}
      />
      <SearchInput
        placeholder="Have a question? Enter a search item here..."
        className="border border-solid"
        inputClass="bg-white rounded text-sm py-2 px-1"
      />
      <div class="grid md:grid-cols-4 gap-5 pt-10">
        <Icon_Label
          mainClass="flex-col flex justify-center items-center h-48 bg-white rounded-md shadow-md "
          labelValue="Getting Started"
          iconContanerClass="bg-transparent text-3xl text-gray-800"
          lableClass={{
            root:
              "lg:text-xl text-lg text-gray-700 pt-1 font-sans tracking-tight text-center",
          }}
          iconComponent={
            <div className={`h-18 flex items-end ${imgDiv}`}>
              <img src="/assets/images/spaceship.png" className="w-14" />
            </div>
          }
        />
        <Icon_Label
          mainClass="flex-col flex justify-center items-center h-48 items-center bg-white rounded-md shadow-md"
          labelValue="Knowledge Base"
          iconContanerClass="bg-transparent text-3xl text-gray-800"
          lableClass={{
            root:
              "lg:text-xl text-lg text-gray-700 pt-1 font-sans tracking-tight text-center",
          }}
          iconComponent={
            <div className={`h-18 flex items-end ${imgDiv}`}>
              <img
                src="/assets/images/idea.png "
                className="w-16"
                Tooltip="hidden"
              />
            </div>
          }
        />
        <Icon_Label
          mainClass="flex-col flex justify-center items-center h-48 bg-white rounded-md shadow-md"
          labelValue="Forum"
          iconContanerClass="bg-transparent text-3xl text-gray-800"
          lableClass={{
            root:
              "lg:text-xl text-lg text-gray-700 pt-1 font-sans tracking-tight text-center",
          }}
          iconComponent={
            <div className={`h-18 flex items-end ${imgDiv}`}>
              <img src="/assets/images/forum.png" className="w-16" />
            </div>
          }
        />
        <Icon_Label
          mainClass="flex-col flex justify-center items-center h-48 items-center bg-white rounded-md shadow-md"
          labelValue="News"
          iconContanerClass="bg-transparent text-3xl text-gray-800"
          lableClass={{
            root:
              "lg:text-xl text-lg text-gray-700 pt-1 font-sans tracking-tight text-center",
          }}
          iconComponent={
            <div className={`h-18 flex items-end ${imgDiv}`}>
              <img src="/assets/images/thumb.png" className="w-14" />
            </div>
          }
        />
      </div>
    </div>
  );
}
UserHelp.defaultProps = {
  labelClass: "text-current font-extrabold tracking-tight",
};
