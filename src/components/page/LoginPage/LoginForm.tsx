"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface LoginFormProps {
  username: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState<LoginFormProps>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login gagal.");
      }

      router.replace("/dashboard");
    } catch (err: Error | any) {
      setError(err.message);
      console.error("Login failed:");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-96 h-fit bg-white p-5 rounded-lg">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mt-5 mb-8">Sign In</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="flex flex-col">
            <label htmlFor="Username" className="mb-3 font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={loginData.username}
              onChange={handleChange}
              required
              className="border rounded-lg mb-3 px-2 py-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="password" className="mb-3 font-semibold">
                Password
              </label>
              <Link
                href={"/reset-password"}
                className="text-blue-600 font-semibold hover:text-blue-800"
              >
                Lupa password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              onChange={handleChange}
              required
              className="border rounded-lg mb-3 px-2 py-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center my-2">{error}</div>
          )}
          <div className="text-center my-5">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg px-5 py-2 bg-blue-600 text-white font-semibold cursor-pointer hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
