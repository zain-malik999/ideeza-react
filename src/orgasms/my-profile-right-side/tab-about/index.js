import React from "react";
import { TabAboutUpper } from "../..";
import { Label } from "atoms";
import { TwoLabels } from "molecules";
function TabAbout() {
  return (
    <>
      <Label
        value="Representative information"
        classes={{
          root: `text-current font-semibold text-base tracking-tight uppercase`,
        }}
      />
      <div className={`grid md:grid-cols-2 grid-cols-1 md:gap-x-2`}>
        <div className="space-y-3 mt-6">
          <TwoLabels
            mainClass="grid lg:grid-cols-3 grid-cols-2"
            value="First Name:"
            value2="John"
            labelClass="text-gray-300 text-md tracking-tight font-sans"
            labelClass2="text-gray-300 text-sm tracking-tight font-sans lg:col-span-2"
          />
          <TwoLabels
            mainClass="grid lg:grid-cols-3 grid-cols-2"
            value="Last Name:"
            value2="Doe"
            labelClass="text-gray-300 text-md tracking-tight font-sans"
            labelClass2="text-gray-300 text-sm tracking-tight font-sans lg:col-span-2"
          />
          <TwoLabels
            mainClass="grid lg:grid-cols-3 grid-cols-2"
            value="I Am:"
            value2="Male"
            labelClass="text-gray-300 text-md tracking-tight font-sans"
            labelClass2="text-gray-300 text-sm tracking-tight font-sans lg:col-span-2"
          />
          <TwoLabels
            mainClass="grid lg:grid-cols-3 grid-cols-2"
            value="Email Adress:"
            value2="john@gmail.com"
            labelClass="text-gray-300 text-md tracking-tight font-sans"
            labelClass2="text-current text-sm tracking-tight font-sans lg:col-span-2"
          />
          <TwoLabels
            mainClass="grid lg:grid-cols-3 grid-cols-2"
            value="Phone Number:"
            value2="+123 12512 33213"
            labelClass="text-gray-300 text-md tracking-tight font-sans"
            labelClass2="text-current text-sm tracking-tight font-sans lg:col-span-2"
          />
          <TwoLabels
            mainClass="grid lg:grid-cols-3 grid-cols-2"
            value="Language:"
            value2="English"
            labelClass="text-gray-300 text-md tracking-tight font-sans"
            labelClass2="text-gray-300 text-sm tracking-tight font-sans lg:col-span-2"
          />
          <TwoLabels
            mainClass="grid lg:grid-cols-3 grid-cols-2"
            value="Adress:"
            value2="111 E 55th Street New York, NY"
            labelClass="text-gray-300 text-md tracking-tight font-sans"
            labelClass2="text-gray-300 text-sm tracking-tight font-sans lg:col-span-2"
          />
        </div>
        <div className="md:border-l space-y-3 md:mt-6 md:px-2">
          <TwoLabels
            mainClass="grid lg:grid-cols-3 grid-cols-2"
            value="Employer:"
            value2="Google"
            labelClass="text-gray-300 text-md tracking-tight font-sans"
            labelClass2="text-current text-sm tracking-tight font-sans lg:col-span-2"
          />
          <TwoLabels
            mainClass="grid lg:grid-cols-3 grid-cols-2"
            value="Timezone:"
            value2="(GMT+01:00)"
            labelClass="text-gray-300 text-md tracking-tight font-sans"
            labelClass2="text-gray-300 text-sm tracking-tight font-sans lg:col-span-2"
          />
          <TwoLabels
            mainClass="grid lg:grid-cols-3 grid-cols-2"
            value="Describe Yourself:"
            value2="Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
             consequat. "
            labelClass="text-gray-300 text-md tracking-tight font-sans"
            labelClass2="text-gray-300 text-sm tracking-tight font-sans lg:col-span-2"
          />
        </div>
      </div>
      <TabAboutUpper
        // mainClass="hidden"
        title1="Company information"
        infoValue1="Name:"
        infoValue2="Google"
        infoValue3="Phone:"
        infoValue4="+1 333 424 1709"
        infoValue5="Address:"
        infoValue6="111 E 55th Street New York, NY"
        infoValue7="E-mail:"
        infoValue8="john@gmail.com"
        infoValue9="Website:"
        infoValue10="www.johndoe.com"
        infoValue11="Members:"
        infoValue12="04"
        infoValue13="Shipping method:"
        infoValue14="Fedex, UPS"
        infoValue15="Email"
        infoValue16="ljoena@mail.com"
        infoValue17="Addres"
        infoValue18="New York, NY"
        infoValue19="Phone"
        infoValue20="+241 293 182 291"
        col3Title1="Admin"
        profileName="Lucas Joena"
        profileDes="Admin"
      />
    </>
  );
}
export default TabAbout;
