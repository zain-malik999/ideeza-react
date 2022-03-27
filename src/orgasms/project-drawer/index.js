import React from "react";
import { Button, Label } from "atoms";
import { Working, Working_request, AvatarLabels } from "molecules";
import { animated, useSpring } from "react-spring";
export default function ProjectDrawer({ onClick, detail, toggle }) {
  const fadeStyles = useSpring({
    from: { opacity: 0, marginRight: -400 },
    to: {
      opacity: toggle ? 1 : 0,
      marginRight: toggle ? 0 : -400,
    },
  });
  return (
    <animated.div
      className="rounded-lg shadow-md bg-gray-100 ml-auto"
      style={{ maxWidth: "430px", ...fadeStyles, zIndex: "100 !important" }}
    >
      <div className="md:p-6 p-4 md:pr-3">
        <div className="flex justify-end ">
          <Button
            value="Add service +"
            className="bg-ideeza-100 text-white font-sans text-md transform-none px-4 py-2"
          />
        </div>
        <div className="flex items-start justify-between pt-2">
          <div className="">
            <Label
              value="Electronics"
              className="tracking-tight font-sans text-xl"
            />
            <Label className="mt-2 border-ideeza-100 w-18 border-solid border-b-4" />
          </div>
          <div className={` flex items-center`}>
            {/* <Icon classes={{ root: `rounded-sm py-1 px-0 outline-none`, }}>
              <FaChevronLeft color="white" fontSize="18" className="text-gray-450" />
            </Icon>
            <Icon classes={{ root: `rounded-sm py-1 px-0 outline-none`, }}>
              <FaChevronRight color="white" fontSize="18" className="text-gray-450" />
            </Icon> */}
          </div>
        </div>
        <div className="mt-2 bg-white shadow flex border border-current">
          <Label
            value="40%"
            className="bg-gradient-to-l from-white via-current bg-gradient-to-r to-current border-r border-current h-8 w-46 flex items-center justify-end tracking-tight text-md text-white pr-4"
          />
        </div>
        <div className="pt-8 pb-1">
          <Label
            value="Manufactures working on electronics:"
            className="font-semibold tracking-tight text-gray-300 font-sans md:text-xl text-lg"
          />
          <Label className="mt-2 border-ideeza-100 w-18 border-solid border-b-4" />
        </div>
        <div className="h-48 overflow-y-auto">
          {detail?.manufacturers?.map((v, k) => (
            <Working
              namevalue={v?.first_name + " " + v?.last_name}
              jobvalue={v?.work}
              comptitlevalue="Google"
              compvalue="Dealer"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-3 pr-6">
        <Label
          value="X"
          className="text-white bg-red-500 h-12 w-8 rounded-r-2xl flex items-center justify-center cursor-pointer"
          onClick={onClick}
        />
        <hr className="border w-full" />
      </div>
      <div className="md:p-6 p-4 md:pr-3">
        <div className="max-h-48 overflow-y-auto space-y-3 pr-3">
          {detail?.freelancers?.map((v, k) => (
            <Working_request
              mainClass="flex items-center flex-wrap md:flex-nowrap space-y-2"
              avatarClass="md:h-12 h-10 md:w-12 w-10"
              label1Class="md:text-lg text-base text-gray-300 font-sans tracking-tight"
              label2Class="md:text-base text-md text-current font-thin tracking-tight font-sans -mt-1"
              statusClass="text-current"
              btnClass="bg-white shadow-md text-gray-300 md:py-2 py-1 px-2 mr-1 transform-none md:text-md text-sm tracking-tight font-sans"
              namevalue={v?.first_name + " " + v?.last_name}
              Compvalue={v?.work}
              statusValue="Patent"
              btnvalue="Request Quote"
            />
          ))}

          {/*<Working_request
            mainClass="flex items-center flex-wrap md:flex-nowrap space-y-2"
            avatarClass="md:h-12 h-10 md:w-12 w-10"
            label1Class="md:text-lg text-base text-gray-300 font-sans tracking-tight"
            label2Class="md:text-base text-md text-current font-thin tracking-tight font-sans -mt-1"
            statusClass="text-current"
            btnClass="bg-green-100 text-white md:py-2 py-1 px-2 mr-1 transform-none md:text-md text-sm tracking-tight font-sans"
            namevalue="Natalia Roblox"
            Compvalue="Frizty Studio LTD"
            statusValue="Patent"
            btnvalue="Request Quote"
          />*/}
        </div>
        <div className="pt-8">
          <Label
            value="Notifications"
            className="font-semibold tracking-tight text-gray-300 font-sans md:text-xl text-lg"
          />
          <Label className="mt-2 border-ideeza-100 w-18 border-solid border-b-4 mb-2" />
          <div className="max-h-64 overflow-y-auto space-y-3">
            <AvatarLabels
              mainClasses="flex items-center bg-white shadow-md md:p-4 p-3 rounded-lg hover:bg-pink-100 transition-all duration-500 ease-in-out cursor-pointer"
              title="Piter Parker"
              subtitle="Hi Jonny , I need some additional papers could you help me here with some..."
              avaterClasses="h-12 w-12"
              titleClasses="text-black-100 tracking-tight font-sans text-md"
              subtitleClasses="font-sans tracking-tight text-md text-gray-810 md:pr-8"
            />
          </div>
        </div>
      </div>
    </animated.div>
  );
}
