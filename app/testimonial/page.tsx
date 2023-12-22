"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const Testimonial = () => {
  return (
    <React.Fragment>
  <section className="bg-white text-gray-900 body-font relative">

    <div className="flex flex-col text-center w-full py-20 px-40">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Testimonial</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Blandit consequat auctor penatibus id adipiscing phasellus a lacus scelerisque. Vulputate ipsum lectus leo nunc.</p>
    </div>
  
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
            <h2 className="font-bold title-font text-3xl text-gray-900 mb-1 tracking-wider">How It Works</h2>
            <p className="leading-relaxed">Unique and powerful suite of software to run your business, brought to you by  vision to you work.</p>
          </div>
        </div>

        <div className="flex relative pb-12">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10">
            <h1 className="font-bold text-2xl text-[#47CFFF]">01</h1>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">Download Our App</h2>
            <p className="leading-relaxed">CentraHub CRM automatically logs in any reactions made by your leads, prospects</p>
          </div>
        </div>

        <div className="flex relative pb-12">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10">
            <h1 className="font-bold text-2xl text-[#47CFFF]">02</h1>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">List Your Company Detail</h2>
            <p className="leading-relaxed">Customers making it easier for your sales team members audience they make contact.</p>
          </div>
        </div>

        <div className="flex relative pb-12">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white inline-flex items-center justify-center text-white relative z-10">
            <h1 className="font-bold text-2xl text-[#47CFFF]">03</h1>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">Enjoy Your Business</h2>
            <p className="leading-relaxed">customers, making it easier for your sales team members audience before make contact.</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 sm:mb-0 mb-6 flex flex-wrap">
          <div className="w-1/2 rounded-3xl rounded-r flex flex-wrap w-full bg-gray-100 relative">
          <img alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" src="./phone.png"/>
          <div className="text-left relative z-10 w-full">
          <div className="flex relative pb-12 mt-20">
            <div className="px-12 flex-grow">
              <h2 className="font-bold title-font text-3xl text-gray-900 mb-1">The Perfect CRM Software: <br/>Boost Your Field Sales Team’s <br/>Efficiency</h2>
              <p className="leading-relaxed text-lg mt-7 mb-10 text-[#3BA3C8]">Depending on the Sales Approaches Standardize <br/>a Marketing Process</p>
              <p className="leading-relaxed text-sm mb-10">Unique and powerful suite of software to run your entire <br/>business, brought to you by a company.</p>
                <a className="mt-3 inline-flex ">
                  <img src="./app_store.png"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="./google_play.png"/>
                </a>
            </div>
          </div>
          </div>
          </div>
      </div>

    {/* </div> */}
  </div>
  </section>









<section className="bg-[#303030] text-gray-100 body-font">
  <div className="container px-48 py-12 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <div className="relative">
        <img alt="gallery" className="w-full object-cover h-72 absolute object-center" src="./wall_pattern.png"/>
        <img alt="testimonial" className="w-36 h-36 mb-4 mt-16 relative object-cover object-center rounded-full inline-block bg-gray-100" src="./testimonial_user.png"/><br/>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg><span className="text-2xl font-bold"> Adam Chen</span>
      <h2 className="font-medium title-font tracking-wider text-sm mb-3">Analyst</h2>
      <FontAwesomeIcon icon={faStar} style={{color: "#FFB545",}} className="ml-1"/>
      <FontAwesomeIcon icon={faStar} style={{color: "#FFB545",}} className="ml-1"/>
      <FontAwesomeIcon icon={faStar} style={{color: "#FFB545",}} className="ml-1"/>
      <FontAwesomeIcon icon={faStar} style={{color: "#FFB545",}} className="ml-1"/>
      <FontAwesomeIcon icon={faStar} style={{color: "#FFB545",}} className="ml-1"/>
      
      <p className="leading-relaxed text-lg mt-3">“ PrimeCRM Is The Most Intuitive And Modern Live Chat We Found. Live Chat Obviously Made <span className="text-[#47CFFF] font-bold">Our Users Happier</span> And Our Service Department More Efficient</p>
    </div>

    <div className="container px-5 mt-14 mb-10 border-t border-gray-500 mx-auto">
      <div className="flex flex-wrap -m-4 mt-8 text-center">
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl">4.9<span className="text-[#47CFFF]">/</span>5</h2>
          <p className="leading-relaxed">User Rating</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl">350<span className="text-[#FFB545]">K</span>+</h2>
          <p className="leading-relaxed">Customers</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl">99<span className="text-[#47DD56]">+</span></h2>
          <p className="leading-relaxed">Team Members</p>
        </div>
        <div className="p-4 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl">41<span className="text-[#FF5454]">M</span></h2>
          <p className="leading-relaxed">Current Users</p>
        </div>
      </div>
    </div>
  </div>
</section>









  <section className="bg-white">
    <div className="container px-52 mx-auto">
    <div className="flex flex-col text-center w-full py-20 px-40">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Deliver End-To-End Retail Billing & Solutions</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</p>
    </div>
    {/* <div className="bg-gradient-to-r from-[#4FFFFF] to-[#4DDDDD] rounded-3xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md"> */}
    <div className="bg-gradient-to-r mb-96 from-[#49DEFF] to-[#4FFFDF] rounded-3xl p-8 h-96 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
        <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-wrap -m-4">
            
            
            <div className="p-4 xl:w-1/2 md:w-1/2">
                <div className="flex items-center mb-1 px-12">
                  <img src="./Starter.png" className="h-10 w-10 mr-2"/>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Starter</h2>
                </div>
                
                <div className="bg-white h-full p-6 px-12 rounded-3xl flex flex-col relative overflow-hidden shadow-md">
                {/* <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2> */}
                <h1 className="text-5xl font-bold text-gray-900 leading-none flex items-center">
                    <span>$45/Mo</span>
                    {/* <span className="text-lg ml-1 font-normal text-gray-500">/Mo</span> */}
                </h1>
                <p className="border-b border-gray-300 py-4">Includes <span className="font-bold">1,000</span> marketing contacts. Additional marketing contacts are sold in increments of <span className="font-bold">1,000</span> from</p>
                <p className="flex items-center text-gray-800 mb-3 mt-4">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Outbound email and <span className="font-bold">&nbsp;in-product</span>
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>messaging
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span><span className="font-bold text-[#FFB545]">Push messages &nbsp;</span> & notifications
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
                    </span><span className="font-bold">Multi-channel</span>&nbsp; campaigns
                </p>
                <p className="flex items-center text-gray-800">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#D0D0D0",}} />
                    </span>A/B testing & control groups
                </p>

                <button className="items-center mt-auto text-black bg-gray-200 border-0 py-3 px-4 w-full focus:outline-none hover:bg-gray-800 hover:text-white rounded-lg">Get Started</button>
                </div>
            </div>

            <div className="p-4 xl:w-1/2 md:w-1/2 w-full">
                <div className="flex items-center mb-1 px-12">
                  <img src="./Professional.png" className="h-10 w-10 mr-2"/>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Professional</h2>
                </div>
                <div className="bg-white h-full p-6 px-12 rounded-3xl flex flex-col relative overflow-hidden shadow-md">
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
                    </span>Outbound email and <span className="font-bold">&nbsp;in-product</span>
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>messaging
                </p>
                <p className="flex items-center text-gray-800 mb-3">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span><span className="font-bold text-[#FFB545]">Push messages &nbsp;</span> & notifications
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
                    </span><span className="font-bold">Multi-channel</span>&nbsp; campaigns
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
                <p className="flex items-center text-gray-800">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} style={{color: "#2FCF3F",}} />
                    </span>Salesforce integration
                </p>

                <button className="items-center mt-auto text-black bg-gray-200 border-0 py-3 px-4 w-full focus:outline-none hover:bg-gray-800 hover:text-white rounded-lg">Get Started</button>
                </div>
            </div>
            
            </div>
        </div>
    </div>
    {/* </div> */}
</div>

    <div className="container px-48 py-24">
    <div className="rounded-lg overflow-hidden p-10 items-end justify-start relative">
      
    </div>
    </div>

</section>

  </React.Fragment>


  
  );
};
export default Testimonial;
