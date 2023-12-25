"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const Blog = () => {
  return (
  <React.Fragment>



  <section className="bg-white text-gray-900 body-font">
  <div className="container sm:px-44 px-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-24">
      <h1 className="sm:text-3xl mt-24 text-2xl font-bold title-font mb-4 text-gray-900">Blogs</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Get the latest articles from our journal, writing, discuss and share</p>
    </div>
    <div className="flex flex-wrap -m-4">

      <div className="p-4">
        <div className="h-full shadow-md rounded-3xl overflow-hidden">
          <img className="lg:h-96 md:h-36 w-full object-cover object-center" src="./blog-1.png" alt="blog"/>
          <div className="p-6">
            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">April 10, 2022     Admin     No Comments</h2> */}

              <span className="text-gray-500 mr-3 mb-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-2">
                <svg className="w-5 h-5 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <FontAwesomeIcon icon={faCalendarDays} /> 
                </svg> April 10, 2022
              </span>
              <span className="text-gray-500 mr-3 mb-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-2">
                <svg className="w-5 h-5 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <FontAwesomeIcon icon={faUser} />
                </svg> Admin
              </span>
              <span className="text-gray-500 mr-3 mb-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-2">
                <svg className="w-5 h-5 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <FontAwesomeIcon icon={faCommentDots} />
                </svg> No Comments
              </span>

            <h1 className="title-font text-3xl font-bold text-gray-900 mb-5">6 Tips To Help You Build Your Social Media <br/>Effeciency & Better</h1>
            <p className="leading-relaxed mb-5">Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. <br/>ipsum dolor amet, consectetur adipiscing vestibulum ipsum primis in.</p>
            <div className="flex items-center flex-wrap ">
              <button type="button" className="text-white rounded py-3 px-8 leading-6 bg-[#303030]">Read More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 md:w-1/3">

          <div className="border-opacity-60 rounded-3xl overflow-hidden shadow-md">
            <div className="p-5">
                <h1 className="title-font text-2xl font-bold text-gray-900">Recent Post</h1>
                <div className="p-2 w-full">
                    <div className="h-full flex items-center border-b border-gray-200 py-2">
                    <img alt="team" className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4" src="./boat.png"/>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">Tax experts under income-tax lens for valuation</h2>
                        <p className="text-gray-500 text-sm">May 02, 2022 &nbsp;<span className="text-[#4BE3EB] font-bold text-3xl">.</span>&nbsp; 3 min read</p>
                    </div>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="h-full flex items-center border-b border-gray-200 py-2">
                    <img alt="team" className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4" src="./ball.png"/>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">Entrepreneurs Having the Necessary Skill Sets</h2>
                        <p className="text-gray-500 text-sm">May 02, 2022 &nbsp;<span className="text-[#4BE3EB] font-bold text-3xl">.</span>&nbsp; 3 min read</p>
                    </div>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="h-full flex items-center border-b border-gray-200 py-2">
                    <img alt="team" className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4" src="./crystal.png"/>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">How to Choose A Tech Stack for Your Startup</h2>
                        <p className="text-gray-500 text-sm">May 02, 2022 &nbsp;<span className="text-[#4BE3EB] font-bold text-3xl">.</span>&nbsp; 3 min read</p>
                    </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="border-opacity-60 rounded-3xl overflow-hidden shadow-md">
            <div className="p-5">
                <h1 className="title-font text-2xl font-bold text-gray-900">Categories</h1>

                <div className="p-2 w-full">
                    <div className="h-full flex items-center border-dashed border-b border-gray-200 py-2">
                        <h1 className="text-gray-900 inline-flex items-center md:mb-2 lg:mb-0">ALL</h1>
                        <h1 className="flex ml-auto text-gray-900">(7)</h1>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="h-full flex items-center border-dashed border-b border-gray-200 py-2">
                        <h1 className="text-gray-900 inline-flex items-center md:mb-2 lg:mb-0">TECHNOLOGY</h1>
                        <h1 className="flex ml-auto text-gray-900">(3)</h1>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="h-full flex items-center border-dashed border-b border-gray-200 py-2">
                        <h1 className="text-gray-900 inline-flex items-center md:mb-2 lg:mb-0">BUSINESS</h1>
                        <h1 className="flex ml-auto text-gray-900">(1)</h1>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="h-full flex items-center py-2">
                        <h1 className="text-gray-900 inline-flex items-center md:mb-2 lg:mb-0">MARKETING</h1>
                        <h1 className="flex ml-auto text-gray-900">(2)</h1>
                    </div>
                </div>

            </div>
          </div>

      </div>
    </div>
  </div>
</section>








<section className="bg-white text-gray-900 body-font">
  <div className="container sm:px-44 px-5 mx-auto">
    <div className="flex flex-wrap -m-4">

      <div className="p-4 mt-10 ">
        <div className="h-full shadow-md rounded-3xl overflow-hidden">
          <img className="lg:h-96 md:h-36 w-full object-cover object-center" src="./blog-2.png" alt="blog"/>
          <div className="p-6">
            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">April 10, 2022     Admin     No Comments</h2> */}

              <span className="text-gray-500 mr-3 mb-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-2">
                <svg className="w-5 h-5 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <FontAwesomeIcon icon={faCalendarDays} /> 
                </svg> April 10, 2022
              </span>
              <span className="text-gray-500 mr-3 mb-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-2">
                <svg className="w-5 h-5 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <FontAwesomeIcon icon={faUser} />
                </svg> Admin
              </span>
              <span className="text-gray-500 mr-3 mb-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-2">
                <svg className="w-5 h-5 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <FontAwesomeIcon icon={faCommentDots} />
                </svg> No Comments
              </span>

            <h1 className="title-font text-3xl font-bold text-gray-900 mb-5">6 Tips To Help You Build Your Social Media <br/>Effeciency & Better</h1>
            <p className="leading-relaxed mb-5">Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. <br/>ipsum dolor amet, consectetur adipiscing vestibulum ipsum primis in.</p>
            <div className="flex items-center flex-wrap ">
              <button type="button" className="text-white rounded py-3 px-8 leading-6 bg-[#303030]">Read More</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</section>




<section className="bg-white text-gray-900 body-font">
  <div className="container sm:px-44 px-5 py-14 mx-auto">
    <div className="flex flex-wrap -m-4">

      <div className="p-4">
        <div className="h-full shadow-md rounded-3xl overflow-hidden">
          <img className="lg:h-96 md:h-36 w-full object-cover object-center" src="./blog-3.png" alt="blog"/>
          <div className="p-6">
            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">April 10, 2022     Admin     No Comments</h2> */}

              <span className="text-gray-500 mr-3 mb-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-2">
                <svg className="w-5 h-5 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <FontAwesomeIcon icon={faCalendarDays} /> 
                </svg> April 10, 2022
              </span>
              <span className="text-gray-500 mr-3 mb-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-2">
                <svg className="w-5 h-5 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <FontAwesomeIcon icon={faUser} />
                </svg> Admin
              </span>
              <span className="text-gray-500 mr-3 mb-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-2">
                <svg className="w-5 h-5 mr-2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <FontAwesomeIcon icon={faCommentDots} />
                </svg> No Comments
              </span>

            <h1 className="title-font text-3xl font-bold text-gray-900 mb-5">6 Tips To Help You Build Your Social Media <br/>Effeciency & Better</h1>
            <p className="leading-relaxed mb-5">Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. <br/>ipsum dolor amet, consectetur adipiscing vestibulum ipsum primis in.</p>
            <div className="flex items-center flex-wrap ">
              <button type="button" className="text-white rounded py-3 px-8 leading-6 bg-[#303030]">Read More</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</section>









<section className="bg-white py-10">
<div className="flex flex-col items-center">
  <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
  </span>
  <div className="inline-flex mt-2 xs:mt-0">
    <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Prev
    </button>
    <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </button>
  </div>
</div>





{/* <div className="flex flex-col items-center">
  <button disabled
    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" className="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
    </svg>
    Previous
  </button>
  <div className="flex items-center gap-2">
    <button
      className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        1
      </span>
    </button>
    <button
      className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        2
      </span>
    </button>
    <button
      className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        3
      </span>
    </button>
    <button
      className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        4
      </span>
    </button>
    <button
      className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        5
      </span>
    </button>
  </div>
  <button
    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button">
    Next
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" className="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
    </svg>
  </button>
</div>  */}


</section>



  </React.Fragment>
  );
};
export default Blog;
