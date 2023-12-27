"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Blog_Detail = () => {
  return (
  <React.Fragment>



  <section className="bg-white text-gray-900 body-font">
  <div className="container sm:px-44 px-5 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">

      <div className="p-4">
        <div className="h-full overflow-hidden">
          <img className="lg:h-96 md:h-36 w-full rounded-3xl object-cover object-center" src="./blog-1.png" alt="blog"/>
          <div className="mt-5">
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

            <h1 className="title-font text-3xl font-bold text-gray-900 mb-5">To convert them into leads and customers</h1>
            <p className="leading-relaxed mb-5">Uniquely Matrix Economically Sound Value Through Cooperative Technology. Competently Parallel <br/>
                                                Task Fully Researched Data And Enterprise Process Improvements. Collaboratively Expedite <br/>
                                                Quality Manufactured Products Via Client-Focused Results Quickly Communicate Enabled <br/>
                                                Technology And Turnkey Leadership Skills. Uniquely Enable Accurate Supply Chains Rather <br/>
                                                Than Friction Technology.</p>
            
            <h1 className="title-font text-3xl font-bold text-gray-900 mb-5">The Digital Service For All</h1>
            <p className="leading-relaxed mb-5">Appropriately Empower Dynamic Leadership Skills After Business Portals. Globally My Carminate <br/>
                                                Interactive Supply Chains With Distinctive Quality Vectors Global Sources Services. Uniquely <br/>
                                                Matrix Economically Sound Value Through Cooperative Technology. Competently Parallel Task Fully <br/>
                                                Researched Data And Enterprise Process Improvements.</p>
            <ul className="list-inside list-disc">
                <li className="mb-4">Listen to what they say about you</li>
                <li className="mb-4">Randomised words which.</li>
                <li className="">Internet tend to repeat predefined chunks</li>
            </ul>
            

          </div>
        </div>
      </div>

      <div className="p-3 md:w-1/3">

        <div className="border-opacity-60 rounded-3xl overflow-hidden shadow-md mb-10">
            <div className="p-5">
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <input type="text" className="border rounded-xl pl-4 pr-24 py-2 bg-[#EAEAEA] focus:outline-none focus:border-gray-500" placeholder="Search..."/>
                        <button className="absolute inset-y-0 right-0 px-3 py-2 text-gray-900 flex items-center">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        {/* <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg> */}
                        </button>
                    </div>
                </div>
                {/* <div className="flex bg-[#EAEAEA] p-4 space-x-28 rounded-xl">
                  <input className="bg-[#EAEAEA] outline-none" type="text" placeholder="Search..." />
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5"/>
                </div> */}
            </div>
        </div>

          <div className="border-opacity-60 rounded-3xl overflow-hidden shadow-md mb-10">
            <div className="p-5">
                <h1 className="title-font text-2xl font-bold text-gray-900">Recent Post</h1>
                <div className="p-2 w-full">
                    <div className="h-full flex items-center border-b border-gray-200 py-2">
                    <img alt="team" className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4" src="./boat.png"/>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">How to Increase Your ROI Through scientific</h2>
                        <p className="text-gray-500 text-sm">May 02, 2022 &nbsp;<span className="text-[#4BE3EB] font-bold text-3xl">.</span>&nbsp; 3 min read</p>
                    </div>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="h-full flex items-center border-b border-gray-200 py-2">
                    <img alt="team" className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4" src="./blog-3.png"/>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">How to Increase Your ROI Through scientific</h2>
                        <p className="text-gray-500 text-sm">May 02, 2022 &nbsp;<span className="text-[#4BE3EB] font-bold text-3xl">.</span>&nbsp; 3 min read</p>
                    </div>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="h-full flex items-center border-b border-gray-200 py-2">
                    <img alt="team" className="w-20 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4" src="./ball.png"/>
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">How to Increase Your ROI Through scientific</h2>
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







<section className="bg-white text-gray-800 body-font">
  <div className="container sm:px-44 px-5 mx-auto flex flex-wrap">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 item-center">
    
    <div className="bg-gradient-to-r from-[#7CE7FF] to-[#82FEE9] p-4 py-24 flex flex-col rounded-3xl text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
           <img src="./Pattern.png" className="h-16 w-16"/>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed font-bold italic text-base">“For the longest time, computers have been associated with work. Mainframes were for the Army, government agencies, and then large companies. Workstations were for engineers and software programmers. PCs were initially for other white-collar jobs.”</p>
        </div>
    </div>
    
    <h1 className="title-font text-lg text-gray-900 mt-10 mb-5">Make real time a work improvements</h1>
    <p className="leading-relaxed mb-5">Collaboratively Administrate Empowered Markets Via Plug-And-Play Networks. Dynamically Procrastinate B2C Users After Installed Base Benefits. Dramatically Visualize Customer Directed Convergence Without Revolutionary ROI.</p>
    <ul className="list-inside list-decimal">
        <li className="mb-4">It brings the right people together with all the right information and tools to get work done</li>
        <li className="mb-4">We provide operational efficiency, data security, and flexible scale</li>
        <li className="mb-4">Your best work, together in one package that works seamlessly from your computer</li>
        <li className="mb-4">Delivers the tools you need to save time Improve field performance always</li>
    </ul>

    <div className="container mt-10 py-4 mx-auto flex items-center sm:flex-row flex-col border-b border-t border-gray-200 ">
        <span className="ml-3 text-xl font-bold">Share</span>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-900" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
        </a>
        <a className="ml-3 text-gray-900" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
        </a>
        <a className="ml-3 text-gray-900" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
        </a>
        <a className="ml-3 text-gray-900" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
        </a>
        </span>
    </div>
    
    



    <div className="container py-10 mx-auto">
    <div className="mx-auto">
    <h1 className="font-bold text-3xl mb-10">Leave a Comments</h1>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          {/* <div className="relative"> */}
            <label htmlFor="name" className="leading-7 text-sm text-gray-800">Full name *</label>
            <input type="text" id="name" name="name" placeholder="John David" className="w-full bg-white rounded-xl border border-gray-300 focus:border-gray-500 text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          {/* </div> */}
        </div>
        <div className="p-2 w-1/2">
          {/* <div className="relative"> */}
            <label htmlFor="email" className="leading-7 text-sm text-gray-800">Your email *</label>
            <input type="email" id="email" name="email" placeholder="example@yourmail.com" className="w-full bg-white rounded-xl border border-gray-300 focus:border-gray-500 text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          {/* </div> */}
        </div>
        <div className="p-2 w-full">
          {/* <div className="relative"> */}
            <label htmlFor="email" className="leading-7 text-sm text-gray-800">Website *</label>
            <input type="email" id="email" name="email" placeholder="your website address here" className="w-full bg-white rounded-xl border border-gray-300 focus:border-gray-500 text-base outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          {/* </div> */}
        </div>
        <div className="p-2 w-full">
          {/* <div className="relative"> */}
            <label htmlFor="message" className="leading-7 text-sm text-gray-800">Message *</label>
            <textarea id="message" name="message" placeholder="Hello there,I would like to talk about how to..." className="w-full bg-white rounded-xl border border-gray-300 focus:border-gray-500 h-52 text-base outline-none text-gray-800 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          {/* </div> */}
        </div>
        <div className="p-2 w-full">
            <input type="checkbox" id="comment" name="comment" value="save my name, email, and website in this browser for the next time I comment."/>
            <label htmlFor="comment" className="text-sm">&nbsp; save my name, email, and website in this browser for the next time I comment.</label>
        </div>
        <div className="p-2">
          <button className="flex mx-auto text-white bg-[#303030] border-0 py-3 px-6 rounded mt-1">Post Comment</button>
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
export default Blog_Detail;
