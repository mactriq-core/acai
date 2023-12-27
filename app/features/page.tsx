"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
  <React.Fragment>
  <section className="bg-white text-gray-900 body-font sm:px-48">
  <div className="flex flex-wrap w-full px-5 py-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Features</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur. Blandit consequat auctor penatibus id adipiscing phasellus a lacus scelerisque. Vulputate ipsum lectus leo nunc.</p>
    </div>
  <div className="container px-5 sm:py-24 mx-auto">
    
    <div className="flex flex-wrap -m-4">

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-8 rounded-lg shadow-md hover:bg-[#F4F4F4]">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
            <img src="./settings.png"/>
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2">Powerful Settings</h2>
          <p className="leading-relaxed text-base">Provide Excellent Customer Service. Answer More Tickets.</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-8 rounded-lg shadow-md hover:bg-[#F4F4F4]">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
            <img src="./user.png"/>
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2">User Friendly</h2>
          <p className="leading-relaxed text-base">Use Timeline To Plan Projects Right How The Pieces Fit Together.</p>
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-8 rounded-lg shadow-md hover:bg-[#F4F4F4]">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full mb-4">
            <img src="./correct.png"/>
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2">Integrated platform</h2>
          <p className="leading-relaxed text-base">Vivamus Massa Eleifend Etiam Neque Odio Feugiat Dolor Est.</p>
        </div>
      </div>
      
    </div>
  </div>
  </section>







  <section className="bg-white text-gray-900 body-font sm:px-28">
  <div className="container px-5 mx-auto flex flex-wrap">
    <div className="flex flex-wrap mt-20 w-full">
    <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="./chart.png" alt="step"/>
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">

        <div className="flex relative sm:pb-12 mt-12">
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-3xl text-gray-900 mb-1 tracking-wider">Allocate Leads and Simplify Lead Management</h2>
            <p className="leading-relaxed py-5">Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</p>
          </div>
        </div>

        <div className="flex relative sm:pb-12 mt-5 px-4">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#47CFFF] inline-flex items-center justify-center text-white relative z-10 mt-1">
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">Lead generation</h2>
            <p className="leading-relaxed">Guide Helps Companies Increase Customer & Agent Satisfaction, Also Reducing Support Costs.</p>
          </div>
        </div>

        <div className="flex relative sm:pb-12 mt-5 px-4">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#47CFFF] inline-flex items-center justify-center text-white relative z-10 mt-1">
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">Team Email</h2>
            <p className="leading-relaxed">Group Your Contacts By Location, Age, And Almost Any Behavior With Advanced Segmentation Tools.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
  </section>





  <section className="bg-white text-gray-900 body-font sm:px-48">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Sales Automation Modules</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</p>
    </div>
    <div className="bg-[#F9F9F9] border-dashed border-2 border-gray-300 rounded-xl flex flex-wrap -m-2">
    
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full py-12">
      <button type="button" className="text-white rounded py-2 px-8 leading-6 bg-[#303030]">In Need</button>
        <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./sales.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold text-xl">Sales</h2>
            <p className="text-gray-500">Unique and powerful suite sale run your entire business</p>
          </div>
        </div><div className="sm:px-20"><hr className="border-gray-300"/></div>
      </div>
      
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full py-12">
      <button type="button" className="text-white rounded py-2 px-8 leading-6 bg-[#303030]">Industry</button>
        <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./automotive.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold text-xl">Automotive</h2>
            <p className="text-gray-500">Unique and powerful suite sale run your entire business</p>
          </div>
        </div><div className="sm:px-20"><hr className="border-gray-300"/></div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full py-12">
      <button type="button" className="text-white rounded py-2 px-8 leading-6 bg-[#303030]">Solution</button>
        <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./project.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold text-xl">Project Management</h2>
            <p className="text-gray-500">Unique and powerful suite sale run your entire business</p>
          </div>
        </div><div className="sm:px-20"><hr className="border-gray-300"/></div>
      </div>
      
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./marketing.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold text-xl">Marketing</h2>
            <p className="text-gray-500">Unique and powerful suite sale run your entire business</p>
          </div>
        </div><div className="sm:px-20"><hr className="border-gray-300"/></div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./real_estate.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold text-xl">Real estate</h2>
            <p className="text-gray-500">Unique and powerful suite sale run your entire business</p>
          </div>
        </div><div className="sm:px-20"><hr className="border-gray-300"/></div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./delivery.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold text-xl">Delivery Management</h2>
            <p className="text-gray-500">Unique and powerful suite sale run your entire business</p>
          </div>
        </div><div className="sm:px-20"><hr className="border-gray-300"/></div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./service.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold text-xl">Service</h2>
            <p className="text-gray-500">Unique and powerful suite sale run your entire business</p>
          </div>
        </div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./education.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold text-xl">Education</h2>
            <p className="text-gray-500">Unique and powerful suite sale run your entire business</p>
          </div>
        </div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./loyalty.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold text-xl">Loyalty Management</h2>
            <p className="text-gray-500">Unique and powerful suite sale run your entire business</p>
          </div>
        </div><div className="sm:px-20"><hr className="border-gray-300"/></div>
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
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./management.png"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold text-xl">Professional Management</h2>
            <p className="text-gray-500">Unique and powerful suite sale run your entire business</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  </section>



  <section className="bg-[#303030] text-gray-100 body-font">
  <div className="container sm:px-48 px-5 py-12 mx-auto">
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
  </React.Fragment>
  );
};
export default Features;
