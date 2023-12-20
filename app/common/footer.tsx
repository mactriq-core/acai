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
                <a href="/"><img src="/white_logo.png" className="h-8 w-66"/></a>
                {/* <h1 className="mt-2 font-bold">Accountant AI</h1> */}
                </div>
                <div className="md:flex md:justify-between mt-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/Instagram.png" className="h-5 w-5"/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" className="h-5 w-5 ml-2"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter.png" className="h-5 w-5 ml-2"/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" className="h-5 w-5 ml-2"/>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="/youtube.png" className="h-5 w-7 ml-2"/>
                    </a>
                </div>
            </div>  


            <div className="sm:px-48 px-4 items-center">
                <hr className="border-gray-600"/>
            </div>

                <div className="md:flex md:justify-between sm:px-48 px-4 py-5">
                    <div className="col-sm-4">              
                        <h6 className="text-xl font-boldvm mb-5">Usefull Link</h6>  
                        <hr className="border-gray-600 sm:px-32"/>             
                        <h5 className="mt-10"><Link href="">Solution</Link></h5>
                        <h5 className="mt-2"><Link href="">Industries</Link></h5>       
                        <h5 className="mt-2"><Link href="">Products</Link></h5>      
                        <h5 className="mt-2"><Link href="">Resources</Link></h5>           
                        <h5 className="mt-2"><Link href="pricing">Pricing</Link></h5>           
                    </div>
                    <div className="col-sm-4">
                        <h6 className="text-xl font-bold mb-5">Service</h6>
                        <hr className="border-gray-600 sm:px-32"/>
                        <h5 className="mt-10"><Link href="">Sale</Link></h5>
                        <h5 className="mt-2"><Link href="">Marketing</Link></h5>
                        <h5 className="mt-2"><Link href="">Real Estate</Link></h5>
                        <h5 className="mt-2"><Link href="">Autimotive</Link></h5>
                        <h5 className="mt-2"><Link href="">Education</Link></h5>
                    </div>
                    <div className="col-sm-4">
                        <h6 className="text-xl font-bold mb-5">Contact Us</h6>
                        <hr className="border-gray-600 sm:px-32"/>
                        <h5 className="mt-10"><Link href="">1700 W Blancke St, kiyev</Link></h5>
                        <h5 className="mt-2"><Link href="">port south USA, American</Link></h5>
                        <h5 className="mt-2"><Link href="">&nbsp;</Link></h5>
                        <h5 className="mt-2"><Link href="">+3255 456 789</Link></h5>
                        <h5 className="mt-2"><Link href="">mail@primarily.com</Link></h5>
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