import React, { useState } from "react";
import { Input } from "atoms";
import { TabsMolecule } from "molecules";
import { Header, OpenedPosition } from "orgasms";
import { BsSearch } from "react-icons/bs";
function About() {
  const [show, setShow] = useState(false);
  const feqShow = () => {
    setShow(!show);
  };
  const [position, setPosition] = useState(false);
  const showPosition = () => {
    setPosition(!position);
  };
  const [index, setIndex] = useState(0);
  const [team, setTeam] = useState(0);
  const [career, setCareer] = useState(0);
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };
  const handleChangeTeam = (event, newValue) => {
    setTeam(newValue);
  };
  const handleChangeCareer = (event, newValue) => {
    setCareer(newValue);
  };
  const requir = [
    {
      text: "2+ years industry experience",
    },
    {
      text:
        "Bachelor’s and/or Master’s degree, preferably in CS, or equivalent experience",
    },
    {
      text:
        "Experience shipping one or more Android apps, ideally currently available in the Google Play Store",
    },
    {
      text:
        "Proficiency in Java or Kotlin and knowledge of the Android SDK and open-source Android    ",
    },
    {
      text:
        "Personal projects that show an aptitude for technical excellence or product sense",
    },
    {
      text:
        "Advanced analytical thinking; experienced with making product decisions based on data and A/B",
    },
    {
      text: "Interest in innovations within the mobile industry",
    },
  ];
  const requir2 = [
    {
      text: "Stock",
    },
    {
      text: "Competitive salaries",
    },
    {
      text: "Quarterly employee travel coupon",
    },
    {
      text: "Paid time off",
    },
  ];
  return (
    <div id="about" className="bg-gray-100 -mb-40">
      <div className="bg-about xl:h-90vh md:h-50vh h-50vh">
        <Header />
        <div className="md:pl-16 px-6 pb-16 md:pb-6 lg:pb-0 sm:w-2/3 text-left lg:w-1/2 h-full flex flex-col justify-end md:justify-center md:items-start">
          <h2 className="text-black-300 md:text-3xl lg:text-5xl text-2xl w-full">
            IoT for EVERYONE
          </h2>
          <p className="text-black mt-2 md:text-lg text-sm xl:pr-20">
            Our vision is to empower everyone to create their own IoT Connected
            products without needing to have the related engineering knowledge.
            We store thousands of existing possible puzzle pieces. Let us help
            you create beautiful combinations.
          </p>
          <p className="text-ideeza-100 pt-6 text-sm md:text-base tracking-tight">
            What will you make?
          </p>
          <div
            id="about_input"
            className="pt-1 pb-10 xl:w-6/12 w-full md:w-2/3 rounded flex"
          >
            <div className="bg-gradient text-white rounded-l flex items-center justify-center w-14 cursor-pointer">
              <BsSearch className={``} />
            </div>
            <Input
              placeholder="Search ideas, products, makers"
              inputProps="text-xs py-3"
              className={{
                root: `bg-gray-425 shadow-full w-full rounded-r text-xs p-1`,
              }}
              containerClassName="rounded-r text-xs"
            />
          </div>
        </div>
      </div>
      <div className="pb-32">
        <TabsMolecule
          tabsClasses="xl:w-1/5 lg:w-2/6 md:w-1/2 mx-auto px-10 md:px-0 pb-3"
          tabClasses="text-base tracking-tight transform-none text-gray-600 focus:text-current"
          indicatorColor="white"
          handleChange={handleChange}
          index={index}
          tabsData={[
            {
              name: "Company",
              textColor: "primary",
              component: (
                <>
                  <div className="bg-white py-10 px-6 text-center">
                    <h3 className="text-gray-600 font-sans text-lg font-medium uppercase">
                      Our mission:
                    </h3>
                    <h2 className="text-2xl -mt-1 text-black font-medium">
                      Making it together
                    </h2>
                    <hr className="bg-gray-670 my-2 w-8/12 lg:w-4/12 m-auto" />
                    <p className="text-gray-670 mt-5 font-sans text-sm md:text-md">
                      We belive in a world were technology is at the service of
                      people, not the other way around.
                    </p>
                    <p className="mt-8 text-gray-670 text-sm lg:w-8/12 mx-auto">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna Lorem ipsum dagna voluptua. At vero eos et accusam
                      et justo duo dolores et ea
                    </p>
                    <div className="flex mt-10 md:mt-16 pb-4 lg:px-12">
                      <div className="flex-1 md:px-2 px-1">
                        <img src="assets/landing/about-2.png" />
                      </div>
                      <div className="flex-1 md:px-2 px-1 md:mx-5">
                        <img src="assets/landing/about-3.png" />
                      </div>
                      <div className="flex-1 md:px-2 px-1">
                        <img src="assets/landing/about-1.png" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-company text-center">
                    <div className="text-center md:text-left md:p-16 p-6 md:w-10/12 w-full mx-auto">
                      <h2 className="text-xl text-black-100 py-4">
                        Made by Makers for Makers.
                      </h2>
                      <p className="text-gray-670 text-sm md:text-md leading-6">
                        Product design used to be the affair of product
                        development teams, engineers in R&D, those building
                        prototypes, CAD designs, issuing blueprints, Mechanical
                        design. Working with a factory who might in turn dictate
                        its own changes and then after thousands of dollars in
                        expenses and hundreds of people involved you would
                        finally get into a production ready sample. Whether you
                        are one of those guys/girls or just a maker in a garage
                        this service is for you.
                      </p>
                    </div>
                    <div className="md:text-2xl text-lg px-6 pb-6">
                      <h2 className="text-ideeza-100 text-lg pb-2 md:pb-0">
                        Welcome to the 4TH INDUSTRIAL REVOLUTION.
                      </h2>
                      <h2 className="text-purple-500 text-lg">
                        Were technology re-invents and re-defines simplicity.
                      </h2>
                    </div>
                  </div>
                </>
              ),
            },
            {
              name: "Team",
              textColor: "primary",
              component: (
                <>
                  <div className="bg-white py-10 px-6 text-center">
                    <h2 className="text-3xl text-black-100">Our Team</h2>
                    <hr className="bg-gray-670 my-2 mt-4 w-8/12 lg:w-4/12 m-auto" />
                    <p className="mt-5 text-black-100 md:px-4 text-sm md:text-md lg:w-8/12 mx-auto leading-7">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. A et justo duo
                      dolores et ea rebum. Stet clita kasd gubergren, no sea
                      takimata sanctus est
                    </p>
                    <p className="text-black-100 text-sm md:text-md lg:w-8/12 mx-auto">
                      Lorem ipsum dagna voluptua. At vero eos et accusam et
                      justo duo dolores et ea
                    </p>
                  </div>
                  <div id="team" className="bg-team">
                    <div className="text-center md:p-16 p-6 w-full">
                      <TabsMolecule
                        tabsClasses="border rounded-full lg:w-1/3 md:w-1/2 mx-auto"
                        tabClasses="bg-white hover:bg-current rounded-full w-full focus:bg-current focus:text-white text-xs tracking-tight text-gray-300 font-sans transform-none"
                        handleChange={handleChangeTeam}
                        index={team}
                        tabsData={[
                          {
                            name: "Executives",
                            textColor: "primary",
                            component: (
                              <>
                                <div className="mx-auto lg:w-9/12 w-full">
                                  <div className="flex md:flex-row flex-col justify-between md:-mx-6 pt-4">
                                    <div className="bg-white md:w-1/2 w-full lg:p-10 px-4 py-10 md:mx-6 mb-3 text-center hover:shadow-full rounded-t-3xl">
                                      <div className="w-24 rounded-full m-auto">
                                        <img src="assets/landing/avatar.png" />
                                      </div>
                                      <h3 className="text-lg text-black-300 pt-5 pb-3">
                                        David Mermelstein
                                      </h3>
                                      <p className="text-gray-600 text-xs md:text-sm md:px-6">
                                        Spent last 7+ years designing
                                        electro-optics systems for civil &
                                        military applications. With Moran,
                                        co-founded gas sensor IoT company and
                                        IoT optics startup. PhD in Electrical
                                        Engineering, specialization in
                                        electro-optics, Ariel University.
                                      </p>
                                    </div>
                                    <div className="bg-white md:w-1/2 w-full lg:p-10 px-4 py-10 md:mx-6 mb-3 text-center hover:shadow-full rounded-t-3xl">
                                      <div className="w-24 rounded-full m-auto">
                                        <img src="assets/landing/avatar.png" />
                                      </div>
                                      <h3 className="text-lg text-black-300 pt-5 pb-3">
                                        Moran Biton
                                      </h3>
                                      <p className="text-gray-600 text-xs md:text-sm md:px-6">
                                        Nearly 6 years leading scientific
                                        development at Ariel University. PhD in
                                        Electrical Engineering,
                                        three-dimensional cameras and optics.
                                        Co-founded two companies with David.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ),
                          },
                          {
                            name: "Contributors",
                            textColor: "primary",
                            component: (
                              <>
                                <div className="mx-auto lg:w-9/12 md:w-10/12"></div>
                              </>
                            ),
                          },
                        ]}
                      />
                    </div>
                  </div>
                </>
              ),
            },
            {
              name: "Career",
              textColor: "primary",
              component: (
                <>
                  <div className="bg-white py-10 px-6 text-center">
                    <h2 className="text-3xl text-black-100">Our Culture</h2>
                    <hr className="bg-gray-670 my-2 mt-4 w-8/12 lg:w-4/12 m-auto" />
                    <p className="mt-5 text-gray-670 md:px-6 leading-7 text-sm md:text-md lg:w-8/12 mx-auto">
                      Our business is young, our heart is young, therefore we
                      are young at heart. Driven by passion and our one passion
                      to use technology to abolish barriers of resources (time,
                      money and skills). We serve people, makers, inventors,
                      innovators and engineers. We serve businesses, yours, the
                      large and the small ones out of a garage.
                    </p>
                    <p className="text-gray-670 text-sm md:text-md lg:w-8/12 mx-auto pt-1">
                      The ones with the wisdom to create and the ones who create
                      wisely.
                    </p>
                    <p className="text-ideeza-100 pt-6 text-sm md:text-md lg:w-8/12 mx-auto">
                      At IDEEZA, we want to give back the power to create to
                      everyone
                    </p>
                  </div>
                  <div id="career" className="bg-career">
                    <div className="text-center lg:p-16 p-6 w-full">
                      <h2 className="text-3xl text-black-100 pb-5">
                        Opened Postions
                      </h2>
                      <TabsMolecule
                        tabsClasses="border rounded-full lg:w-1/3 md:w-1/2 mx-auto"
                        tabClasses="bg-white hover:bg-current rounded-full w-full focus:bg-current focus:text-white text-xs tracking-tight text-gray-300 font-sans transform-none"
                        handleChange={handleChangeCareer}
                        index={career}
                        tabsData={[
                          {
                            name: "Developer",
                            textColor: "primary",
                            component: (
                              <>
                                <div className="mx-auto pt-8 lg:w-9/12 md:w-11/12 h-full">
                                  <div className="rounded-t-5xl overflow-hidden relative">
                                    <div
                                      className="bg-white w-full cursor-pointer hover:text-white hover:bg-ideeza-800 flex items-center justify-between p-6 mb-1 text-center shadow-full"
                                      onClick={feqShow}
                                    >
                                      <div className="w-full text-left pl-5">
                                        <h3 className="text-xl text-black-100">
                                          Android Engineer
                                        </h3>
                                        <p className="text-xs md:text-md text-gray-670">
                                          Freelancer, Full Time
                                        </p>
                                      </div>
                                      {/* <i className="el-icon-right text-3xl text-ideeza"></i> */}
                                    </div>
                                    {show === true ? <OpenedPosition /> : <></>}
                                    <div
                                      className="bg-white w-full cursor-pointer hover:text-white hover:bg-ideeza-800 flex items-center justify-between p-6 text-center shadow-full"
                                      onClick={showPosition}
                                    >
                                      <div className="w-full text-left pl-5">
                                        <h3 className="text-xl text-black-100">
                                          iOS Engineer
                                        </h3>
                                        <p className="text-xs md:text-md text-gray-670">
                                          Freelancer, Full Time
                                        </p>
                                      </div>
                                      {/* <i className="el-icon-right text-3xl text-izeeda"></i> */}
                                    </div>
                                    {position === true ? (
                                      <OpenedPosition />
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                </div>
                              </>
                            ),
                          },
                          {
                            name: "Marketing",
                            textColor: "primary",
                            component: <>Marketing</>,
                          },
                          {
                            name: "Designer",
                            textColor: "primary",
                            component: <>Designer</>,
                          },
                        ]}
                      />
                    </div>
                    <div className="md:text-2xl text-lg px-6 pb-6 xl:w-7/12 md:w-9/12 mx-auto text-center">
                      <h2 className="text-lg text-ideeza-500">
                        It was Picasso who was saying we are all born artists,
                      </h2>
                      <h2 className="text-ideeza-100 text-lg">
                        but what was difficult was to remain an Artist while
                        growing up.
                      </h2>
                    </div>
                  </div>
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default About;
