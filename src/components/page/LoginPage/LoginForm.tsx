import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <section className="w-96 h-fit bg-white p-5 rounded-lg">
        <section className="text-center">
          <h1 className="text-2xl font-semibold mt-5 mb-8">Sign In</h1>
        </section>
        <section className="flex flex-col">
          <section className="flex flex-col">
            <label htmlFor="email" className="mb-3 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border rounded-lg mb-3 px-2 py-2 border-slate-300 active:border-blue-500"
            />
          </section>
          <section className="flex flex-col">
            <section className="flex justify-between">
              <label htmlFor="password" className="mb-3 font-semibold">
                Password
              </label>
              <Link
                href={"/reset-password"}
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Lupa password
              </Link>
            </section>
            <input
              type="password"
              name="password"
              id="password"
              className="border rounded-lg mb-3 px-2 py-2 border-slate-300 active:border-blue-500"
            />
          </section>
          <section className="text-center my-5">
            <button
              type="button"
              className="rounded-lg px-5 py-2 bg-blue-300 text-white font-semibold cursor-pointer hover:bg-blue-400 active:bg-blue-500"
            >
              Login
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default LoginForm;
