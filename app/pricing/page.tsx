"use client";

import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const Pricing = () => {
  return (
    <React.Fragment>
    <section className="text-gray-900 bg-white px-5 body-font">

    <div className="flex flex-col text-center sm:px-48 w-full py-20">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Pricing</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Ultrices eleifend dignissim sollicitudin cursus sed. Tellus sagittis mattis nulla elit. Porttitor maecenas sit vitae mi id lacinia arcu dictum.</p>
    </div>

    </section>



    <section className="bg-white">
    <div className="container sm:px-52 px-5 mx-auto">
    {/* <div className="bg-gradient-to-r from-[#4FFFFF] to-[#4DDDDD] rounded-3xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md"> */}
    <div className="bg-gradient-to-r sm:mb-96 from-[#49DEFF] to-[#4FFFDF] rounded-3xl p-8 sm:h-96 flex flex-col md:ml-auto mt-10 md:mt-0  z-10 shadow-md">
        <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-wrap -m-4">
            
            
            <div className="sm:p-4 xl:w-1/2 md:w-1/2 w-full mb-1">
                <div className="flex items-center mb-1 sm:px-12">
                  <img src="./Starter.png" className="h-10 w-10 mr-2"/>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Starter</h2>
                </div>
                
                <div className="bg-white p-5 sm:px-12 rounded-3xl flex flex-col  overflow-hidden shadow-md">
                {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2> */}
                <h1 className="text-5xl font-bold text-gray-900 leading-none flex items-center">
                    <span>$45/Mo</span>
                    {/* <span className="text-lg ml-1 font-normal text-gray-500">/Mo</span> */}
                </h1>
                <p className="border-b border-gray-300 py-4">Includes <span className="font-bold">1,000</span> marketing contacts. Additional marketing contacts are sold in increments of <span className="font-bold">1,000</span> from</p>
                <p className="flex items-center text-gray-800 mb-3 mt-4">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Outbound email and&nbsp;<span className="font-bold">in-product</span>
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>messaging
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span><span className="font-bold text-[#FFB545]">Push messages</span>&nbsp;& notifications
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Custom bots
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Mobile Carousels
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Banner messages
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#D0D0D0",}} />
                    </span><span className="font-bold">Multi-channel</span>&nbsp;campaigns
                </p>
                <p className="flex items-center text-gray-800 mb-5">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#D0D0D0",}} />
                    </span>A/B testing & control groups
                </p>

                <Link href="early_access"><button className="items-center mt-auto text-black bg-gray-200 border-0 py-3 px-4 w-full focus:outline-none hover:bg-gray-800 hover:text-white rounded-lg">Get Started</button></Link>
                </div>
            </div>

            <div className="sm:p-4 xl:w-1/2 md:w-1/2 w-full">
                <div className="flex items-center mb-1 sm:px-12">
                  <img src="./Professional.png" className="h-10 w-10 mr-2"/>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Professional</h2>
                </div>
                <div className="bg-white p-5 sm:px-12 rounded-3xl flex flex-col  overflow-hidden shadow-md">
                {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2> */}
                <h1 className="text-5xl font-bold text-gray-900 leading-none flex items-center">
                    <span>$60/Mo</span>
                    {/* <span className="text-lg ml-1 font-normal text-gray-500">/Mo</span> */}
                    <span className="ml-auto"><img src="./percentage.png" className="h-14 w-14"/></span>
                </h1>
                
                <p className="border-b border-gray-300 py-4">Includes <span className="font-bold">2,000</span> marketing contacts. Additional marketing contacts are sold in increments of <span className="font-bold">5,000</span> from</p>
                <p className="flex items-center text-gray-800 mb-3 mt-4">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Outbound email and&nbsp;<span className="font-bold">in-product</span>
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>messaging
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span><span className="font-bold text-[#FFB545]">Push messages</span>&nbsp;& notifications
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Custom bots
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Mobile Carousels
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Banner messages
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span><span className="font-bold">Multi-channel</span>&nbsp;campaigns
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>A/B testing & control groups
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Website traffic analytics
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Campaign reporting
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span><span className="font-bold">Custom reporting</span>
                </p>
                <p className="flex items-center text-gray-800 mb-5">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Salesforce integration
                </p>

                <Link href="early_access"><button className="items-center mt-auto text-black bg-gray-200 border-0 py-3 px-4 w-full focus:outline-none hover:bg-gray-800 hover:text-white rounded-lg">Get Started</button></Link>
                </div>
            </div>
            
            </div>
        </div>
    </div>
    {/* </div> */}
</div>

    {/* <div className="container sm:px-48 sm:py-12">
    <div className="rounded-lg overflow-hidden p-10 items-end justify-start relative">
      
    </div>
    </div> */}

</section>




<section className="text-gray-900 bg-white px-5 body-font">    
    <div className="container max-w-6xl mx-auto py-40">
    <div className="bg-gray-50 rounded-xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
      <div className="flex flex-col text-center w-full py-12">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Want To Contact Us</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please fill up the information below to reach out to us.</p>
      </div>
      <div className="md:w-2/3 mx-auto mb-12">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            {/* <div className="relative"> */}
              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label> */}
              <input type="text" id="name" name="name" placeholder="FIRST NAME" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            {/* </div> */}
          </div>
          <div className="p-2 w-1/2">
            {/* <div className="relative"> */}
              {/* <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label> */}
              <input type="email" id="email" name="email" placeholder="LAST NAME" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            {/* </div> */}
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label> */}
              <input type="text" id="name" name="name" placeholder="EMAIL" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            {/* <div className="relative"> */}
              {/* <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label> */}
              <input type="email" id="email" name="email" placeholder="SUBJECT" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            {/* </div> */}
          </div>
          <div className="p-2 w-full">
            {/* <div className="relative"> */}
              {/* <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label> */}
              <textarea id="message" name="message" placeholder="ADD MESSAGE" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 h-32 text-base outline-none text-gray-700 py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            {/* </div> */}
          </div>
          <div className="p-2 items-end flex w-full flex-col sm:space-x-4">
            <div className=" flex-grow w-full"></div>
            <button className="flex mx-auto text-white bg-[#303030] border-0 py-3 px-6 focus:outline-none rounded text-sm">Submit Now</button>
          </div>
        </div>
      </div>

    </div>
    </div>

    {/* <div className="container px-48 py-24">
    <div className="rounded-lg overflow-hidden p-10 items-end justify-start relative">
      
    </div>
    </div> */}
 
  </section>

  </React.Fragment>


  
  );
};
export default Pricing;
