"use client";

import React, { useState } from "react";
import axios from "axios";

const About = () => {


  const [first_name,setFirst_name] = useState('');
  const [last_name,setLast_name] = useState('');
  const [email,setEmail] = useState('');
  const [subject,setSubject] = useState('');
  const [message,setMessage] = useState('');


  const handleSubmit = () => {
    if(first_name.length === 0){
      alert("First Name has left Blank!");
    }
    else if(last_name.length === 0){
      alert("Last Name has left Blank!");
    }
    else if(email.length === 0){
      alert("Email has left Blank!");
    }
    else if(subject.length === 0){
      alert("Subject has left Blank!");
    }
    else{
      const url = 'http://localhost/test/formsubmit.php';
      let fData = new FormData();
      fData.append('first_name',first_name);
      fData.append('last_name',last_name);
      fData.append('email',email);
      fData.append('subject',subject);
      fData.append('message',message);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }


  return (
  <React.Fragment>
  <section className="bg-white text-gray-900 body-font sm:px-28">
  <div className="container px-5 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full mt-20 mb-12 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">About</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur. Blandit consequat auctor penatibus id adipiscing phasellus a lacus scelerisque. Vulputate ipsum lectus leo nunc.</p>
    </div>
    <div className="flex flex-wrap mt-20 w-full">
    <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0" src="./chart.png" alt="step"/>
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




  <section className="bg-white text-gray-900 body-font sm:px-44">
  <div className="container px-5 mx-auto flex flex-wrap">
    <div className="flex flex-wrap mt-20 w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 flex flex-wrap">

        <div className="flex relative pb-12 mt-20">
          <div className="flex-grow pl-4">
            <h2 className="font-bold title-font text-3xl text-gray-900 mb-1 tracking-wider">Ways a Project Management Tool can help your Team</h2>
            <p className="leading-relaxed mt-5">Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</p>
          </div>
        </div>

        <div className="flex relative pb-12 flex-wrap w-1/2">
          <div className="flex-grow pl-4 w-1/2">
            <img src="./crm_security.png"/>
            <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">CRM Security</h2>
            <p className="leading-relaxed">cards and make more sales while chatting</p>
          </div>
        </div>

        <div className="flex relative pb-12 flex flex-wrap w-1/2">
          <div className="flex-grow pl-4 w-1/2">
            <img src="./marketing_hub.png"/>
            <h2 className="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">Marketing Hub</h2>
            <p className="leading-relaxed">Show off your goods in elegant product cards and mak.</p>
          </div>
        </div>
        <div className="relative px-4 pb-12">
            <button type="button" className="text-white rounded py-3 px-8 leading-6 bg-[#303030]">Get Started</button>
        </div>
      </div>
      <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0" src="./crm.png" alt="step"/>
    </div>
  </div>
  </section>








  <section className="bg-white text-gray-900 body-font sm:px-48">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Trusted by more than 75 million users globally</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Unique and powerful suite of software to run your entire business, brought to you  transform the way you work.</p>
    </div>
    <div className="rounded-xl flex flex-wrap -m-2">
        <img src="./client_logo.png"/>
    </div>
  </div>
  </section>









<section className="bg-white body-font">
    <div className="container sm:px-52 sm:py-24 mx-auto">
      <div className="bg-black rounded-lg p-5 sm:mb-72 mb-5 flex flex-col md:ml-auto mt-10 h-96 md:mt-0  z-10 shadow-md">

          <div className="container px-5 mt-5 flex flex-wrap mx-auto items-center">      
          <span className="inline-flex lg:mt-0 mt-6 justify-center md:justify-start md:w-auto">
              <div className="relative sm:w-96  sm:mr-4 mr-2">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-3 text-white">Sell | Serve | Automate</h1>
              <p className="mx-auto leading-relaxed text-base text-white">Boost enrolment and manage student lifecycle with our 360° CRM</p>
              </div>
          </span>
          <div className="flex md:flex-nowrap lg:ml-auto flex-wrap sm:justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm text-white">*Your Business Email Address</label>
              <input type="text" id="footer-field" name="footer-field" placeholder="Email" className="w-full bg-white rounded focus:ring-2 text-base outline-none py-1 px-3 leading-8 ease-in-out"/>
              </div>
              <button className="inline-flex text-black bg-[#4BE3EB] font-bold py-2 px-6 focus:outline-none rounded">Try Now</button>
          </div>
          </div>
        <img src="./dashboard.png"/>
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





  <section className="bg-white body-font">
  <div className="container sm:px-48 px-5 mb-5 sm:py-24 mx-auto">
    <div className="bg-gray-50 rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">

      <div className="flex flex-col text-center w-full py-12">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Want To Contact Us</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please fill up the information below to reach out to us.</p>
      </div>
      <div className="md:w-2/3 mx-auto mb-12">
      <form>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
              <input type="text" name="first_name" id="first_name" value={first_name} onChange={(e) => setFirst_name(e.target.value)} placeholder="FIRST NAME" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="p-2 w-1/2">
              <input type="text" name="last_name" id="last_name" value={last_name} onChange={(e) => setLast_name(e.target.value)} placeholder="LAST NAME" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="p-2 w-1/2">
              <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="p-2 w-1/2">
              <input type="text"  name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="SUBJECT" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div className="p-2 w-full">
              <textarea  name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="ADD MESSAGE" className="w-full bg-opacity-50 rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 h-32 text-base outline-none text-gray-700 py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <div className="p-2 items-end flex w-full flex-col sm:space-x-4">
            <div className="flex-grow w-full"></div>
            <button type="submit" name="submit" id="submit" onClick={handleSubmit} className="flex mx-auto text-white bg-[#303030] border-0 py-3 px-6 focus:outline-none rounded text-sm">Submit Now</button>
          </div>
        </div>
        </form>
      </div>

    </div>
    </div>
</section>



  </React.Fragment>
  );
};
export default About;
