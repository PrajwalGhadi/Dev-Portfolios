import React, { useEffect, useState } from "react";
import Button from "../../components/utils/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import authValidator from "../../validator/AuthValidator";

const SignUp = () => {
  const { error, setError, loading, register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Frontend validation - runs before API call
      const validationErrors = authValidator.validateRegister({
        username,
        email,
        password,
        confirmPassword,
      });

      if (validationErrors.length > 0) {
        // Show first validation error
        toast.error(validationErrors[0].msg);
        return; // Don't call API if validation fails
      }

      // Only call API if frontend validation passes
      const response = await register({ email, password, username });

      if (response.success) {
        toast.success("Welcome to DevPortfolio!");
        navigate("/");
      }
    } catch (error) {
      console.log("Error from handleSubmit: ", error);
      toast.error(`${error}`);
    }
  };

  console.log(error);
  useEffect(() => {
    if (error || !error?.[0].path) {
      toast.error(error?.[0]?.message);
    }
  }, [error]);

  return (
    <>
      <section className="w-full min-h-fit h-screen bg-[#0A0E14] flex justify-center items-center pt-20 p-5">
        <div className="xl:min-w-[35vw] xl:max-w-fit w-full sm:w-full md:w-[60vw] lg:w-[60vw] rounded-lg shadow-neon shadow-xs p-5 bg-black">
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

          <form
            action=""
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col py-4 px-3 sm:px-5 md:px-6 lg:px-7 xl:px-8 gap-8"
          >
            <div className="flex justify-between flex-col xl:flex-row gap-5">
              {/* Name and Email Fields */}
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="username"
                  className="text-neon uppercase text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-light"
                >
                  Username
                </label>

                {(error && error?.[0]?.path === "username") ||
                error?.[1]?.path === "username" ||
                error?.[2]?.path === "username" ? (
                  <small className="text-red-500">
                    {(error?.[0]?.path === "username" && error?.[0]?.msg) ||
                      error?.[1]?.msg ||
                      error?.[2]?.msg ||
                      error?.message}
                  </small>
                ) : null}

                <input
                  type="text"
                  placeholder="Alex Revero"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-[#0F141A] p-3 text-white placeholder:text-gray-400 focus:outline focus:outline-neon rounded-lg text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="Email"
                  className="text-neon uppercase text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-light"
                >
                  Email
                </label>
                {(error && error?.[0]?.path === "email") ||
                error?.[1]?.path === "email" ||
                error?.[2]?.path === "email" ? (
                  <small className="text-red-500">
                    {(error?.[0]?.path === "email" && error?.[0]?.msg) ||
                      error?.[1]?.msg ||
                      error?.[2]?.msg ||
                      error?.message}
                  </small>
                ) : null}

                <input
                  type="text"
                  placeholder="Alex_Revero@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#0F141A] p-3 text-white placeholder:text-gray-400 focus:outline focus:outline-neon rounded-lg text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg"
                />
              </div>
            </div>

            {/* Password fields */}
            <div className="flex justify-between flex-col xl:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="Password"
                  className="text-neon uppercase text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-light"
                >
                  Password
                </label>
                {(error && error?.[0]?.path === "password") ||
                error?.[1]?.path === "password" ||
                error?.[2]?.path === "password" ? (
                  <small className="text-red-500">
                    {(error?.[0]?.path === "password" && error?.[0]?.msg) ||
                      error?.[1]?.msg ||
                      error?.[2]?.msg ||
                      error?.message}
                  </small>
                ) : null}
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#0F141A] p-3 text-white placeholder:text-gray-400 focus:outline focus:outline-neon rounded-lg text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="Verify_Password"
                  className="text-neon uppercase text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-light"
                >
                  Verify Password
                </label>

                {(error && error?.[0]?.path === "verified_password") ||
                error?.[1]?.path === "verified_password" ||
                error?.[2]?.path === "verified_password" ? (
                  <small className="text-red-500">
                    {(error?.[0]?.path === "verified_password" &&
                      error?.[0]?.msg) ||
                      error?.[1]?.msg ||
                      error?.[2]?.msg ||
                      error?.[3]?.msg ||
                      error?.message}
                  </small>
                ) : null}

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Verify Password"
                  className="bg-[#0F141A] p-3 text-white placeholder:text-gray-400 focus:outline focus:outline-neon rounded-lg text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg"
                />
              </div>
            </div>

            <Button
              text="Register"
              type="submit"
              loading={loading}
              onClick={handleSubmit}
              color="bg-neon text-center py-2 sm:py-2 md:py-2 lg:py-3 px-1 sm:px-2 md:px-3 lg:px-3 uppercase"
            />
          </form>

          <hr className="text-gray-800 my-4 sm:my-4 md:my-5 lg:my-6 xl:my-8" />

          <p className="text-center text-gray-400 text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg">
            Already have an account?{" "}
            <Link to="/auth/signin" className="text-neon hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUp;
