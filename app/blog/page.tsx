import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const Blog = () => {
  return (
  <React.Fragment>



  <section className="bg-white text-gray-900 body-font">
  <div className="container px-44  mx-auto">
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
  <div className="container px-44 mx-auto">
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
  <div className="container px-44 py-14 mx-auto">
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



  </React.Fragment>
  );
};
export default Blog;
