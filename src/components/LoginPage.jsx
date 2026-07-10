import React from "react";
import { useState } from "react";
import logo from "../logo.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { FaBookReader } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdFolderCopy } from "react-icons/md";


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const Navigation = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("User registered successfully:", data);
        setFormData({
          email: "",
          password: "",
        });
        Navigation("/"); // Redirect to the login page after successful registration
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("THERE IS SOME ERROR IN LOGGING IN");
    }
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
              Login to Your Account !
            </h1>
            <p className="text-gray-600 text-sm">
              welcome back, glad to see you in your hometown community.
            </p>

            <form className="flex flex-col h-fit gap-3 py-2">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold">
                  Email or Phone
                </label>
                <input
                  placeholder="Enter your email or phone..."
                  className="rounded-sm px-2 text-sm py-2 bg-white outline-none w-full border border-transparent focus:border-purple-400"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-semibold">Password</label>
                <input
                  placeholder="Enter your password"
                  className="rounded-sm px-2 text-sm py-2 bg-white outline-none w-full border border-transparent focus:border-purple-400"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-xs text-purple-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="bg-purple-500 w-full sm:w-fit text-white px-4 py-2 rounded-sm hover:bg-purple-600 transition-colors cursor-pointer duration-300 mt-1"
                onClick={handleSubmit}
              >
                Log In
              </button>

              <p className="text-xs text-gray-600 mt-1">
                Don&apos;t have an account?{" "}
                <a
                  href="/signup"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Sign up
                </a>
              </p>
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

export default Login;
