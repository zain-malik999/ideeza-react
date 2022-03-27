import React, { useState } from "react";
import { Label } from "atoms";
import { TabsMolecule, Icon_Label, Steppers } from "molecules";
import {
  EmailCenter1,
  EmailCenter2,
  EmailCenter3,
  EmailCenter4,
  Phone,
  Header,
} from "orgasms";
import { GoMail } from "react-icons/go";
import { IoChatbubbleEllipsesOutline, IoCallOutline } from "react-icons/io5";
function Support() {
  const [index, setIndex] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  return (
    <>
      <div className="bg-header">
        <Header />
      </div>
      <div className="xl:px-32 md:px-16 md:pt-16 p-4">
        <Label
          value="Support Center"
          classes={{
            root: `text-gray-300 text-xl tracking-tight pb-3`,
          }}
        />
        <div className="my-2 w-full">
          <TabsMolecule
            tabsClasses="border-b pb-4 mb-4 grid lg:grid-cols-2 grid-col-1 md:pr-16"
            tabClasses="bg-white hover:bg-current focus:bg-current focus:text-white rounded-md text-base tracking-tight md:mr-4 mr-2 text-gray-300 font-sans transform-none shadow-md"
            handleChange={handleChange}
            index={index}
            tabsData={[
              {
                name: (
                  <Icon_Label
                    labelValue="Email"
                    mainClass="flex flex-col items-center py-2 px-8"
                    iconContanerClass="text-2xl text-gray-800"
                    lableClass={{
                      root: "text-base tracking-tight text-gray-300",
                    }}
                    iconComponent={
                      <GoMail className="text-gray-810 text-5xl" />
                    }
                    tooltipProps={{ open: false }}
                  />
                ),
                textColor: "primary",
                component: (
                  <>
                    <Steppers
                      currentStep={0}
                      className="md:w-1/2 mx-auto"
                      options={["Ask", "Review", "Complete"]}
                      Icons={{
                        1: 1,
                        2: 2,
                        3: 3,
                      }}
                    />
                    <div className="bg-white rounded-lg shadow-md md:p-8 p-5 mx-auto lg:w-3/5 md:w-4/5">
                      <EmailCenter1 />
                      <EmailCenter2 />
                      <EmailCenter3 />
                      <EmailCenter4 />
                    </div>
                  </>
                ),
              },
              {
                name: (
                  <Icon_Label
                    labelValue="Chat"
                    mainClass="flex flex-col items-center py-2 px-8"
                    iconContanerClass="text-2xl text-gray-800"
                    lableClass={{
                      root: "text-base tracking-tight text-gray-300",
                    }}
                    iconComponent={
                      <IoChatbubbleEllipsesOutline className="text-gray-810 text-5xl" />
                    }
                    tooltipProps={{ open: false }}
                  />
                ),
              },
              {
                name: (
                  <Icon_Label
                    labelValue="Phone"
                    mainClass="flex flex-col items-center py-2 px-8"
                    iconContanerClass="text-2xl text-gray-800"
                    lableClass={{
                      root: "text-base tracking-tight text-gray-300",
                    }}
                    iconComponent={
                      <IoCallOutline className="text-gray-810 text-5xl" />
                    }
                    tooltipProps={{ open: false }}
                  />
                ),
                component: <Phone />,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
export default Support;
