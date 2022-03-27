import React from "react";
import { Label, Button } from "atoms";
import { Header } from "orgasms";
import { BiCaretDown } from "react-icons/bi";
function Invester() {
  const data = [
    {
      year: "November 2020",
    },
    {
      year: "October 2020",
    },
    {
      year: "January 2020",
    },
    {
      year: "August 2021",
    },
    {
      year: "November 2020",
    },
    {
      year: "October 2020",
    },
    {
      year: "January 2020",
    },
    {
      year: "August 2021",
    },
  ];
  return (
    <div>
      <div className="bg-header">
        <Header />
      </div>
      <div className="md:pt-14 investor">
        <div className="flex flex-col-reverse md:flex-row xl:h-screen">
          <div className="md:w-2/6 px-6 md:pl-16 md:py-16 py-8 flex items-center z-50">
            <div className="py-8 shadow-full p-8 md:p-12 lg:-mr-36 md:-mr-64 bg-white min-w-75">
              <Label
                value="We make it easy for everyone to invest in Ideeza"
                className="text-2xl text-black-100 leading-11 md:text-4xl mb-3 font-meri"
              />
              <Label
                value="With Ideeza we go together to invest in everything. You receive a
              huge amount of profit by investing in us by giving people the
              ability to make the things happen."
                className="text-black-100 text-md md:pr-4 mb-8 font-sans"
              />
            </div>
          </div>
          <div className="md:w-5/6 xl:h-screen">
            <img
              src="/assets/landing/success_story_bg.png"
              className="h-full w-full"
              alt=""
            />
          </div>
        </div>
        <div className="w-full mt-8">
          <div className="w-full mt-8 p-6">
            <Label
              value="Our achievments"
              className="text-center text-black-100 font-semibold text-3xl md:text-4xl mb-2 font-meri"
            />
            <div className="bg-ideeza-100 w-8 h-1 mb-8 mx-auto"></div>
            <Label
              value="With Ideeza we go together to invest in everything. You receive a huge amount of profit by investing in us by giving people the ability to make the things happen."
              className="text-black-100 text-center leading-8 md:px-8 lg:px-12 lg:w-2/6 md:w-2/4 w-full mx-auto md:text-md text-auto mb-8 font-sans"
            />
          </div>
          <div className="w-full md:flex md:w-11/12 mx-auto font-muli flex justify-between overflow-x-auto">
            {data?.map((v, k) => {
              return (
                <Label
                  value={v.year}
                  className="text-black-300 border-b-4 whitespace-nowrap border-transparent hover:border-current focus:border-current transition-all cursor-pointer text-sm menu pb-2 px-4"
                />
              );
            })}
          </div>
          <div className="flex flex-wrap items-start py-16">
            <div className="md:w-2/5 w-full pb-10 md:pb-0">
              <div className="text-center">
                <Label
                  value="Marketing"
                  className="text-black-100 text-center font-bold text-lg font-muli -mb-1"
                />
                <BiCaretDown className="text-current mx-auto text-2xl" />
              </div>
              <div className="text-center pt-6">
                <img
                  className="w-8/12 mx-auto"
                  src="/assets/landing/markering-icon.png"
                />
                {/* <!--<div className="absolute top-tip">
              <div className="p-5 text-left rounded-lg shadow-full">
                <div className="">
                  <h2 className="font-bold font-muli">Marketing</h2>
                  <div className="border border-ideeza mb-4 w-10"></div>
                  <p className="text-black-100 font-sans text-xs leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis quis magna sagittis, consectetur est id, ultricies
                    dolor. Mauris aliquam egestas aliquet. Pellentesque non
                    turpis mollis, consectetur tellus at, facilisis lorem. Nulla
                    ullamcorper mollis tincidunt. Vivamus nec mi non lorem
                    tincidunt rutrum. Pellentesque congue lacus ut quam
                    condimentum tincidunt. Phasellus vitae nunc dapibus,
                    vehicula sem et, placerat purus. Morbi auctor lectus et
                    augue posuere, a ultrices mauris sagittis. Praesent lobortis
                    pharetra elit eu malesuada. Nullam vitae pellentesque est.
                    Aenean efficitur dolor id nibh luctus scelerisque. Proin
                    ultricies consequat massa consequat efficitur. Pellentesque
                    interdum venenatis lectus. Cras sed magna convallis, tempor
                    odio eu, aliquet lectus.
                  </p>
                  <div className="pt-5">
                    <img
                      src="/assets/landing/invest-pop-banner.png"
                      className="inline-block"
                    />
                  </div>
                </div>
              </div>
              <img
                src="/assets/landing/tip-bg.png"
                className="absolute bottom-tip"
              />
            </div>--> */}
              </div>
            </div>
            <div className="md:w-3/5 w-full p-4 pt-0 pb-8 flex overflow-x-auto">
              {data?.map((v, k) => {
                return (
                  <div className="mr-8 md:-ml-2 rounded overflow-hidden bg-white hover:shadow-full invester-card">
                    <img
                      className="rounded"
                      src="/assets/landing/christiann.png"
                      style={{ height: "220px" }}
                      alt=""
                    />
                    <div className="p-3">
                      <Label
                        value="Ideeza patent for USA"
                        className="font-semibold mb-2 text-gray-300 font-meri"
                      />
                      <Label
                        value="Marketing is the crucial part of the Ideeza. We aim for
                        making the marketplace even better than it is now for
                        the whole world, so keep your eyes close."
                        className="text-black-100 font-sans text-xs leading-7"
                      />
                      <div className="flex items-center justify-between pt-4">
                        <Label
                          value="21 October, 2019"
                          className="text-gray-900 text-xs"
                        />
                        <Button
                          value="See on blog"
                          className="text-white bg-ideeza-100 px-5 transform-none font-sans tracking-tight rounded hover:shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full mt-8 p-6">
          <Label
            value="User traction"
            className="text-center text-black-100 font-semibold text-3xl md:text-4xl mb-2 font-meri"
          />
          <div className="bg-ideeza-100 w-8 h-1 mb-8 mx-auto"></div>
          <Label
            value="With Ideeza we go together to invest in everything. You receive a huge amount of profit"
            className="text-black-100 text-center leading-8 md:px-8 lg:px-12 lg:w-2/6 md:w-2/4 w-full mx-auto md:text-md text-auto mb-8 font-sans"
          />
        </div>
        <div className="flex md:px-20 px-4 md:py-16 w-full flex-wrap">
          <div className="md:w-1/4 md:my-0 my-6 w-full shadow-full md:p-5 p-4 md:px-8">
            <Label
              value="Avg. session duration"
              className="text-gray-600 text-xl"
            />
            <Label value="03:02:01" className="text-ideeza-100 text-3xl" />
            {/* <canvas
            ref="time"
            width="100%"
            className="self-end"
            height="80px"
          ></canvas> */}
          </div>
          <div className="md:w-3/4 md:my-0 my-6 md:pl-5 w-full">
            <div className="shadow-full flex flex-wrap md:p-5 p-4 md:px-8">
              <Label
                value={
                  <>
                    Growth Chart{" "}
                    <span className="ml-2 text-md text-blue-100">
                      This Month
                    </span>
                  </>
                }
                className="text-gray-600 text-xl"
              />
              {/* <canvas
              ref="time"
              width="100%"
              className="self-end"
              height="80px"
            ></canvas> */}
            </div>
          </div>
        </div>
        <div className="flex items-start flex-col md:flex-row mt-28">
          <div className="md:w-4/6 w-full pb-10 md:pb-0">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/wbnaHgSttVo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="md:w-2/6 px-6 md:pr-20 md:-mt-14 md:pb-16 flex items-center z-50">
            <div className="py-8 shadow-full p-8 md:p-12 lg:-ml-26 md:-ml-64 bg-white">
              <Label
                value="Know more about us"
                className="text-black-100 text-2xl md:pr-20 md:text-4xl mb-3 font-meri leading-11"
              />
              <Label
                value="With Ideeza we go together to invest in everything.
              You receive a huge amount of profit by investing in us by giving
              people the ability to make the things happen."
                className="text-black-100 md:text-md mb-3 font-sans leading-8 md:pr-3"
              />
              <div className="grid grid-cols-2 gap-x-4 text-center">
                <div className="text-center">
                  <img
                    src="assets/landing/download.png"
                    className="mx-auto"
                    width="60%"
                  />
                  <p
                    to
                    className="pt-2 text-black-100 font-sans md:text-md text-sm"
                  >
                    Download the pitchdeck
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="assets/landing/download.png"
                    className="mx-auto"
                    width="60%"
                  />
                  <p
                    to
                    className="pt-2 text-black-100 font-sans md:text-md text-sm"
                  >
                    Download Executive summary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-8 p-6 py-10 md:pt-20 md:pb-16">
          <Label
            value="Want to work with us?"
            className="text-center font-semibold text-black-100 text-3xl md:text-4xl mb-12 font-meri"
          />
          <Button
            value="Yes, Continue"
            className="text-white btn-gradient rounded capitalize text-sm px-14 py-5 pt-6 hover:shadow-lg outline-none border-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Invester;
