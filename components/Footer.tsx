"use client"
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';
 // Using react-icons
 import { SiAfterpay } from "react-icons/si";
 import { FaPaypal } from "react-icons/fa";

import Image from 'next/image'

// Define type for the footer links
interface LinkItem {
  name: string;
  link: string;
}

const ShopFooter: React.FC = () => {
  const companyLinks: LinkItem[] = [
    { name: 'About Us', link: '#' },
    { name: 'Shop', link: '#' },
    { name: 'Contact Us', link: '# ' },
    { name: 'Customer Support', link: '/customersupport' },
    { name: 'Affiliate Sign Up', link: '#' },
    { name: 'Affiliate Login', link: '#' },
    { name: 'Business Login', link: '#' }
  ];

  const policyLinks: LinkItem[] = [
    { name: 'Terms & Conditions', link: '#' },
    { name: 'Privacy Policy', link: '#' },
    { name: 'Return Policy', link: '#' },
    { name: 'Shipping & Delivery', link: '#' },
    { name: 'Cancellation & Refunds', link: '/#' },
    { name: 'Report an Issue', link: '#' },
    { name: 'Request a Product', link: '#' }
  ];

  return (
    <div className='flex justify-evenly py-2  flex-wrap bg-white text-black'>
      <div className='py-5 flex flex-col gap-1 md:text-start text-center '>
        <Image src="https://kayhanaudio.com.au/wp-content/uploads/2023/02/logo.png" height={100} width={100} alt='this is image' className='mx-auto md:mx-0  ' />
        <p className="text-xs">Get the latest offer updates on <br /> our social profiles</p>
        <h2 className='mt-3'>Payment Methods
        </h2>
        <div className='flex gap-3 text-xl'> <SiAfterpay className='text-green-500' /> <FaPaypal />

        </div>
      </div>
      <div className='flex gap-3 justify-evenly w-full md:w-[30%] xl:w-[47%] my-3'>
      <div className="flex flex-col gap-2 mt-2">
            <p className="text-lg font-avenir-bold">Company</p>
            {companyLinks.map((ele, index) => (
              <Link key={index} href={ele.link}>
                <p className="text-xs">{ele.name}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-lg font-avenir-bold">Policies</p>
            {policyLinks.map((ele, index) => (
              <Link key={index} href={ele.link}>
                <p className="text-xs">{ele.name}</p>
              </Link>
            ))}
          </div>
      </div>
            <div className='mt-2'>
            <p className="text-lg font-avenir-bold">We care for you</p>

              <p className="text-sm">100% Original guarantee for all products</p>
            <p className="text-sm">100% Safe and secure payment</p>

            <div className="flex gap-4 items-center text-3xl mt-4 justify-center md:justify-start">
              <Link href={"#"} >
                <FaFacebook className="w-6 h-6 text-blue-600" />
              </Link>
              <Link href={"#"} >
                <FaTwitter className="w-6 h-6 text-blue-400" />
              </Link>
              <Link href={"#"} >
                <FaInstagram className="w-6 h-6 text-pink-500" />
              </Link>
              <Link href={"#"} >
                <FaPinterest className="w-6 h-6 text-red-500" />
              </Link>
              <Link href={"#"} >
                <FaLinkedin className="w-6 h-6 text-blue-700" />
              </Link>
            </div>
            </div>
      
    </div>
  );
};

export default ShopFooter;