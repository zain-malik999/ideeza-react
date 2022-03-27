import React from "react";
import { Label } from "atoms";
import { Icon_Label } from "molecules";
import { BsInfoCircleFill } from "react-icons/bs";
import { Header } from "orgasms";
function Collaboration() {
  const points = [
    {
      title: "Novice",
      points: "0 - 50",
      img: "/assets/landing/robot-1.png",
    },
    {
      title: "Rookie",
      points: "50 - 100",
      img: "/assets/landing/robot-2.png",
    },
    {
      title: "Talented",
      points: "100 - 500",
      img: "/assets/landing/robot-3.png",
    },
    {
      title: "Senior",
      points: "500 - 1000",
      img: "/assets/landing/robot-4.png",
    },
    {
      title: "Master",
      points: "1000+",
      img: "/assets/landing/robot-5.png",
    },
  ];
  const tableDate = [
    {
      contribution: "Review",
      points: "10 points per review",
    },
    {
      contribution: "Photo",
      points: "5 points per photo",
    },
    {
      contribution: "Video",
      points: "30 points per Video",
    },
    {
      contribution: "Forum Post",
      points: "5 points per Post",
    },
    {
      contribution: "Ratting",
      points: "20 points per Rating",
    },
    {
      contribution: "Ideeza Article Creation",
      points: "10 points per article",
    },
    {
      contribution: "Ideeza Article Edits",
      points: "2 points per Edits",
    },
    {
      contribution: "Helpful Vote",
      points: "1 points per Vote",
    },
    {
      contribution: "Answer",
      points: "1 points per Answer",
    },
    {
      contribution: "Respont to Q&As",
      points: "10 points per responce",
    },
    {
      contribution: "Product Added",
      points: "50 points per responce",
    },
  ];
  return (
    <div className="font-popin">
      <div className="bg-collaboration xl:h-screen md:h-50vh h-60vh">
        <Header />
        <div className="md:pl-16 md:px-6 px-4 pt-16 md:pb-0 sm:w-2/3 text-left lg:w-1/2 h-full font-pop flex flex-col align-self-center justify-center md:items-start items-center">
          <Label
            value={
              <>
                <span className="text-ideeza-100">Points</span>
                <span className="text-black-300 px-1">& </span>
                <span className="text-secondary">Levels</span>
              </>
            }
            className="md:text-3xl lg:text-4xl text-2xl font-semibold text-gray-700 w-full"
          />
          <Label
            value="Our point coming from: creating new project, creating new article,
            comments on public projects, adding parts or components, editing
            public projects, sharing projects on social media, etc."
            className="text-gray-600 mt-5 md:text-md text-sm md:pr-4 leading-wide"
          />
          <Label
            value="The levels are according to the score counting from their contribute
            in IDEEZA platform according to points earning and Level steps in
            the website."
            className="text-gray-600 md:text-md text-sm pt-5 md:pr-4 leading-wide"
          />
        </div>
      </div>
      <div className="w-full bg-gray-150 font-pop">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-7/12 mx-auto md:px-16 md:px-6 px-4 mt-20 mb-6 lg:-mt-20">
            {points?.map((v, k) => {
              return (
                <>
                  <div className="flex items-center bg-white shadow-full max-h-64 md:p-10 px-8 py-5 md:mb-8 mb-5 lg:mx-10">
                    <div className="w-8/12 flex flex-col items-start">
                      <Label
                        value={<>Level {k + 1} </>}
                        className="text-secondary mb-2 lg:text-xl xl:text-2xl text-lg font-semibold"
                      />
                      <Label
                        value={v.title}
                        className="text-light-black lg:text-4xl w-full text-left pb-2 text-2xl border-b font-semibold border-gray-275"
                      />
                      <Label
                        value={v.points}
                        className="text-ideeza-100 md:text-xl text-xl font-semibold pt-3"
                      />
                    </div>
                    <div className="w-4/12 text-center justify-center items-center flex md:p-10 p-5">
                      <img src={v.img} className="inline-block max-h-46 " />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div
            id="pointsTable"
            className="w-full xl:w-5/12 px-4 pb-10 xl:pr-28 md:p-16 lg:px-24 xl:pl-10 xl:pt-16 mx-auto"
          >
            <div className="text-left">
              <h2 className="md:text-xl md:my-5 font-semibold text-black-300">
                <span className="text-purple-560">IDEEZA</span>
                <span className="text-ideeza-100"> Collective</span> Program
              </h2>
              <Label
                value="Every time you contribute to IDEEZA, you receive IDEEZA
                Collective points. Here's a list of what you can contribute, and
                how much it's worth."
                className="text-gray-600 md:text-md text-sm"
              />
            </div>
            <div className="w-100 mt-8 shadow-full bg-white">
              <div className="grid grid-cols-2 text-left">
                <Label
                  value="IDEEZA contribution"
                  className="border-b p-2 md:px-4 pt-3 text-sm font-semibold text-gray-300"
                />
                <Label
                  value="Points earned"
                  className="border-b border-l p-2 md:px-4 pt-3 text-sm font-semibold text-gray-300"
                />
              </div>
              {tableDate?.map((v, k) => {
                return (
                  <>
                    <div className="grid grid-cols-2 text-left">
                      <Label
                        value={v.contribution}
                        className="border-b p-2 md:px-4 md:text-sm text-xs text-gray-300"
                      />
                      <Icon_Label
                        mainClass="flex flex-row-reverse justify-between items-center w-full border-b border-l p-2 md:pl-4"
                        tooltipProps={{ open: false }}
                        labelValue={v.points}
                        iconContanerClass=""
                        lableClass={{
                          root: `md:text-sm text-xs tracking-tight text-gray-300`,
                        }}
                        iconComponent={
                          <BsInfoCircleFill className="text-gray-900 md:text-md text-sm" />
                        }
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-gray-150 md:-mb-40 -mb-48 py-20"></div>
      </div>
    </div>
  );
}

export default Collaboration;
