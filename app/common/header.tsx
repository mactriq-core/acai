"use client";

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
// import Image from "next/image";

const Header = () => {
  return (
      <Popover className={"sticky z-50 mx-auto flex items-center sm:px-12 px-6 py-2 h-24"}>
        <Link href="/"><img src="/logo.png" width="50" height="50"></img></Link>
        <Link href="/"><h1 className="text-black font-bold">Accountant AI</h1></Link>
        <div className="grow bg-transparent">
          <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
            <Link href="about" className="text-black font-bold">About</Link>
            {/* <Link href="" className="text-black font-bold">Services</Link> */}
            <Link href="features" className="text-black font-bold">Features</Link>
            <Link href="testimonial" className="text-black font-bold">Testimonial</Link>
            <Link href="blog" className="text-black font-bold">Blog</Link>
            <Link href="early_access" className="text-black font-bold">Early Access</Link>
            <Link href="pricing" className="text-black font-bold">Pricing</Link>
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30"/>

        <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">

        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opaity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex item-center justify-between">
                <h1 className="text-black font-bold">Accountant AI</h1>
                <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 font-bold" href="about">About</Link>
                  {/* <Link className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 font-bold" href="">Services</Link>   */}
                  <Link className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 font-bold" href="features">Features</Link>  
                  <Link className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 font-bold" href="testimonial">Testimonial</Link>
                  <Link className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 font-bold" href="blog">Blog</Link>  
                  <Link className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 font-bold" href="early_access">Early Access</Link>
                  <Link className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 font-bold" href="pricing">Pricing</Link>
                  <Link className="text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 font-bold" href="contact">Contact</Link>
                </nav>
              </div>
              
            </div>
          </div>
        </Popover.Panel>
        </Transition>
  
        <div className="hidden sm:px-12 sm:block px-6 py-7 h-24">
        <Link href="contact"><button type="button" className="text-white rounded py-2 px-8 leading-6 bg-[#303030]">Contact</button></Link>
        </div>
      </Popover>
  );
};
export default Header;