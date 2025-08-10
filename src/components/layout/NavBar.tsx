import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
      <header className="fixed w-full flex justify-between md:justify-around items-center px-5 py-7 bg-white">
        <section>
          <nav>
            <Link href={"/"} className="text-2xl font-semibold">
              IGNISAFE
            </Link>
          </nav>
        </section>
        <section className="hidden md:block">
          <nav>
            <ul className="flex gap-5">
              <li>
                <Link href={"/"}>Beranda</Link>
              </li>
              <li>
                <Link href={"/about"}>Tentang Kami</Link>
              </li>
              <li>
                <Link href={"/map"}>Peta</Link>
              </li>
              <li>
                <Link href={"/contact"}>Kontak</Link>
              </li>
              {/* <li>
                <Link
                  href={"/login"}
                  className="px-3 py-2 border-2 rounded-sm font-semibold text-blue-600 border-blue-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300"
                >
                  Sign In
                </Link>
              </li> */}
            </ul>
          </nav>
        </section>
        <section className="md:hidden">
          <button className="flex items-center border-2 p-2 rounded-lg hover:bg-blue-600 text-blue-600 hover:text-white border-blue-400 hover:border-blue-600">
            <IoMenu size={30} />
          </button>
        </section>
      </header>
      <aside></aside>
    </>
  );
};

export default NavBar;
