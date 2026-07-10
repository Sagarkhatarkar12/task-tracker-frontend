import React from "react";
import logo from "../logo.svg";
import { FaBookReader } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdFolderCopy } from "react-icons/md";
// import [useState] from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupComp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
        const Navigate = useNavigate();

  const handleChange = async (e) => {
    console.log(e.target.value);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("User registered successfully:", data);
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        });
        Navigate("/login"); // Redirect to the login page after successful registration
        // You can redirect the user to a success page or perform other actions here
      } else {
        console.log("Error registering user:", data);
        alert("THERE IS SOME ERROR IN REGISTERING USER");
      }
    } catch (error) {
      console.log(error);
    }

    console.log("Form submitted");
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-2 px-4 py-6 sm:px-6 md:px-4">
      <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-1/2 flex flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden">
        {/* Form section */}
        <div className="w-full md:w-1/2 px-5 sm:px-8 py-6 md:py-8 bg-blue-50">
          <div className="flex flex-col h-full gap-2">
            <div>
              <img
                className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain"
                src={logo}
                alt="Hometown Hub"
              />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              Create Your Account !
            </h1>
            <p className="text-gray-600 text-sm">
              join thousands of people and be a part of your hometown community.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col h-fit gap-3 py-2"
            >
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold">Full Name</label>
                <input
                  placeholder="Enter your Name..."
                  className="rounded-sm px-2 text-sm py-2 bg-white outline-none w-full border border-transparent focus:border-purple-400"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold">Email</label>
                <input
                  placeholder="Enter your Email..."
                  className="rounded-sm px-2 text-sm py-2 bg-white outline-none w-full border border-transparent focus:border-purple-400"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold">
                  Phone Number
                </label>
                <input
                  placeholder="Enter the phone number"
                  className="rounded-sm px-2 text-sm py-2 bg-white outline-none w-full border border-transparent focus:border-purple-400"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-3">
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="mb-1 text-sm font-semibold">Password</label>
                  <input
                    placeholder="Create password"
                    className="rounded-sm px-2 text-sm py-2 bg-white outline-none w-full border border-transparent focus:border-purple-400"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col w-full sm:w-1/2 mt-3 sm:mt-0">
                  <label className="mb-1 text-sm font-semibold">
                    Confirm Password
                  </label>
                  <input
                    placeholder="confirm your password"
                    className="rounded-sm px-2 bg-white text-sm py-2 outline-none w-full border border-transparent focus:border-purple-400"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-purple-500 w-full sm:w-fit text-white px-4 py-2 rounded-sm hover:bg-purple-600 transition-colors cursor-pointer duration-300 mt-1"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Info / illustration section */}
        <div className="hidden md:flex md:w-1/2 relative bg-[url('/signup.png')] bg-no-repeat bg-cover bg-center">
          <div className="w-full h-full px-6 py-6 lg:px-8 lg:py-8 bg-white/40 backdrop-blur-[1px] flex flex-col justify-center">
            <h1 className="text-xl lg:text-2xl font-bold text-purple-900 leading-snug">
              Join a community that connects hearts and hometowns
            </h1>
            <div className="flex flex-col gap-4 mt-8 lg:mt-10">
              <div className="flex gap-3 items-center">
                <span className="border-2 p-3 lg:p-4 text-lg lg:text-xl rounded-full bg-white text-purple-700 shrink-0">
                  <FaBookReader />
                </span>
                <p className="text-sm lg:text-base">
                  connect with our people <br /> from our hometown
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <span className="border-2 p-3 lg:p-4 text-lg lg:text-xl rounded-full bg-white text-purple-700 shrink-0">
                  <FaRegCalendarAlt />
                </span>
                <p className="text-sm lg:text-base">
                  Joint event and <br /> local gatherings
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <span className="border-2 p-3 lg:p-4 text-lg lg:text-xl rounded-full bg-white text-purple-700 shrink-0">
                  <MdFolderCopy />
                </span>
                <p className="text-sm lg:text-base">
                  share updates and <br /> preserve culture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupComp;
