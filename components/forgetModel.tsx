"use client";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

const ForgetModel = () => {
  const [otp, setOtp] = useState(false);
  const [otpValue, setOtpValue] = useState("");

  return (
    <div className="w-[22rem] bg-white border p-5 shadow-lg rounded-lg">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
        {otp ? "Create New Password" : "Forgot Password?"}
      </h2>

      {/* Email or Password Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {otp ? "New Password" : "Email"}
        </label>
        <input
          type={otp ? "password" : "email"}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder={otp ? "Enter new password" : "Enter your email"}
        />
      </div>

      {/* OTP Input with Increased Width */}
      {!otp ? (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Enter OTP
          </label>
          <OtpInput
            value={otpValue}
            onChange={setOtpValue}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                className="w-20 h-7 px-3 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-lg"
              />
            )}
            containerStyle="flex justify-center gap-3"
          />
        </div>
      ) : (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Confirm your password"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between mt-5">
        {otp ? (
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg w-full transition-all">
            Submit
          </button>
        ) : (
          <button
            onClick={() => setOtp(true)}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg w-full transition-all"
          >
            Verify OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default ForgetModel;
