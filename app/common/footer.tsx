"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

// const goToBtn = () => {
//   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
// };


export default function Footer()
{
    return(
        <React.Fragment>
            <footer className="bg-[#303030] text-white">


            <div className="md:flex md:justify-between sm:px-48 px-4 py-7">
                <div className="md:flex  md:justify-between">
                <img src="/white_logo.png" className="h-8 w-66"/>
                {/* <h1 className="mt-2 font-bold">Accountant AI</h1> */}
                </div>
                <div className="md:flex md:justify-between mt-4">
                    <img src="/Instagram.png" className="h-5 w-5"/>&nbsp;&nbsp;
                    <img src="/facebook.png" className="h-5 w-5"/>&nbsp;&nbsp;
                    <img src="/twitter.png" className="h-5 w-5"/>&nbsp;&nbsp;
                    <img src="/linkedin.png" className="h-5 w-5"/>&nbsp;&nbsp;
                    <img src="/youtube.png" className="h-5 w-7"/>&nbsp;&nbsp;
                </div>
            </div>  


            <div className="sm:px-48 px-4 items-center">
                <hr className="border-gray-600"/>
            </div>

                <div className="md:flex md:justify-between sm:px-48 px-4 py-5">
                    <div className="col-sm-4">              
                        <h6 className="text-xl font-boldvm mb-5">Usefull Link</h6>  
                        <hr className="border-gray-600 sm:px-32"/>             
                        <h5 className="mt-10"><Link href="comming_soon">Solution</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">Industries</Link></h5>       
                        <h5 className="mt-2"><Link href="comming_soon">Products</Link></h5>      
                        <h5 className="mt-2"><Link href="comming_soon">Resources</Link></h5>           
                        <h5 className="mt-2"><Link href="comming_soon">Pricing</Link></h5>           
                    </div>
                    <div className="col-sm-4">
                        <h6 className="text-xl font-bold mb-5">Service</h6>
                        <hr className="border-gray-600 sm:px-32"/>
                        <h5 className="mt-10"><Link href="comming_soon">Sale</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">Marketing</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">Real Estate</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">Autimotive</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">Education</Link></h5>
                    </div>
                    <div className="col-sm-4">
                        <h6 className="text-xl font-bold mb-5">Contact Us</h6>
                        <hr className="border-gray-600 sm:px-32"/>
                        <h5 className="mt-10"><Link href="comming_soon">Bookkeeping</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">E-commerce</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">Point of sales(POS)</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">Email</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">WhatsApp</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">Fill Storage</Link></h5>
                        <h5 className="mt-2"><Link href="comming_soon">SMS</Link></h5>
                    </div>
                    <div className="col-sm-4">
                        <h6 className="text-xl font-bold mb-5">Our Latest News</h6>
                        <hr className="border-gray-600"/>
                        <img src="/footer_Image.png" className="h-48 w-68 mt-10"/>
                    </div>
                </div>

                <div className="sm:px-48 px-4 items-center">
                    <hr className="border-gray-600"/>
                </div>

                <div className="sm:px-12 px-4 py-7">
                  <h6 className="text-center">Copyright © Primarly | Designed By VictorFlow Templates</h6>
                </div>

                {/* <div className="top-btn" onClick={goToBtn}>
                    <FontAwesomeIcon icon={faCircleArrowUp} style={{color: "#ffffff99",width:"60",height:"60"}}/>
                </div> */}

            </footer>
        </React.Fragment>
    );
}