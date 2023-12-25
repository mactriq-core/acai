"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

// const goToBtn = () => {
//   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
// };


export default function Footer()
{
    return(
        <React.Fragment>
            <footer className="bg-[#303030] text-white">

                <div className="md:flex md:justify-between sm:px-48 px-4 py-5">
                  <h6 className="text-[#ffffff6e] mt-4"><a href="/"><img src="/white_logo.png" className="h-8 w-66"/></a></h6>
                  <div className="md:flex md:justify-between">
                    <div className="md:flex md:justify-between mt-4">
                        <Link href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} className="h-6 w-6"/></Link>
                        <Link href="https://facebook.com"><FontAwesomeIcon icon={faSquareFacebook} className="h-6 w-6 ml-3"/></Link>
                        <Link href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} className="h-6 w-6 ml-3"/></Link>
                        <Link href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6 ml-3"/></Link>   
                        <Link href="https://youtube.com"><FontAwesomeIcon icon={faYoutube} className="h-6 w-6 ml-3"/></Link>     
                    </div>
                  </div> 
                </div>

                <div className="sm:px-48 px-4 items-center">
                    <hr className="border-gray-600"/>
                </div>

                <div className="md:flex md:justify-between sm:px-48 px-4 mt-3">
                    <div className="col-sm-4">    
                        {/* <hr className="border-gray-600 sm:px-32"/>            */}
                        <h6 className="text-xl font-bold py-5">Usefull Link</h6>  
                        {/* <hr className="border-gray-600 px-32"/>              */}
                        <h5 className="mt-10"><Link href="">Solution</Link></h5>
                        <h5 className="mt-2"><Link href="">Industries</Link></h5>       
                        <h5 className="mt-2"><Link href="">Products</Link></h5>      
                        <h5 className="mt-2"><Link href="">Resources</Link></h5>           
                        <h5 className="mt-2 mb-10"><Link href="pricing">Pricing</Link></h5>           
                    </div>
                    <div className="col-sm-4">
                        {/* <hr className="border-gray-600 sm:px-32"/>       */}
                        <h6 className="text-xl font-bold py-5">Service</h6>
                        {/* <hr className="border-gray-600 px-32"/> */}
                        <h5 className="mt-10"><Link href="">Sale</Link></h5>
                        <h5 className="mt-2"><Link href="">Marketing</Link></h5>
                        <h5 className="mt-2"><Link href="">Real Estate</Link></h5>
                        <h5 className="mt-2"><Link href="">Autimotive</Link></h5>
                        <h5 className="mt-2 mb-10"><Link href="">Education</Link></h5>
                    </div>
                    <div className="col-sm-4">
                        {/* <hr className="border-gray-600 sm:px-32"/>       */}
                        <h6 className="text-xl font-bold py-5">Contact Us</h6>
                        {/* <hr className="border-gray-600 px-32"/> */}
                        <h5 className="mt-10"><Link href="">1700 W Blancke St, kiyev</Link></h5>
                        <h5 className="mt-2"><Link href="">port south USA, American</Link></h5>
                        <h5 className="mt-2"><Link href="">&nbsp;</Link></h5>
                        <h5 className="mt-2"><Link href="">+3255 456 789</Link></h5>
                        <h5 className="mt-2 mb-10"><Link href="">mail@primarily.com</Link></h5>
                    </div>
                    <div className="col-sm-4">
                        {/* <hr className="border-gray-600 sm:px-32"/>       */}
                        <h6 className="text-xl font-bold py-5">Our Latest News</h6>
                        {/* <hr className="border-gray-600 px-32"/> */}
                        <div className="flex flex-wrap w-full py-16 sm:px-36 mt-10 mb-10 rounded-3xl relative">
                            <img alt="gallery" className="w-full object-cover h-full object-center rounded-2xl block absolute inset-0" src="./footer_Image.png"/>
                            <div className="text-center relative z-10 w-full">
                                <button type="button" className="items-center opacity-80 text-black font-bold rounded py-3 px-8 leading-6 bg-white">Read Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <img src="/footer_Image.png" className="h-48 w-68 mt-10"/> */}
                <div className="sm:px-48 px-4 items-center">
                    <hr className="border-gray-600"/>
                </div>

                <div className="sm:px-12 px-4 py-7">
                  <h6 className="text-center">Copyright © Primarly | Designed By VictorFlow Templates</h6>
                </div>

            </footer>  
        </React.Fragment>
    );
}