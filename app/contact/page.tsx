import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row w-[100%] md:w-[80%] h-[70vh] mx-auto mt-8 bg-white text-black">
      {/* Left Section - Form Inputs */}
      <div className="md:w-1/2 md:p-5 flex flex-col space-y-6 p-2">
        <h1 className="text-3xl text-center my-5">Contact Us</h1>

        <div className="flex justify-between space-x-4">
          <div className="relative w-1/2">
            <input
              type="text"
              id="firstName"
              className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none focus:border-green-500"
              placeholder=" "
            />
            <label
              htmlFor="firstName"
              className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-500"
            >
              First Name
            </label>
          </div>

          <div className="relative w-1/2">
            <input
              type="text"
              id="lastName"
              className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none focus:border-green-500"
              placeholder=" "
            />
            <label
              htmlFor="lastName"
              className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-500"
            >
              Last Name
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none focus:border-green-500"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-500"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="phoneNumber"
            className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none focus:border-green-500"
            placeholder=" "
          />
          <label
            htmlFor="phoneNumber"
            className="absolute left-0 top-1 text-gray-700 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-500"
          >
            Phone Number
          </label>
        </div>

        <div className="relative">
          <textarea
            id="message"
            className="peer w-full mt-1 p-2 border-b border-gray-900 focus:outline-none focus:border-green-500"
            placeholder=" "
          />
          <label
            htmlFor="message"
            className="absolute left-0 top-1 text-black text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:top-1 peer-focus:text-sm peer-focus:text-green-500"
          >
            Comment Your Message
          </label>
        </div>

        <button className="bg-black hover:bg-green-800 text-xs text-white shadow-black shadow rounded-md md:p-2 p-1 w-1/3 mx-auto">
          Send Message
        </button>
      </div>

      {/* Right Section (Map & Contact Info) */}
      <div className="w-full md:w-1/2 my-2 p-2 h-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.3751271482897!2d144.783392!3d-37.828103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6601ed1aeaaad%3A0x831cc45842b873c3!2sKayhan%20Audio!5e0!3m2!1sen!2sin!4v1738925488884!5m2!1sen!2sin"
        loading="lazy"
        className="w-full h-[250px] md:h-[17rem] border rounded-lg"
        title="Google Maps Location"
        allowFullScreen
      ></iframe>
      
      <h1 className="text-2xl text-center md:text-left my-3">Our Address</h1>
      <div className="border border-blue-500 w-[130px] mx-auto md:ml-0"></div>
      
      <div className="text-xs text-gray-600 text-center md:text-left my-4">
        <p>Unit 3, 151 Dohertys Rd, Laverton North 3026, VIC</p>
        <p>Support: 1300 696 488</p>
        <p>Email: info@kayhanaudio.com.au</p>
      </div>
      
      <h5 className="py-4 text-center md:text-left font-semibold">Opening Hours</h5>
      <p className="text-xs text-center md:text-left">Mon – Sat / 9:00 AM – 6:00 PM</p>
    </div>
    </section>
  );
};

export default Contact;