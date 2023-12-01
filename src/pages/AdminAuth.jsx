import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// import validation and File
import { baseUrl } from "../Api";
import { emailValidator } from "../helper/AuthHelper";
import axios from "axios";

const Admin = () => {
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const FormHandler = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [id]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!emailValidator(userInfo.email)) {
      toast.error("Invalid Email");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/login`, userInfo);
      localStorage.setItem("authToken", response.data.authToken.token);
      localStorage.setItem("userData", response.data.data.userData.email);
      toast.success(`Welcome Admin ${response.data.data.userData.email}`);
      setTimeout(() => {
        nav("/admin/edit");
      }, 2000);
      setIsLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.error || "Failed to log in");
      } else {
        // Handle other types of errors
        toast.error("An unexpected error occurred");
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Admin Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => FormHandler(e)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => FormHandler(e)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {!isLoading ? "Sign in" : "Loading..."}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
