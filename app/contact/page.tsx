"use client";

import React, { useState } from "react";
import axios from "axios";

const Contact = () => {

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


  // const [formData, setFormData] = useState({
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log('Contact form submitted successfully');
  //       // You can add additional logic or redirect the user here
  //     } else {
  //       console.error('Error submitting contact form');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting contact form:', error);
  //   }
  // };





  return (
    <React.Fragment>
    <section className="text-gray-900 bg-white body-font">

    <div className="flex flex-col text-center px-5 w-full py-20">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Contacts</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Ultrices eleifend dignissim sollicitudin cursus sed. Tellus sagittis mattis nulla elit. Porttitor maecenas sit vitae mi id lacinia arcu dictum.</p>
    </div>

    
    <div className="container sm:py-12 sm:px-48 px-5 mx-auto">
    <div className="bg-gray-50 rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 z-10 shadow-md">

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






    <div className="container sm:px-48 py-12 px-5 mx-auto">
    <div className="rounded-xl overflow-hidden items-end justify-start relative">
      <iframe  width="1200" height="800" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14883.404411987229!2d72.76991749999999!3d21.15832305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d8dc5cac1db%3A0xda6d9d9a69b92adf!2sPiplod%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1702646015010!5m2!1sen!2sin"></iframe>
    </div>
    </div>
 
    
  </section>

  </React.Fragment>


  
  );
};
export default Contact;
