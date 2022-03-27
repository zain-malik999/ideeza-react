import React, { useState } from "react";
import { AgreementTabs, Icon_Label, Collapse } from "molecules";
import { Header, AgreementTabsHeader } from "orgasms";
import { RiUser3Fill } from "react-icons/ri";
import { AiOutlineCopyright } from "react-icons/ai";
function Agreement() {
  const [show, setShow] = useState(false);
  const feqShow = () => {
    setShow(!show);
  };
  const [agree, setAgree] = useState(0);
  const handleChange = (event, newValue) => {
    setAgree(newValue);
  };
  return (
    <div>
      <div className="bg-header">
        <Header />
      </div>
      <div className="pt-20 md:px-6 px-4 font-sans">
        <h2 className="text-ideeza-100 text-center font-sans pb-4 md:text-3xl text-2xl">
          IDEEZA Legal
        </h2>
        <div className="py-10 lg:px-32 md:px-16 px-6 bg-gray-100 rounded-lg">
          <p className="text-black-100 font-bold md:text-md text-sm mb-8 font-sans">
            Please read this Terms and Conditions of Use and all other
            Agreements and Polices that are referenced herein Carefully.
          </p>
          <p className="text-black-100 md:text-md text-sm font-sans leading-loose">
            These Agreements and Policies contain important information
            regarding your legal rights, remedies and obligations that govern
            your use of the IDEEZA Platform.
          </p>
          <p className="text-black-100 md:text-md text-sm mb-8 font-sans leading-loose">
            Kindly note that the IDEEZA Platform includes our website, mobile
            application, social media pages and any other associated services.
            {show === false ? (
              <span
                className="text-ideeza-100 font-bold underline cursor-pointer pl-1"
                onClick={feqShow}
              >
                Show More
              </span>
            ) : (
              <></>
            )}
          </p>
          {show === true ? (
            <div>
              <ul className="text-black-100 md:text-md text-sm mb-8 font-sans leading-loose">
                These include the:
                <li>
                  <span className="font-bold">1. </span> Terms of Service
                </li>
                <li>
                  <span className="font-bold">2. </span> Privacy Policy
                </li>
                <li>
                  <span className="font-bold">3. </span> API License Agreement
                </li>
                <li>
                  <span className="font-bold">4. </span> Community Guidelines &
                  Content Policy
                </li>
                <li>
                  <span className="font-bold">5. </span> Copyright and DCMA
                  Policy
                </li>
              </ul>
              <p className="text-black-100 md:text-md text-sm mb-8 font-sans leading-loose">
                We may, at our sole discretion Terms and Conditions of Use and
                any other Agreement(s) or Policies at any time by posting a
                revised version on the Site. We shall provide reasonable advance
                notice of any substantial revision to these Agreements and/or
                policies by providing notice on the Site, and/or by sending you
                notice of such changes by email. Any revisions to the Terms and
                Conditions of Use and any other Agreement(s) or Policies will
                take effect on the noted effective date (each, as applicable,
                the “Effective Date”).
              </p>
              <p className="text-black-100 md:text-md text-sm mb-8 font-sans leading-loose">
                You acknowledge and agree that by continuing to use the
                Platform, Application, Website or Services after the effective
                date of the changes, you agree to be bound by the Terms and
                Conditions of Use or any such Agreement(s) and/or Policies
              </p>
              <p className="text-black-100 md:text-md text-sm mb-8 font-sans leading-loose">
                If you do not accept the Terms and Conditions of Use and/or any
                other Agreement(s) or Policies in their entirety, you agree not
                to access or use the Platform, Application, Site and/or Services
                after the effective date of the changes.
                <span
                  className="text-ideeza-100 font-bold underline cursor-pointer pl-1"
                  onClick={feqShow}
                >
                  Show less
                </span>
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <AgreementTabs
          handleChange={handleChange}
          index={agree}
          tabsData={[
            {
              name: (
                <>
                  <Icon_Label
                    mainClass="py-2 w-full cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                    tooltipProps={{ open: false }}
                    labelValue="Privacy Policy"
                    iconContanerClass="w-10"
                    lableClass={{
                      root: `text-gray-600 pl-1 font-sans text-lg tracking-tight activeTab`,
                    }}
                    iconComponent={
                      <RiUser3Fill className="text-gray-600 text-xl activeTab" />
                    }
                  />
                </>
              ),
              textColor: "primary",
              component: (
                <>
                  <AgreementTabsHeader
                    icon={
                      <AiOutlineCopyright className="text-current text-xl" />
                    }
                    title="Privacy Policy"
                  />
                  <Collapse
                    collapseData={[
                      {
                        id: "1",
                        name: "Acceptance of Privacy",
                        detail:
                          "These Terms of Use (Terms) you are reading are a legally binding agreement between PCBIX Ltd. (PCBIX, we or us) and yourself (you). By accessing or using this site (the “Site”) and any content therein you agree that you have read, understood, accept and agree to be bound by these Terms. If you do not agree to these Terms, do not use the Site. PCBIX reserves the right, in its sole discretion, to revise or modify these Terms at any time. In such case, we will post updated Terms and indicate the date of revision on the Site. If we feel the modifications are material, we will post a prominent notice on the Site and notify those of you with a current account via email. All new and/or revised Terms take effect immediately and apply to your use of the Services from that date on, except that material changes will take effect 30 days after the change is made and identified as material. Your continued use of any Services (as defined below) after new and/or revised Terms are effective indicates that you have read, understood, and agreed to be bound those Terms. If you do not agree to the revised Terms, your only remedy is to discontinue your use of the Services and to cancel any Account(s) (as defined below) you have created for use of the Services. You agree that PCBIX may change any part of the Services, including its content, at any time or discontinue the Services or any part thereof, for any reason, without notice to you and without liability. You declare that by acceptance of these Terms and/or by using the Services, you are at least eighteen (18) years old or of legal age in your jurisdiction to form a binding contract with PCBIX or, under the strict and continuous supervision of a parent or any other qualified legal guardian in any applicable jurisdiction. You may not use the Services and may not accept these Terms if you are a person barred from receiving the Services under the laws of the country in which you are resident or from which you use the Services.",
                      },
                      {
                        id: "2",
                        name: "Description of the Services",
                        detail:
                          "These Terms of Use (Terms) you are reading are a legally binding agreement between PCBIX Ltd. (PCBIX, we or us) and yourself (you). By accessing or using this site (the “Site”) and any content therein you agree that you have read, understood, accept and agree to be bound by these Terms. If you do not agree to these Terms, do not use the Site. PCBIX reserves the right, in its sole discretion, to revise or modify these Terms at any time. In such case, we will post updated Terms and indicate the date of revision on the Site. If we feel the modifications are material, we will post a prominent notice on the Site and notify those of you with a current account via email. All new and/or revised Terms take effect immediately and apply to your use of the Services from that date on, except that material changes will take effect 30 days after the change is made and identified as material. Your continued use of any Services (as defined below) after new and/or revised Terms are effective indicates that you have read, understood, and agreed to be bound those Terms. If you do not agree to the revised Terms, your only remedy is to discontinue your use of the Services and to cancel any Account(s) (as defined below) you have created for use of the Services. You agree that PCBIX may change any part of the Services, including its content, at any time or discontinue the Services or any part thereof, for any reason, without notice to you and without liability. You declare that by acceptance of these Terms and/or by using the Services, you are at least eighteen (18) years old or of legal age in your jurisdiction to form a binding contract with PCBIX or, under the strict and continuous supervision of a parent or any other qualified legal guardian in any applicable jurisdiction. You may not use the Services and may not accept these Terms if you are a person barred from receiving the Services under the laws of the country in which you are resident or from which you use the Services.",
                      },
                      {
                        id: "3",
                        name: "Access to the Services",
                        detail:
                          "These Terms of Use (Terms) you are reading are a legally binding agreement between PCBIX Ltd. (PCBIX, we or us) and yourself (you). By accessing or using this site (the “Site”) and any content therein you agree that you have read, understood, accept and agree to be bound by these Terms. If you do not agree to these Terms, do not use the Site. PCBIX reserves the right, in its sole discretion, to revise or modify these Terms at any time. In such case, we will post updated Terms and indicate the date of revision on the Site. If we feel the modifications are material, we will post a prominent notice on the Site and notify those of you with a current account via email. All new and/or revised Terms take effect immediately and apply to your use of the Services from that date on, except that material changes will take effect 30 days after the change is made and identified as material. Your continued use of any Services (as defined below) after new and/or revised Terms are effective indicates that you have read, understood, and agreed to be bound those Terms. If you do not agree to the revised Terms, your only remedy is to discontinue your use of the Services and to cancel any Account(s) (as defined below) you have created for use of the Services. You agree that PCBIX may change any part of the Services, including its content, at any time or discontinue the Services or any part thereof, for any reason, without notice to you and without liability. You declare that by acceptance of these Terms and/or by using the Services, you are at least eighteen (18) years old or of legal age in your jurisdiction to form a binding contract with PCBIX or, under the strict and continuous supervision of a parent or any other qualified legal guardian in any applicable jurisdiction. You may not use the Services and may not accept these Terms if you are a person barred from receiving the Services under the laws of the country in which you are resident or from which you use the Services.",
                      },
                      {
                        id: "4",
                        name: "Account Information",
                        detail:
                          "These Terms of Use (Terms) you are reading are a legally binding agreement between PCBIX Ltd. (PCBIX, we or us) and yourself (you). By accessing or using this site (the “Site”) and any content therein you agree that you have read, understood, accept and agree to be bound by these Terms. If you do not agree to these Terms, do not use the Site. PCBIX reserves the right, in its sole discretion, to revise or modify these Terms at any time. In such case, we will post updated Terms and indicate the date of revision on the Site. If we feel the modifications are material, we will post a prominent notice on the Site and notify those of you with a current account via email. All new and/or revised Terms take effect immediately and apply to your use of the Services from that date on, except that material changes will take effect 30 days after the change is made and identified as material. Your continued use of any Services (as defined below) after new and/or revised Terms are effective indicates that you have read, understood, and agreed to be bound those Terms. If you do not agree to the revised Terms, your only remedy is to discontinue your use of the Services and to cancel any Account(s) (as defined below) you have created for use of the Services. You agree that PCBIX may change any part of the Services, including its content, at any time or discontinue the Services or any part thereof, for any reason, without notice to you and without liability. You declare that by acceptance of these Terms and/or by using the Services, you are at least eighteen (18) years old or of legal age in your jurisdiction to form a binding contract with PCBIX or, under the strict and continuous supervision of a parent or any other qualified legal guardian in any applicable jurisdiction. You may not use the Services and may not accept these Terms if you are a person barred from receiving the Services under the laws of the country in which you are resident or from which you use the Services.",
                      },
                    ]}
                  />
                </>
              ),
            },
            {
              name: (
                <>
                  <Icon_Label
                    mainClass="py-2 w-full cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                    tooltipProps={{ open: false }}
                    labelValue="Terms & Conditions"
                    iconContanerClass="w-10"
                    lableClass={{
                      root: `text-gray-600 pl-1 font-sans text-lg tracking-tight activeTab`,
                    }}
                    iconComponent={
                      <RiUser3Fill className="text-gray-600 text-xl activeTab" />
                    }
                  />
                </>
              ),
              textColor: "primary",
              component: (
                <>
                  <AgreementTabsHeader
                    icon={
                      <AiOutlineCopyright className="text-current text-xl" />
                    }
                    title="Terms & Conditions"
                  />
                  <Collapse
                    collapseData={[
                      {
                        id: "1",
                        name: "Acceptance of Terms",
                        detail:
                          "These Terms of Use (Terms) you are reading are a legally binding agreement between PCBIX Ltd. (PCBIX, we or us) and yourself (you). By accessing or using this site (the “Site”) and any content therein you agree that you have read, understood, accept and agree to be bound by these Terms. If you do not agree to these Terms, do not use the Site. PCBIX reserves the right, in its sole discretion, to revise or modify these Terms at any time. In such case, we will post updated Terms and indicate the date of revision on the Site. If we feel the modifications are material, we will post a prominent notice on the Site and notify those of you with a current account via email. All new and/or revised Terms take effect immediately and apply to your use of the Services from that date on, except that material changes will take effect 30 days after the change is made and identified as material. Your continued use of any Services (as defined below) after new and/or revised Terms are effective indicates that you have read, understood, and agreed to be bound those Terms. If you do not agree to the revised Terms, your only remedy is to discontinue your use of the Services and to cancel any Account(s) (as defined below) you have created for use of the Services. You agree that PCBIX may change any part of the Services, including its content, at any time or discontinue the Services or any part thereof, for any reason, without notice to you and without liability. You declare that by acceptance of these Terms and/or by using the Services, you are at least eighteen (18) years old or of legal age in your jurisdiction to form a binding contract with PCBIX or, under the strict and continuous supervision of a parent or any other qualified legal guardian in any applicable jurisdiction. You may not use the Services and may not accept these Terms if you are a person barred from receiving the Services under the laws of the country in which you are resident or from which you use the Services.",
                      },
                      {
                        id: "2",
                        name: "Description of the Services",
                        detail:
                          "These Terms of Use (Terms) you are reading are a legally binding agreement between PCBIX Ltd. (PCBIX, we or us) and yourself (you). By accessing or using this site (the “Site”) and any content therein you agree that you have read, understood, accept and agree to be bound by these Terms. If you do not agree to these Terms, do not use the Site. PCBIX reserves the right, in its sole discretion, to revise or modify these Terms at any time. In such case, we will post updated Terms and indicate the date of revision on the Site. If we feel the modifications are material, we will post a prominent notice on the Site and notify those of you with a current account via email. All new and/or revised Terms take effect immediately and apply to your use of the Services from that date on, except that material changes will take effect 30 days after the change is made and identified as material. Your continued use of any Services (as defined below) after new and/or revised Terms are effective indicates that you have read, understood, and agreed to be bound those Terms. If you do not agree to the revised Terms, your only remedy is to discontinue your use of the Services and to cancel any Account(s) (as defined below) you have created for use of the Services. You agree that PCBIX may change any part of the Services, including its content, at any time or discontinue the Services or any part thereof, for any reason, without notice to you and without liability. You declare that by acceptance of these Terms and/or by using the Services, you are at least eighteen (18) years old or of legal age in your jurisdiction to form a binding contract with PCBIX or, under the strict and continuous supervision of a parent or any other qualified legal guardian in any applicable jurisdiction. You may not use the Services and may not accept these Terms if you are a person barred from receiving the Services under the laws of the country in which you are resident or from which you use the Services.",
                      },
                      {
                        id: "3",
                        name: "Access to the Services",
                        detail:
                          "These Terms of Use (Terms) you are reading are a legally binding agreement between PCBIX Ltd. (PCBIX, we or us) and yourself (you). By accessing or using this site (the “Site”) and any content therein you agree that you have read, understood, accept and agree to be bound by these Terms. If you do not agree to these Terms, do not use the Site. PCBIX reserves the right, in its sole discretion, to revise or modify these Terms at any time. In such case, we will post updated Terms and indicate the date of revision on the Site. If we feel the modifications are material, we will post a prominent notice on the Site and notify those of you with a current account via email. All new and/or revised Terms take effect immediately and apply to your use of the Services from that date on, except that material changes will take effect 30 days after the change is made and identified as material. Your continued use of any Services (as defined below) after new and/or revised Terms are effective indicates that you have read, understood, and agreed to be bound those Terms. If you do not agree to the revised Terms, your only remedy is to discontinue your use of the Services and to cancel any Account(s) (as defined below) you have created for use of the Services. You agree that PCBIX may change any part of the Services, including its content, at any time or discontinue the Services or any part thereof, for any reason, without notice to you and without liability. You declare that by acceptance of these Terms and/or by using the Services, you are at least eighteen (18) years old or of legal age in your jurisdiction to form a binding contract with PCBIX or, under the strict and continuous supervision of a parent or any other qualified legal guardian in any applicable jurisdiction. You may not use the Services and may not accept these Terms if you are a person barred from receiving the Services under the laws of the country in which you are resident or from which you use the Services.",
                      },
                      {
                        id: "4",
                        name: "Account Information",
                        detail:
                          "These Terms of Use (Terms) you are reading are a legally binding agreement between PCBIX Ltd. (PCBIX, we or us) and yourself (you). By accessing or using this site (the “Site”) and any content therein you agree that you have read, understood, accept and agree to be bound by these Terms. If you do not agree to these Terms, do not use the Site. PCBIX reserves the right, in its sole discretion, to revise or modify these Terms at any time. In such case, we will post updated Terms and indicate the date of revision on the Site. If we feel the modifications are material, we will post a prominent notice on the Site and notify those of you with a current account via email. All new and/or revised Terms take effect immediately and apply to your use of the Services from that date on, except that material changes will take effect 30 days after the change is made and identified as material. Your continued use of any Services (as defined below) after new and/or revised Terms are effective indicates that you have read, understood, and agreed to be bound those Terms. If you do not agree to the revised Terms, your only remedy is to discontinue your use of the Services and to cancel any Account(s) (as defined below) you have created for use of the Services. You agree that PCBIX may change any part of the Services, including its content, at any time or discontinue the Services or any part thereof, for any reason, without notice to you and without liability. You declare that by acceptance of these Terms and/or by using the Services, you are at least eighteen (18) years old or of legal age in your jurisdiction to form a binding contract with PCBIX or, under the strict and continuous supervision of a parent or any other qualified legal guardian in any applicable jurisdiction. You may not use the Services and may not accept these Terms if you are a person barred from receiving the Services under the laws of the country in which you are resident or from which you use the Services.",
                      },
                    ]}
                  />
                </>
              ),
            },
            {
              name: (
                <>
                  <Icon_Label
                    mainClass="py-2 w-full cursor-pointer transition-all duration-500 ease-in-out flex items-center"
                    tooltipProps={{ open: false }}
                    labelValue="API License Agreement"
                    iconContanerClass="w-10"
                    lableClass={{
                      root: `text-gray-600 pl-1 font-sans text-lg tracking-tight activeTab`,
                    }}
                    iconComponent={
                      <RiUser3Fill className="text-gray-600 text-xl activeTab" />
                    }
                  />
                </>
              ),
              textColor: "primary",
              component: (
                <>
                  <AgreementTabsHeader
                    icon={
                      <AiOutlineCopyright className="text-current text-xl" />
                    }
                    title="API License Agreement"
                  />
                </>
              ),
            },
            {
              name: (
                <>
                  <Icon_Label
                    mainClass="py-2 w-full cursor-pointer transition-all duration-500 ease-in-out flex items-start"
                    tooltipProps={{ open: false }}
                    labelValue="Community Guidelines & Content Policy"
                    iconContanerClass="w-10"
                    lableClass={{
                      root: `text-gray-600 pl-1 font-sans text-lg tracking-tight activeTab`,
                    }}
                    iconComponent={
                      <svg
                        id="Icon_ionic-md-paper"
                        data-name="Icon ionic-md-paper"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="35"
                        viewBox="0 0 38.437 32.946"
                      >
                        <path
                          id="Path_1"
                          data-name="Path 1"
                          d="M39.064,4H15.728a1.414,1.414,0,0,0-1.373,1.416v2.7H5.6a3.614,3.614,0,0,0-3.6,3.6v17.8a7.437,7.437,0,0,0,7.379,7.421h24a7.078,7.078,0,0,0,7.061-7.035V5.373A1.377,1.377,0,0,0,39.064,4Zm-24.71,6.864V27.337h-3.6V12.511a4.189,4.189,0,0,0-.283-1.647ZM12.9,32.776A5.067,5.067,0,0,1,9.421,34.2a4.687,4.687,0,0,1-4.676-4.676V12.511a1.63,1.63,0,1,1,3.26,0v16.2a1.377,1.377,0,0,0,1.373,1.373h4.933A4.514,4.514,0,0,1,12.9,32.776Zm24.8-2.866a4.336,4.336,0,0,1-4.316,4.29H15.324A7.172,7.172,0,0,0,17.1,29.525V6.831H37.692Z"
                          transform="translate(-2 -4)"
                        />
                        <path
                          id="Path_2"
                          data-name="Path 2"
                          d="M15.5,8.5H29.228v4.8H15.5Z"
                          transform="translate(3.032 -2.323)"
                        />
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M15.5,14H29.228v2.746H15.5Z"
                          transform="translate(3.032 -0.272)"
                        />
                        <path
                          id="Path_4"
                          data-name="Path 4"
                          d="M15.5,18H29.228v2.746H15.5Z"
                          transform="translate(3.032 1.219)"
                        />
                        <path
                          id="Path_5"
                          data-name="Path 5"
                          d="M29.414,22H15.686s0,2.746-.686,2.746H27.758C29.414,24.746,29.414,22.944,29.414,22Z"
                          transform="translate(2.846 2.71)"
                        />
                      </svg>
                      //   <RiUser3Fill className="text-gray-600 text-xl activeTab mt-1.5" />
                    }
                  />
                </>
              ),
              textColor: "primary",
              component: (
                <>
                  <AgreementTabsHeader
                    icon={
                      <AiOutlineCopyright className="text-current text-xl" />
                    }
                    title="Community Guidelines & Content Policy"
                  />
                </>
              ),
            },
            {
              name: (
                <>
                  <Icon_Label
                    mainClass="py-2 w-full cursor-pointer transition-all duration-500 ease-in-out flex items-start"
                    tooltipProps={{ open: false }}
                    labelValue="Copyright and DCMA Policy"
                    iconContanerClass="w-10"
                    lableClass={{
                      root: `text-gray-600 pl-1 font-sans text-lg tracking-tight activeTab`,
                    }}
                    iconComponent={
                      <AiOutlineCopyright className="text-gray-600 text-xl activeTab mt-1.5" />
                    }
                  />
                </>
              ),
              textColor: "primary",
              component: (
                <>
                  <AgreementTabsHeader
                    icon={
                      <AiOutlineCopyright className="text-current text-xl" />
                    }
                    title="Copyright and DCMA Policy"
                  />
                </>
              ),
            },
          ]}
        />
        {/* <div className="grid grid-cols-8 pt-14">
          <div className="col-span-2 bg-gray-100 p-4 py-10 rounded-lg"></div>
          <div className="col-span-6 w-full px-4 py-3 overflow-y-auto">
            <AgreementTabsHeader title="Terms & Conditions" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Agreement;
