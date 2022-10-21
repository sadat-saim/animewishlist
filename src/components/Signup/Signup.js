import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UseContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        toast.success("Sign up successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error(`${err.message}`);
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen grid place-content-center">
      <div className="w-full scale-110 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Sign up</h1>
        <form
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSignup}
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-400">
              email
            </label>
            <input
              type="text"
              name="email"
              required
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Sign up
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline dark:text-gray-100"
          >
            Sign in
          </Link>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Signup;
