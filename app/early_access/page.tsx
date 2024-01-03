"use client";

import React, { useState } from "react";
import axios from "axios";


const Access = () => {

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
    <section className="text-gray-900 bg-white body-font">

    <div className="flex flex-col text-center px-5 w-full py-20">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Early Access</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Ultrices eleifend dignissim sollicitudin cursus sed. Tellus sagittis mattis nulla elit. Porttitor maecenas sit vitae mi id lacinia arcu dictum.</p>
    </div>




    <div className="container max-w-6xl sm:py-8 mx-auto">
      <div className="bg-black text-white rounded-xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0  z-10 shadow-md">

        <div className="flex flex-col text-center w-full py-12">
          <h1 className="sm:text-9xl text-8xl font-bold title-font mb-10">Waiting ?</h1>
          <h1 className="text-5xl font-bold title-font mb-6">Get The Early Access</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base sm:px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.</p>
        </div>
        
        <div className="mb-16">
          <button className="flex mx-auto text-black font-bold bg-[#4BE3EB] border-0 py-3 px-6 focus:outline-none rounded text-sm">See The Product</button>
        </div>
        
      </div>
    </div>



    
    <div className="container sm:px-48 px-5 py-32 mx-auto">
    <div className="bg-gray-50 rounded-xl p-8 flex flex-col md:ml-auto mt-10 md:mt-0  z-10 shadow-md">

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

    {/* <div className="container px-48 py-24">
    <div className="rounded-lg overflow-hidden p-10 items-end justify-start relative">
      
    </div>
  </div> */}
 
    
  </section>

  </React.Fragment>


  
  );
};
export default Access;
