import React from "react";
import { Label, Button, Input } from "atoms";
import { Header } from "orgasms";

function Landing() {
  return (
    <div className="font-popin">
      <div className="bg-landing xl:h-90vh md:h-50vh h-70vh">
        <Header />
        <div className="md:pl-16 py-16 lg:pb-0 md:pt-auto px-6 sm:w-2/3 md:text-left text-center lg:w-1/2 h-full flex flex-col align-self-center justify-center md:items-start items-center">
          <Label
            value={
              <>
                <span className="text-ideeza-100">You dream it.</span>
                <span className="text-secondary pl-1">IDEEZA designs it.</span>
              </>
            }
            className="md:text-3xl lg:text-4xl text-2xl font-semibold text-gray-700"
          />
          <Label
            value="Our Service providers executes it."
            className="md:text-3xl lg:text-4xl text-2xl font-semibold text-black-300"
          />
          <Label
            value="IDEEZA is an end-to-end hardware product development platform."
            className="text-gray-600 mt-5 text-sm md:text-md"
          />
          <Label
            value="Enables anyone to generate a new product from a simple description for free and within minutes by using automatic and AI processes."
            className="lg:text-md text-sm text-gray-300 mt-2 md:pr-2 leading-9"
          />
          <div className="xl:pr-48 lg:pr-32 md:pr-10 w-full">
            <div className="bg-white w-full mt-8 pr-2 py-1 flex rounded-md border-2 border-purple-560">
              <svg
                className="w-6 h-6 m-1 mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 31.651 26.018"
              >
                <g
                  id="Group_1662"
                  data-name="Group 1662"
                  transform="translate(-175.215 -645.508)"
                >
                  <path
                    id="Path_128"
                    data-name="Path 128"
                    d="M168.435,23.832c0-5.828-7.147-10.551-15.962-10.551-6.612,0-12,2.853-14.44,6.333A6.662,6.662,0,0,0,138.6,28c1.925,2.24,2.7,3.59,4.352,7.554,1.19,2.86,3.746,3.727,6.59,3.747,2.341.017,4.518-1.608,5.909-3.246a17.633,17.633,0,0,1,6.57-4.283c4.048-1.335,6.418-4.161,6.418-7.938"
                    transform="translate(38.43 632.227)"
                    fill="#561f80"
                  />
                  <path
                    id="Path_129"
                    data-name="Path 129"
                    d="M160.276,24.2c-.2-.209-2.052-1.277-2.707-1.746a30.7,30.7,0,0,0-4.411-2.363c-.429-.177-.812-.462-1.228-.673-.585-.3-1.177-.578-1.773-.851a.879.879,0,0,0-1.36.828c-.017.468.052,11.1.039,11.861a1.488,1.488,0,0,0,1.753,1.636,3.545,3.545,0,0,0,1.266-.536,19.22,19.22,0,0,0,2.16-1.343c1.043-.719,5.479-4.943,6.136-5.4a.886.886,0,0,0,.125-1.418"
                    transform="translate(36.902 631.571)"
                    fill="#fff"
                  />
                </g>
              </svg>

              <Input
                type="text"
                placeholder="Start now – type your idea here..."
                className={{
                  root: `text-gray-600 px-3 w-full border-l border-solid border-gray-900 outline-none text-xs md:text-sm placeholder-gray-600 rounded-none`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:my-16 my-24 w-full text-center">
        <Label
          value="AI Maker for"
          className="text-purple-560 md:text-xl text-lg font-semibold text-center"
        />
        <Label
          value="Connected Devices"
          className="md:text-3xl text-gray-300 text-2xl font-semibold text-center"
        />
        <Label
          value="Building IoT prototypes used to need months, engineers, hair-ripping
                    budgets and dev tools creep. Good times."
          className="text-center text-gray-600 md:w-1/3 mx-auto text-sm pt-2 mb-12 md:px-0 m-auto px-4"
        />
        <div className="connect-dev">
          <div className="p-0 m-auto video-screen"></div>
        </div>
      </div>
      <div className="flex items-center flex-wrap lg:flex-row flex-col-reverse md:my-32 mt-20">
        <div className="w-full text-center md:text-left lg:w-1/2 py-8 md:py-16 lg:py-0 lg:pt-0 px-4 md:px-16 xl:pl-40">
          <div className="flex flex-col items-start xl:pr-8">
            <Label
              value="Empower your ideas"
              className="text-purple-560 text-2xl font-semibold"
            />
            <Label
              value="BY YOURSELF!"
              className="text-gray-300 text-3xl md:text-4xl font-semibold"
            />
            <Label
              value="IDEEZA enables anyone, even without technology knowledge to take
                            full ownership on their products development process, by using its
                            powerful AI engine and an automated process to fulfill any dream!"
              className="text-gray-600 md:text-md text-sm pt-2 mb-8"
            />
            <Button
              value="Try Free"
              className="text-white rounded-full bg-ideeza-100 uppercase font-medium px-14 py-2 hover:shadow-lg outline-none border-0"
            />
          </div>
        </div>
        <div className="max-height lg:w-1/2 lg:pl-24 w-full">
          <img src="/assets/landing/ref_img_1242.png" />
        </div>
      </div>
      <div className="flex items-center flex-wrap lg:flex-row md:my-32 mt-20">
        <div className="max-height lg:w-1/2 lg:pr-24 w-full">
          <img src="/assets/landing/ref_img_1243.png" />
        </div>
        <div className="w-full text-center px-4 md:text-left lg:w-1/2 py-8 md:py-16 lg:py-0 lg:pt-0 md:pr-24">
          <div className="flex flex-col items-start xl:pr-20 lg:pl-24 md:pl-16 xl:pl-0">
            <Label
              value="Creating better technology,"
              className="text-purple-560 text-2xl font-semibold"
            />
            <Label
              value="TOGETHER!"
              className="text-gray-300 text-3xl md:text-4xl font-semibold"
            />
            <Label
              value="We believe in collaboration and together with the power of
                            Artificial Intelligence it leads to amazing results, empowering the
                            full potential of the world! For the first time, you can use,
                            contribute, and empower the community knowledge - by a click,
                            thousands of brains will come together to provide the unique
                            solution for your idea!"
              className="text-gray-600 text-md pt-2 mb-8"
            />
            <Button
              value="Read More"
              className="text-white rounded-full bg-ideeza-100 uppercase font-medium px-14 py-2 hover:shadow-lg outline-none border-0"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap lg:flex-row flex-col-reverse mt-20">
        <div className="w-full text-center md:text-left lg:w-1/2 py-8 md:py-16 lg:py-0 lg:pt-0 px-4 md:px-16 lg:px-24 xl:pl-40">
          <div className="flex flex-col items-start xl:pr-8">
            <Label
              value="Work your way,"
              className="text-purple-560 text-2xl font-semibold"
            />
            <Label
              value="TODAY!"
              className="text-gray-300 text-3xl md:text-4xl font-semibold"
            />
            <Label
              value="You bring the skill. We'll make earning easy."
              className="text-gray-600 md:text-md text-sm pt-2"
            />
            <Label
              value=" With IDEEZA you have the freedom to work on any project that suits
                            your exact ability, whether you are an open source engineer,
                            designer, manufacturer, patent attorney or any other supplier."
              className="text-gray-600 md:text-md text-sm"
            />
            <Label
              value="From our many and diverse projects you can easily find your way to
                            success and rapid growth."
              className="text-gray-600 md:text-md text-sm mb-8"
            />
            <Button
              value="Connect Us"
              className="text-white rounded-full bg-ideeza-100 uppercase font-medium px-14 py-2 hover:shadow-lg outline-none border-0"
            />
          </div>
        </div>
        <div className="max-height lg:w-1/2 lg:pl-24 w-full">
          <img src="/assets/landing/ref_img_1244.png" />
        </div>
      </div>
      <div className="my-20 idea-sec-bg-img bg-cover">
        <div className="clip py-26 lg:py-48 text-center">
          <Label
            value="Create something amazing"
            className="text-white text-2xl pt-16 lg:pt-10 md:text-4xl text-center font-semibold"
          />
          <Label
            value="Join free, launch project and start building your smart prototype."
            className="text-white mt-2 mb-4 text-sm text-center"
          />
          <Button
            value="Launch your Ideeza"
            className="text-white rounded-full mb-10 lg:mb-0 font-semibold bg-ideeza-100 uppercase px-20 py-4 shadow-xl outline-none border-0"
          />
        </div>
      </div>
      <div className="pb-8 md:px-16 lg:px-24 w-full text-left px-6">
        <Label
          value="Top notch public projects"
          className="text-purple-560 text-2xl font-semibold"
        />
        <Label
          value="made with IDEEZA"
          className="text-gray-300 tracking-wide text-3xl md:text-4xl font-semibold"
        />
        <Label
          value="Success Stories from Ideeza's growing community"
          className="text-gray-900 md:text-sm text-xs font-light tracking-tight"
        />
      </div>
      <div className="flex w-full flex-wrap items-start">
        {/* <Carousal :carousalData="carouselData" className="w-full md:w-1/2" /> */}
        <div className="w-full md:w-1/2"></div>

        <div className="w-full md:w-1/2 text-left lg:px-24 md:px-12 px-6 lg:pt-14 pt-8">
          <Label
            value="John Does Dreams"
            className="text-gray-300 pb-3 text-2xl md:text-3xl font-semibold"
          />
          <Label
            value="If yor are on the fence on whether you need a big company behinf you
                        to succeed, these individuals prove hat having vission and the drive
                        is more than enough"
            className="text-gray-600 md:text-md text-sm mb-4 lineHeight-none"
          />
          <Button
            value="View Story"
            className="text-white rounded-full mb-10 font-weight-hairline lg:mb-0 bg-ideeza-100 uppercase px-12 py-2 hover:shadow-xl outline-none border-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
