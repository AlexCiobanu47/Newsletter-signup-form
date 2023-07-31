import React, { useState } from "react";
import iconList from "../images/icon-list.svg";
import iconSuccess from "../images/icon-success.svg";
import signUpDesktop from "../images/illustration-sign-up-desktop.svg";
import signUpMobile from "../images/illustration-sign-up-mobile.svg";

const Form = () => {
  const [error, setError] = useState("");
  const [currentState, setCurrentState] = useState(1);
  const [email, setEmail] = useState("");
  const inputValidation = (value) => {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!pattern.test(value)) {
      setError("Enter valid email");
    } else {
      setError("");
    }
  };
  const handleInputChange = (event) => {
    inputValidation(event.target.value);
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (error == "") {
      setCurrentState(2);
    }
    console.log(email);
  };
  const handleDismiss = () => {
    setCurrentState(1);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl rounded-3xl p-0 md:p-5 font-Roboto bg-white">
      {currentState == 1 && (
        <>
          <div className="md:hidden w-full -mt-4">
            <img
              src={signUpMobile}
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
          <div id="left" className="flex flex-col gap-3 py-5 px-8 md:px-10">
            <h1 className=" text-5xl md:text-6xl font-bold my-2 text-DarkSlateGrey">
              Stay updated!
            </h1>
            <p className="text-justify mt-2">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div>
              <div className="flex gap-2">
                <img src={iconList} alt="check icon" />
                <p>Product discovery and building what matters</p>
              </div>
              <div className="flex">
                <img src={iconList} alt="check icon" />
                <p className="px-2 py-5 md:py-2">
                  Measuring to ensure updates are a success
                </p>
              </div>
              <div className="flex">
                <img src={iconList} alt="check icon" />
                <p className="px-2">And much more!</p>
              </div>
            </div>
            <form action="" className="flex flex-col" onSubmit={handleSubmit}>
              <div className="flex flex-row justify-between mt-7">
                <label htmlFor="email" className="font-bold">
                  Email address
                </label>
                {error && (
                  <p className="font-bold text-Tomato">Valid email required</p>
                )}
              </div>
              <input
                type="text"
                id="email-input"
                className=" border border-Grey rounded-lg py-4 md:py-2 px-5"
                placeholder="email@company.com"
                onChange={handleInputChange}
                required
              />
              <button className="bg-DarkSlateGrey hover:bg-gradient-to-r hover:to-Tomato hover:from-pink-500 text-White font-bold rounded-xl mt-4 p-6 md:p-4">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div id="right">
            <img
              src={signUpDesktop}
              alt=""
              className="hidden md:inline-block"
            />
          </div>
        </>
      )}
      {currentState == 2 && (
        <>
          <div className="flex flex-col gap-7 p-10 max-w-sm font-Roboto">
            <div className="max-w-[50px]">
              <img src={iconSuccess} alt="" className="" />
            </div>
            <h1 className="font-bold text-5xl">Thanks for subscribing!</h1>
            <p>
              A confirmation email has been sent to{" "}
              <span className="font-bold">{email}</span>. Please open it and
              click the button inside to confirm your subscription
            </p>
            <button
              onClick={handleDismiss}
              className="bg-DarkSlateGrey text-white p-5 rounded-xl font-bold"
            >
              Dismiss message
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
