import React from "react";
import { Label, Button } from "atoms";
import { Header } from "orgasms";
function Freelancer() {
  return (
    <div className="freelancer">
      <div className="bg-freelancer">
        <Header />
        <div className="md:pl-16 pb-16 md:pb-0 px-6 font-pop sm:w-2/3 text-left lg:w-1/2 h-full flex flex-col align-self-center justify-end md:justify-center md:items-start items-center">
          <p className="text-secondary pt-6 pb-2 text-sm md:text-md">
            Together we grow the community knowledge to a new level.
          </p>
          <h2 className="text-black-300 font-semibold md:text-3xl lg:text-4xl text-2xl w-full">
            It's more then technology, it's your home!
          </h2>
          <Button
            value="JOIN NOW"
            className="text-white bg-ideeza-100 rounded-full uppercase font-semibold mt-4 px-16 py-2 hover:shadow-lg outline-none border-0"
          />
        </div>
      </div>
      <div className="bg-ideeza-light-grey shadow-full pt-6">
        <div className="flex items-center flex-wrap font-pop lg:flex-row py-20">
          <div className="max-height lg:w-1/2 lg:pr-24 w-full">
            <img src="/assets/landing/ref_img_1248.png" />
          </div>
          <div className="w-full px-6 md:text-left lg:w-1/2 py-8 md:py-16 lg:py-0 lg:pt-0 md:pr-24">
            <div className="xl:px-16 md:px-16 lg:px-0">
              <div className="flex items-center">
                <img src="/assets/landing/ref_img_1253.png" width="60px" />
                <div className="pl-4">
                  <Label
                    value="The power of"
                    className="text-purple-560 -mb-1 text-2xl font-semibold"
                  />
                  <Label
                    value="OPEN SOURCE"
                    className="text-gray-300 text-3xl md:text-4xl font-semibold"
                  />
                </div>
              </div>
              <Label
                value="The power of collaboration leads to amazing results, empowering
                the full potential of the world! It happens everywhere!
                especially in the knowledge field, where this movement created
                the 'Open Source Code' revolution to disrupt the traditional
                Code industry. Now we can give and receive from the community
                for the benefit of all of us"
                className="text-gray-600 leading-6 text-sm pt-3 mb-8"
              />
              <Label
                value="Still if your goal is a physical product it might require more
                knowledge that you don't always have."
                className="text-gray-600 leading-6 font-semibold text-sm pt-2"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap font-pop lg:flex-row flex-col-reverse py-14">
          <div className="w-full md:text-left lg:w-1/2 px-6 py-8 md:py-16 lg:py-0 lg:pt-0 xl:pl-24">
            <div className="flex flex-col xl:px-16 md:px-16">
              <div className="flex items-center">
                <img src="/assets/landing/ref_img_1254.png" width="60px" />
                <div className="pl-4">
                  <Label
                    value="Open source"
                    className="text-purple-560 -mb-1 text-2xl font-semibold"
                  />
                  <Label
                    value="PRODUCT"
                    className="text-gray-300 text-3xl md:text-4xl font-semibold"
                  />
                </div>
              </div>
              <Label
                value="This is how the Open Source Product industry was created, where
                the collaboration enhanced to a higher level, so whether you are
                a Do It Yourself maker, a hobbyist or an engineer you will feel
                at home in the multi-disciplinary collaborations."
                className="text-gray-600 leading-6 text-sm pt-3 pb-5"
              />
              <Label
                value="But what if you want to realize a unique idea?"
                className="text-secondary font-semibold text-sm pt-2"
              />
              <Label
                value="And it's not exactly the same. What if you want to produce it?"
                className="text-ideeza-100 font-semibold text-sm"
              />
            </div>
          </div>
          <div className="max-height lg:w-1/2 lg:pl-24 w-full">
            <img src="/assets/landing/ref_img_1249.png" />
          </div>
        </div>
        <div className="flex items-center flex-wrap font-pop lg:flex-row py-20">
          <div className="max-height lg:w-1/2 lg:pr-24 w-full">
            <img src="/assets/landing/laptop.png" />
          </div>
          <div className="w-full px-4 md:text-left lg:w-1/2 py-8 md:py-16 lg:py-0 lg:pt-0 md:pr-24">
            <div className="xl:px-16 md:px-16 lg:px-0 px-6">
              <div className="flex items-center">
                <img src="/assets/landing/ref_img_1255.png" width="60px" />
                <div className="pl-4">
                  <Label
                    value="Open source"
                    className="text-purple-560 -mb-1 text-2xl font-semibold"
                  />
                  <Label
                    value="KNOWLEDGE"
                    className="text-gray-300 text-3xl md:text-4xl font-semibold"
                  />
                </div>
              </div>
              <Label
                value="Welcome to the future!"
                className="text-gray-600 leading-6 font-semibold text-lg pt-5"
              />
              <Label
                value="IDEEZA develops the new age of open source collaboration! We
                packed the crowd knowledge in small packages, and by using our
                Artificial Intelligence engines you will get the most precise
                hardware, code and coverage components for developing your idea
                by yourself!"
                className="text-gray-600 leading-6 text-sm pb-5"
              />
              <Label
                value="No more imitation of what is already done!"
                className="text-secondary font-semibold text-sm pt-2"
              />
              <Label
                value="No more limitation!"
                className="text-ideeza-100 font-semibold text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-8 pt-20 md:px-16 lg:px-32 w-full text-left px-6">
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
      <div className="flex w-full flex-wrap items-start pb-26">
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
      <div className="bg-ideeza-light-grey shadow-full">
        <div className="flex items-center flex-wrap font-pop">
          <div className="w-full md:text-left lg:w-2/5 md:w-1/2 py-8 px-6 lg:pl-24 md:pl-16">
            <div className="xl:pl-16 py-20 xl:py-0">
              <h3 className="text-purple-560 -mb-1 text-2xl font-semibold">
                Make your
              </h3>
              <h2 className="text-black-300 text-3xl md:text-4xl font-semibold">
                DREAMS COME TRUE
              </h2>
              <p className="text-gray-600 text-sm pt-3 pb-5 leading-relaxed">
                On top of this amazing capability, IDEEZAs platform uses an
                automated processes for PCB and 3D design, production
                optimization and a marketplace with the top notch service
                providers for production and more. For the first time, by one
                click, thousands of brains will come together to help you and
                provide your unique solution.
              </p>
              <p className="text-secondary font-medium text-sm pt-2">
                Thats all?
              </p>
              <Button
                value="Launch your Ideeza"
                className="text-white bg-ideeza-100 rounded-full uppercase font-semibold mt-8 px-12 py-3 shadow-full"
              />
            </div>
          </div>
          <div className="lg:w-3/5 md:w-1/2 w-full items-center justify-end hidden md:flex md:mt-0 lg:-my-10 lg:-mt-20">
            <img
              src="/assets/landing/ref_img_1252.png"
              className="h-full"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap font-pop py-16">
        <div className="xl:w-3/5 md:w-1/2 w-full items-center justify-end hidden md:flex">
          <img
            src="/assets/landing/ref_img_1251.png"
            className="h-full"
            width="100%"
          />
        </div>
        <div className="w-full md:text-left xl:w-2/5 md:w-1/2 py-8 px-6 md:pr-16 md:pl-6 md:py-16 lg:py-0 lg:pt-0">
          <div className="">
            <h3 className="text-purple-560 -mb-1 text-2xl font-semibold">
              IDEEZAS
            </h3>
            <h2 className="text-black-300 text-2xl md:text-4xl font-semibold">
              Assessment Certificate
            </h2>
            <p className="text-gray-600 font-semibold text-sm">
              There is more!
            </p>

            <p className="text-gray-600 text-sm">
              With us you are not transparent!
            </p>
            <p className="text-gray-600 text-sm">
              Your contribution to the community is not getting lost in crowd!
            </p>
            <p className="text-gray-600 text-sm">
              To give you the full reward for contributing to the community, you
              will get points according to your activities. That way you can
              stand out in our service providers list, so clients can find you
              easily in our marketplace for private jobs.
            </p>
            <p className="text-gray-600 text-sm pt-4">
              In this way, we believe that we can thank you on behalf of the
              global open knowledge community.
            </p>
            <Button
              value="LEARN MORE"
              className="text-white bg-ideeza-100 rounded-full uppercase font-semibold mt-8 px-20 py-3 shadow-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Freelancer;
