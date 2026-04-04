import React from "react";
import Button from "../../components/utils/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <section className="w-full min-h-fit h-screen bg-[#0A0E14] flex justify-center items-center pt-20 p-5">
        <div className="xl:min-w-[30vw] xl:max-w-fit w-full sm:w-full md:w-[60vw] lg:w-[60vw] rounded-lg shadow-neon shadow-xs p-5 bg-black">
          <div className="flex flex-col">
            <h1 className="text-center text-neon font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
              DEVPORTFOLIO
            </h1>
            <p className="text-center text-gray-400 text-sm sm:text-sm md:text-md lg:text-md xl:text-md">
              Authorized personnel only
            </p>
          </div>
          <hr className="text-gray-800 my-4 sm:my-4 md:my-5 lg:my-6 xl:my-8" />

          <div className="flex items-center justify-center">
            <Button
              text="Continue with Github"
              color="bg-[#1B2028] text-white py-2 sm:py-2 md:py-2 lg:py-3 px-1 sm:px-2 md:px-3 lg:px-3 uppercase"
            />
          </div>

          <hr className="text-gray-800 my-4 sm:my-4 md:my-5 lg:my-6 xl:my-8" />

          <form action="" className="flex flex-col py-4 px-3 sm:px-5 md:px-6 lg:px-7 xl:px-8 gap-8">
            <div className="flex flex-col justify-between gap-10">
              {/* Name and Email Fields */}
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="username"
                  className="text-neon uppercase text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-light"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Alex_Revero@example.com"
                  className="bg-[#0F141A] p-3 text-white placeholder:text-gray-400 focus:outline focus:outline-neon rounded-lg text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="password"
                  className="text-neon uppercase text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-light "
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-[#0F141A] p-3 text-white placeholder:text-gray-400 focus:outline focus:outline-neon rounded-lg text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg "
                />
              </div>
            </div>

            <Button
              text="Login"
              color="bg-neon text-center py-2 sm:py-2 md:py-2 lg:py-3 px-1 sm:px-2 md:px-3 lg:px-3 uppercase"
            />
          </form>

          <hr className="text-gray-800 my-8" />

          <p className="text-center text-gray-400 text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">
            Already have an account?{" "}
            <Link to="/auth/signup" className="text-neon hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignIn;
