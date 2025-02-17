import React from "react";
interface FloatingLabelInputProps {
    label: string;
    id: string;
    type: string;
  }
  const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, id, type }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        className="peer w-full p-2 pt-5 text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-900"
        placeholder=" " // Keeps input height consistent
      />
      <label
        htmlFor={id}
        className="absolute left-2 top-3 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-900"
      >
        {label}
      </label>
    </div>
  );
};

const SellWithUS = () => {
  return (
    <section className="flex flex-col md:flex-row w-[100%] md:w-[80%] mx-auto mt-8">
      {/* Left Section - Form Inputs */}
      <div className="md:w-1/2 md:p-5 flex flex-col space-y-6">
        <h1 className="text-3xl text-center my-5">Sell with Us</h1>

        <div className="flex space-x-4">
          <FloatingLabelInput label="First Name" id="firstName" type="text" />
          <FloatingLabelInput label="Last Name" id="lastName" type="text" />
        </div>

        <FloatingLabelInput label="Email" id="email" type="email" />

        <div className="flex space-x-4">
          <FloatingLabelInput label="Trading Name" id="tradingName" type="text" />
          <FloatingLabelInput label="Company Name" id="companyName" type="text" />
        </div>

        <FloatingLabelInput label="Business Address" id="businessAddress" type="text" />
        
        <div className="flex space-x-4">
          <FloatingLabelInput label="ABN" id="abn" type="text" />
          <FloatingLabelInput label="Phone/Mobile" id="phone" type="text" />
        </div>

        <FloatingLabelInput label="Website (if any)" id="website" type="text" />

        <button className="bg-green-400 shadow-black shadow rounded-lg p-2 w-1/3 mx-auto">
          Submit
        </button>
      </div>

      {/* Right Section (Map and Contact Info) */}
      <div className="md:w-1/2 w-full my-2 p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.3751271482897!2d144.783392!3d-37.828103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6601ed1aeaaad%3A0x831cc45842b873c3!2sKayhan%20Audio!5e0!3m2!1sen!2sin!4v1738925488884!5m2!1sen!2sin"
          loading="lazy"
          className="w-full h-[17rem]"
          title="Our Location"
        ></iframe>

        <h1 className="text-2xl text-center md:text-start my-3">Our Address</h1>
        <div className="border border-red-500 mx-auto md:ml-0 w-[130px]"></div>

        <div className="text-xs text-center md:text-start text-gray-600 my-4">
          <p>Unit 3, 151 Dohertys Rd, Laverton North 3026, VIC</p>
          <p>Support: 1300 696 488</p>
          <p>Email: info@kayhanaudio.com.au</p>
        </div>

        <h5 className="py-4 text-center md:text-start">Opening Hours</h5>
        <p className="text-xs text-center md:text-start">
          Mon – Sat / 9:00AM – 6:00PM
        </p>
      </div>
    </section>
  );
};

export default SellWithUS;
