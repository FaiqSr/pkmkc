import LoginForm from "@/components/page/LoginPage/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <main className="bg-slate-100">
        <section className="w-full">
          <section className="container mx-auto flex justify-center items-center min-h-svh">
            <LoginForm />
          </section>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
