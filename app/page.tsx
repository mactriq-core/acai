"use client";

import Link from "next/link";
// import Script from "next/script";
import { hotjar } from "react-hotjar";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  hotjar.initialize(3806906, 6);

  hotjar.identify("USER_ID", { userProperty: "" });
  hotjar.event("button-click");
  hotjar.stateChange("/");

  if (hotjar.initialized()) {
    hotjar.identify("USER_ID", { userProperty: "value" });
  }

  return (
    <React.Fragment>
      <section className="bg-white text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap">
          <div className="lg:w-full lg:h-full mx-auto">
            <div className="flex flex-wrap w-full h-full bg-white sm:py-52 px-5">
              <img
                alt="gallery"
                className="w-full object-cover object-center block absolute inset-0 bg-white"
                src="./index.png"
              />
              {/* <div className="px-40 text-left relative z-10 w-full"> */}
              <div className="sm:w-1/2 flex z-10 pb-12 mt-20 sm:px-40">
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-5xl text-gray-900 mb-1 tracking-wider">
                    The Platform Your Whole Business Will Love
                  </h2>
                  <p className="leading-relaxed mt-8 mb-10">
                    Provide excellent customer service. Answer more tickets
                    all-in-one Primarily software.
                  </p>
                  <Link href="early_access">
                    <button
                      type="button"
                      className="text-white rounded py-3 px-6 leading-6 bg-[#303030]"
                    >
                      Get Started
                    </button>
                  </Link>
                  <Link href="features">
                    <button
                      type="button"
                      className="text-black rounded py-3 px-6 leading-6 bg-[#FFFFFF] ml-3 shadow-md"
                    >
                      How It Work
                    </button>
                  </Link>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-white text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap">
    <div className="lg:w-full lg:h-full mx-auto">
      <div className="flex flex-wrap w-full h-full bg-white py-52 relative">
        <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src="./index.png"/>
        <div className="px-40 text-left relative z-10 w-full">
        <div className="flex relative pb-12 mt-20">
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-5xl text-gray-900 mb-1 tracking-wider">The Platform Your <br/>Whole Business <br/>Will Love</h2>
            <p className="leading-relaxed mt-8 mb-10">Provide excellent customer service. Answer more tickets <br/>all-in-one Primarily software.</p>
            <button type="button" className="text-white rounded py-3 px-8 leading-6 bg-[#303030]">Get Started</button>
            <button type="button" className="text-black rounded py-3 px-8 leading-6 bg-[#FFFFFF]">How It Work</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

      <section className="bg-white text-gray-900 body-font sm:px-48">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center border-t border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900 mt-10">
              Explore Premium Features
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Unique and powerful suite of software to run your entire business,
              brought to you by a company with the long term vision to transform
              the way you work.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-8 rounded-lg shadow-md hover:bg-[#F4F4F4]">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
                  <img src="./settings.png" />
                </div>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                  Powerful Settings
                </h2>
                <p className="leading-relaxed text-base">
                  Provide Excellent Customer Service. Answer More Tickets.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-8 rounded-lg shadow-md hover:bg-[#F4F4F4]">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
                  <img src="./user.png" />
                </div>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                  User Friendly
                </h2>
                <p className="leading-relaxed text-base">
                  Use Timeline To Plan Projects Right How The Pieces Fit
                  Together.
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-8 rounded-lg shadow-md hover:bg-[#F4F4F4]">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
                  <img src="./correct.png" />
                </div>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                  Integrated platform
                </h2>
                <p className="leading-relaxed text-base">
                  Vivamus Massa Eleifend Etiam Neque Odio Feugiat Dolor Est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-900 body-font sm:px-28">
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap mt-20 w-full">
            <img
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0"
              src="./chart.png"
              alt="step"
            />
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12 mt-12">
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-3xl text-gray-900 mb-1 tracking-wider">
                    Allocate Leads and Simplify Lead Management
                  </h2>
                  <p className="leading-relaxed py-5">
                    Unique and powerful suite of software to run your entire
                    business, brought to you by a company with the long term
                    vision to transform the way you work.
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12 mt-5">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#47CFFF] inline-flex items-center justify-center text-white relative z-10 mt-1"></div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">
                    Lead generation
                  </h2>
                  <p className="leading-relaxed">
                    Guide Helps Companies Increase Customer & Agent
                    Satisfaction, Also Reducing Support Costs.
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12 mt-5">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#47CFFF] inline-flex items-center justify-center text-white relative z-10 mt-1"></div>
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">
                    Team Email
                  </h2>
                  <p className="leading-relaxed">
                    Group Your Contacts By Location, Age, And Almost Any
                    Behavior With Advanced Segmentation Tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-900 body-font sm:px-44">
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap mt-20 w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 flex flex-wrap">
              <div className="flex relative pb-12 mt-20">
                <div className="flex-grow pl-4">
                  <h2 className="font-bold title-font text-3xl text-gray-900 mb-1 tracking-wider">
                    Ways a Project Management Tool can help your Team
                  </h2>
                  <p className="leading-relaxed mt-5">
                    Unique and powerful suite of software to run your entire
                    business, brought to you by a company with the long term
                    vision to transform the way you work.
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12 flex-wrap w-1/2">
                <div className="flex-grow pl-4 w-1/2">
                  <img src="./crm_security.png" />
                  <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">
                    CRM Security
                  </h2>
                  <p className="leading-relaxed">
                    cards and make more sales while chatting
                  </p>
                </div>
              </div>

              <div className="flex relative pb-12 flex flex-wrap w-1/2">
                <div className="flex-grow pl-4 w-1/2">
                  <img src="./marketing_hub.png" />
                  <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">
                    Marketing Hub
                  </h2>
                  <p className="leading-relaxed">
                    Show off your goods in elegant product cards and mak.
                  </p>
                </div>
              </div>
              <div className="relative pb-12">
                <Link href="early_access">
                  <button
                    type="button"
                    className="text-white rounded py-3 px-8 leading-6 bg-[#303030]"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <img
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0"
              src="./crm.png"
              alt="step"
            />
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-900 body-font sm:px-48">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              Trusted by more than 75 million users globally
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Unique and powerful suite of software to run your entire business,
              brought to you transform the way you work.
            </p>
          </div>
          <div className="rounded-xl flex flex-wrap -m-2">
            <img src="./client_logo.png" />
          </div>
        </div>
      </section>

      <section className="bg-white body-font">
        <div className="container sm:px-52 py-24 mx-auto">
          <div className="bg-black rounded-lg p-8 mb-72 flex flex-col md:ml-auto mt-10 h-96 md:mt-0  z-10 shadow-md">
            <div className="container px-5 mt-5 flex flex-wrap mx-auto items-center">
              <span className="inline-flex lg:mt-0 mt-6 justify-center md:justify-start md:w-auto">
                <div className="relative sm:w-96 w-40 sm:mr-4 mr-2">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-3 text-white">
                    Sell | Serve | Automate
                  </h1>
                  <p className="mx-auto leading-relaxed text-base text-white">
                    Boost enrolment and manage student lifecycle with our 360°
                    CRM
                  </p>
                </div>
              </span>
              <div className="flex md:flex-nowrap lg:ml-auto flex-wrap justify-center items-end md:justify-start">
                <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-white"
                  >
                    *Your Business Email Address
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    placeholder="Email"
                    className="w-full bg-white rounded focus:ring-2 text-base outline-none py-1 px-3 leading-8 ease-in-out"
                  />
                </div>
                <button className="inline-flex text-black bg-[#4BE3EB] font-bold py-2 px-6 focus:outline-none rounded">
                  Try Now
                </button>
              </div>
            </div>
            <img src="./dashboard.png" />
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-900 body-font sm:px-48">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              Sales Automation Modules
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Unique and powerful suite of software to run your entire business,
              brought to you by a company with the long term vision to transform
              the way you work.
            </p>
          </div>
          <div className="bg-[#F9F9F9] border-dashed border-2 border-gray-300 rounded-xl flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full py-12">
              <button
                type="button"
                className="text-white rounded py-2 px-8 leading-6 bg-[#303030]"
              >
                In Need
              </button>
              <div className="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="./sales.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-bold text-xl">
                    Sales
                  </h2>
                  <p className="text-gray-500">
                    Unique and powerful suite sale run your entire business
                  </p>
                </div>
              </div>
              <div className="sm:px-20">
                <hr className="border-gray-300" />
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full py-12">
              <button
                type="button"
                className="text-white rounded py-2 px-8 leading-6 bg-[#303030]"
              >
                Industry
              </button>
              <div className="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="./automotive.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-bold text-xl">
                    Automotive
                  </h2>
                  <p className="text-gray-500">
                    Unique and powerful suite sale run your entire business
                  </p>
                </div>
              </div>
              <div className="sm:px-20">
                <hr className="border-gray-300" />
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full py-12">
              <button
                type="button"
                className="text-white rounded py-2 px-8 leading-6 bg-[#303030]"
              >
                Solution
              </button>
              <div className="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="./project.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-bold text-xl">
                    Project Management
                  </h2>
                  <p className="text-gray-500">
                    Unique and powerful suite sale run your entire business
                  </p>
                </div>
              </div>
              <div className="sm:px-20">
                <hr className="border-gray-300" />
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="./marketing.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-bold text-xl">
                    Marketing
                  </h2>
                  <p className="text-gray-500">
                    Unique and powerful suite sale run your entire business
                  </p>
                </div>
              </div>
              <div className="sm:px-20">
                <hr className="border-gray-300" />
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="./real_estate.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-bold text-xl">
                    Real estate
                  </h2>
                  <p className="text-gray-500">
                    Unique and powerful suite sale run your entire business
                  </p>
                </div>
              </div>
              <div className="sm:px-20">
                <hr className="border-gray-300" />
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="./delivery.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-bold text-xl">
                    Delivery Management
                  </h2>
                  <p className="text-gray-500">
                    Unique and powerful suite sale run your entire business
                  </p>
                </div>
              </div>
              <div className="sm:px-20">
                <hr className="border-gray-300" />
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="./service.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-bold text-xl">
                    Service
                  </h2>
                  <p className="text-gray-500">
                    Unique and powerful suite sale run your entire business
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="./education.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-bold text-xl">
                    Education
                  </h2>
                  <p className="text-gray-500">
                    Unique and powerful suite sale run your entire business
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="./loyalty.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-bold text-xl">
                    Loyalty Management
                  </h2>
                  <p className="text-gray-500">
                    Unique and powerful suite sale run your entire business
                  </p>
                </div>
              </div>
              <div className="sm:px-20">
                <hr className="border-gray-300" />
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg">
                {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
            <p className="text-gray-500">UI Designer</p>
          </div> */}
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg">
                {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
            <p className="text-gray-500">UI Designer</p>
          </div> */}
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="./management.png"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-bold text-xl">
                    Professional Management
                  </h2>
                  <p className="text-gray-500">
                    Unique and powerful suite sale run your entire business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-900 body-font ">
        <div className="py-24 mx-auto flex flex-wrap">
          {/* <div className="flex flex-wrap w-full"> */}

          <div className="md:w-1/6 sm:mb-0 mb-6">
            {/* <div className="rounded-lg h-64 overflow-hidden">
      <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503"/>
    </div>
    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
    <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
    <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a> */}
          </div>

          <div className="md:py-6 md:w-1/3 sm:mb-0 mb-6">
            <div className="flex relative pb-12">
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-3xl text-gray-900 mb-1 tracking-wider">
                  How It Works
                </h2>
                <p className="leading-relaxed">
                  Unique and powerful suite of software to run your business,
                  brought to you by vision to you work.
                </p>
              </div>
            </div>

            <div className="flex relative pb-12">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10">
                <h1 className="font-bold text-2xl text-[#47CFFF]">01</h1>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">
                  Download Our App
                </h2>
                <p className="leading-relaxed">
                  CentraHub CRM automatically logs in any reactions made by your
                  leads, prospects
                </p>
              </div>
            </div>

            <div className="flex relative pb-12">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10">
                <h1 className="font-bold text-2xl text-[#47CFFF]">02</h1>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">
                  List Your Company Detail
                </h2>
                <p className="leading-relaxed">
                  Customers making it easier for your sales team members
                  audience they make contact.
                </p>
              </div>
            </div>

            <div className="flex relative pb-12">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10">
                <h1 className="font-bold text-2xl text-[#47CFFF]">03</h1>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">
                  Enjoy Your Business
                </h2>
                <p className="leading-relaxed">
                  customers, making it easier for your sales team members
                  audience before make contact.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 sm:mb-0 mb-6 flex flex-wrap">
            <div className="w-1/2 rounded-3xl rounded-r flex flex-wrap w-full bg-gray-100 relative">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block absolute inset-0"
                src="./phone.png"
              />
              <div className="text-left relative z-10 w-full">
                <div className="flex relative pb-12 mt-20">
                  <div className="px-12 flex-grow">
                    <h2 className="font-bold title-font text-3xl text-gray-900 mb-1">
                      The Perfect CRM Software: <br />
                      Boost Your Field Sales Team’s <br />
                      Efficiency
                    </h2>
                    <p className="leading-relaxed text-lg mt-7 mb-10 text-[#3BA3C8]">
                      Depending on the Sales Approaches Standardize <br />a
                      Marketing Process
                    </p>
                    <p className="leading-relaxed text-sm mb-10">
                      Unique and powerful suite of software to run your entire{" "}
                      <br />
                      business, brought to you by a company.
                    </p>
                    <div className="mt-3 sm:inline-flex mx-auto">
                      {/* <img src="./app_store.png"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="./google_play.png"/> */}
                      <a
                        href="https://www.apple.com/in/app-store/"
                        target="_blank"
                      >
                        <button
                          type="button"
                          className="flex items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded"
                        >
                          <div className="mr-3">
                            <svg viewBox="0 0 384 512" width="30">
                              <path
                                fill="currentColor"
                                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs">Download on the</div>
                            <div className="-mt-1 font-sans text-xl font-semibold">
                              App Store
                            </div>
                          </div>
                        </button>
                      </a>
                      <a href="https://play.google.com/store/" target="_blank">
                        <button
                          type="button"
                          className="sm:ml-3 flex items-center justify-center w-48 mt-3 text-white bg-black rounded h-14"
                        >
                          <div className="mr-3">
                            <svg viewBox="30 336.7 120.9 129.2" width="30">
                              <path
                                fill="#FFD400"
                                d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                              ></path>
                              <path
                                fill="#FF3333"
                                d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                              ></path>
                              <path
                                fill="#48FF48"
                                d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                              ></path>
                              <path
                                fill="#3BCCFF"
                                d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs">GET IT ON</div>
                            <div className="-mt-1 font-sans text-xl font-semibold">
                              Google Play
                            </div>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* </div> */}
        </div>
      </section>

      <section className="bg-[#303030] text-gray-100 body-font">
        <div className="container sm:px-48 px-5 py-12 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <div className="relative">
              <img
                alt="gallery"
                className="w-full object-cover h-72 absolute object-center"
                src="./wall_pattern.png"
              />
              <img
                alt="testimonial"
                className="w-36 h-36 mb-4 mt-16 relative object-cover object-center rounded-full inline-block bg-gray-100"
                src="./testimonial_user.png"
              />
              <br />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <span className="text-2xl font-bold"> Adam Chen</span>
            <h2 className="font-medium title-font tracking-wider text-sm mb-3">
              Analyst
            </h2>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFB545" }}
              className="ml-1"
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFB545" }}
              className="ml-1"
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFB545" }}
              className="ml-1"
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFB545" }}
              className="ml-1"
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#FFB545" }}
              className="ml-1"
            />

            <p className="leading-relaxed text-lg mt-3">
              “ PrimeCRM Is The Most Intuitive And Modern Live Chat We Found.
              Live Chat Obviously Made{" "}
              <span className="text-[#47CFFF] font-bold">
                Our Users Happier
              </span>{" "}
              And Our Service Department More Efficient
            </p>
          </div>

          <div className="container px-5 mt-14 mb-10 border-t border-gray-500 mx-auto">
            <div className="flex flex-wrap -m-4 mt-8 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                  4.9<span className="text-[#47CFFF]">/</span>5
                </h2>
                <p className="leading-relaxed">User Rating</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                  350<span className="text-[#FFB545]">K</span>+
                </h2>
                <p className="leading-relaxed">Customers</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                  99<span className="text-[#47DD56]">+</span>
                </h2>
                <p className="leading-relaxed">Team Members</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                  41<span className="text-[#FF5454]">M</span>
                </h2>
                <p className="leading-relaxed">Current Users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container sm:px-52 px-5 mx-auto">
          <div className="flex flex-col text-center w-full py-20 ">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              Deliver End-To-End Retail Billing & Solutions
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Unique and powerful suite of software to run your entire business,
              brought to you by a company with the long term vision to transform
              the way you work.
            </p>
          </div>
          {/* <div className="bg-gradient-to-r from-[#4FFFFF] to-[#4DDDDD] rounded-3xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md"> */}
          <div className="bg-gradient-to-r sm:mb-96 from-[#49DEFF] to-[#4FFFDF] rounded-3xl p-8 sm:h-96 flex flex-col md:ml-auto mt-10 md:mt-0  z-10 shadow-md">
            <div className="container px-5 py-8 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="sm:p-4 xl:w-1/2 md:w-1/2 w-full mb-1">
                  <div className="flex items-center mb-1 sm:px-12">
                    <img src="./Starter.png" className="h-10 w-10 mr-2" />
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Starter
                    </h2>
                  </div>

                  <div className="bg-white p-5 sm:px-12 rounded-3xl flex flex-col  overflow-hidden shadow-md">
                    {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2> */}
                    <h1 className="text-5xl font-bold text-gray-900 leading-none flex items-center">
                      <span>$45/Mo</span>
                      {/* <span className="text-lg ml-1 font-normal text-gray-500">/Mo</span> */}
                    </h1>
                    <p className="border-b border-gray-300 py-4">
                      Includes <span className="font-bold">1,000</span>{" "}
                      marketing contacts. Additional marketing contacts are sold
                      in increments of <span className="font-bold">1,000</span>{" "}
                      from
                    </p>
                    <p className="flex items-center text-gray-800 mb-3 mt-4">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Outbound email and&nbsp;
                      <span className="font-bold">in-product</span>
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      messaging
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      <span className="font-bold text-[#FFB545]">
                        Push messages
                      </span>
                      &nbsp;& notifications
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Custom bots
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Mobile Carousels
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Banner messages
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#D0D0D0" }}
                        />
                      </span>
                      <span className="font-bold">Multi-channel</span>
                      &nbsp;campaigns
                    </p>
                    <p className="flex items-center text-gray-800 mb-5">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#D0D0D0" }}
                        />
                      </span>
                      A/B testing & control groups
                    </p>

                    <Link href="early_access">
                      <button className="items-center mt-auto text-black bg-gray-200 border-0 py-3 px-4 w-full focus:outline-none hover:bg-gray-800 hover:text-white rounded-lg">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="sm:p-4 xl:w-1/2 md:w-1/2 w-full">
                  <div className="flex items-center mb-1 sm:px-12">
                    <img src="./Professional.png" className="h-10 w-10 mr-2" />
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Professional
                    </h2>
                  </div>
                  <div className="bg-white p-5 sm:px-12 rounded-3xl flex flex-col  overflow-hidden shadow-md">
                    {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2> */}
                    <h1 className="text-5xl font-bold text-gray-900 leading-none flex items-center">
                      <span>$60/Mo</span>
                      {/* <span className="text-lg ml-1 font-normal text-gray-500">/Mo</span> */}
                      <span className="ml-auto">
                        <img src="./percentage.png" className="h-14 w-14" />
                      </span>
                    </h1>

                    <p className="border-b border-gray-300 py-4">
                      Includes <span className="font-bold">2,000</span>{" "}
                      marketing contacts. Additional marketing contacts are sold
                      in increments of <span className="font-bold">5,000</span>{" "}
                      from
                    </p>
                    <p className="flex items-center text-gray-800 mb-3 mt-4">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Outbound email and&nbsp;
                      <span className="font-bold">in-product</span>
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      messaging
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      <span className="font-bold text-[#FFB545]">
                        Push messages
                      </span>
                      &nbsp;& notifications
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Custom bots
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Mobile Carousels
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Banner messages
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      <span className="font-bold">Multi-channel</span>
                      &nbsp;campaigns
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      A/B testing & control groups
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Website traffic analytics
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Campaign reporting
                    </p>
                    <p className="flex items-center text-gray-800 mb-3">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      <span className="font-bold">Custom reporting</span>
                    </p>
                    <p className="flex items-center text-gray-800 mb-5">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#2FCF3F" }}
                        />
                      </span>
                      Salesforce integration
                    </p>

                    <Link href="early_access">
                      <button className="items-center mt-auto text-black bg-gray-200 border-0 py-3 px-4 w-full focus:outline-none hover:bg-gray-800 hover:text-white rounded-lg">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="container sm:px-48 sm:py-32">
          <div className="rounded-lg overflow-hidden p-10 items-end justify-start relative"></div>
        </div>
      </section>
    </React.Fragment>
  );
}
