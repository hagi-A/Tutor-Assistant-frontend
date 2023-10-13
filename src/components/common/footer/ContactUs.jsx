import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HiPhone, HiMail } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import { AiFillCheckCircle } from "react-icons/ai";
import { MdError } from 'react-icons/md'
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9cz79gt",
        "template_hsinxoi",
        form.current,
        "R61BrHaDm54LqtcTU"
      )
      .then((result) => {

        console.log(result.text);
        toast("Email is sent Successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            icon: AiFillCheckCircle,
            theme: "light",
            });
    }, (error) => {
        console.log(error.text);
        toast.error('Email was not sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            icon: MdError,
            theme: "light",
            });
    });
  };

  return (
    <div id="contactUs" className="flex w-full min-h-screen justify-center items-center">
    <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-6 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white sm:p-12 overflow-hidden">
      <div className="flex flex-col space-y-6 justify-between ">
        <div>
          <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
          <p className="pt-2 text-cyan-100 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            cum sunt ratione aut veritatis, nulla fugiat recusandae deserunt
            laborum iusto facere itaque natus inventore voluptas! Blanditiis
            quasi animi maiores dolores.
          </p>
        </div>
        <div className="inline-flex space-x-2 item-center">
          <HiPhone className="text-teal-300 text-xl" />
          <span className="">0943125551</span>
        </div>
        <div className="inline-flex space-x-2 item-center">
          <HiMail className="text-teal-300 text-xl" />
          <span className="">haregalemu9@gmail.com</span>
        </div>

        <div className="flex space-x-2 text-xl">
          <Link>
            <FaFacebook />
          </Link>
          <Link>
            <FaTelegramPlane />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaInstagram />
          </Link>
        </div>
      </div> 
      <div className="relative">
        {/* the circles */}
        <div className="absolute z-0  w-40 h-40 bg-teal-400 rounded-full top-0 right-0 "></div>
        <div className="absolute z-0  w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-20"></div>
       
        <div className="relative z-10 bg-white sm:p-12 rounded-xl font-light shadow-lg p-8 text-gray-600 md:w-80">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <div >
            <label className="text-sm ">Name</label>
            <input type="text" name="user_name" className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 "/>
            </div>
            <div>
            <label className="text-sm ">Email</label>
            <input type="email" name="user_email" className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 "/>
            </div>
            <div>
            <label className="text-sm ">Message</label>
            <textarea name="message" rows="4" className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 "/>
            <button className="inline-block self-end bg-cyan-700 text-white font-light rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
            </button>
            <ToastContainer />
            </div>
          </form>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
