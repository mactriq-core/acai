"use client";

import React from "react";

const Access = () => {
  return (
    <React.Fragment>
    <section className="text-gray-900 bg-white body-font relative">

    <div className="flex flex-col text-center w-full py-20 px-40">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Early Access</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Ultrices eleifend dignissim sollicitudin cursus sed. Tellus sagittis mattis nulla elit. Porttitor maecenas sit vitae mi id lacinia arcu dictum.</p>
    </div>




    <div className="container px-52 mx-auto mb-28">
      <div className="bg-black text-white rounded-xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">

        <div className="flex flex-col text-center w-full py-12">
          <h1 className="text-9xl font-bold mb-10">Waiting ?</h1>
          <h1 className="text-5xl font-bold title-font mb-4">Get The Early Access</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.</p>
        </div>
        
        <div className="mb-16">
          <button className="flex mx-auto text-black font-bold bg-[#4BE3EB] border-0 py-3 px-6 focus:outline-none rounded text-sm">See The Product</button>
        </div>
        
      </div>
    </div>



    
    <div className="container px-52 mx-auto">
    <div className="bg-gray-50 rounded-xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">

      <div className="flex flex-col text-center w-full py-12">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Want To Contact Us</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please fill up the information below to reach out to us.</p>
      </div>
      <div className="md:w-2/3 mx-auto mb-12">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label> */}
              <input type="text" id="name" name="name" placeholder="FIRST NAME" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              {/* <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label> */}
              <input type="email" id="email" name="email" placeholder="LAST NAME" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              {/* <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label> */}
              <input type="text" id="name" name="name" placeholder="EMAIL" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              {/* <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label> */}
              <input type="email" id="email" name="email" placeholder="SUBJECT" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              {/* <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label> */}
              <textarea id="message" name="message" placeholder="ADD MESSAGE" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2">
            <button className="flex mx-auto text-white bg-[#303030] border-0 py-3 px-6 focus:outline-none rounded text-sm">Submit Now</button>
          </div>
        </div>
      </div>

    </div>
    </div>






    <div className="container px-48 py-24">
    <div className="rounded-lg overflow-hidden p-10 items-end justify-start relative">
      
    </div>
  </div>
 
    
  </section>

  </React.Fragment>


  
  );
};
export default Access;
