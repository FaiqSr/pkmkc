"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaDatabase } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";

const NavBarDashboard = () => {
  return (
    <header className="shadow">
      <section className="bg-white border-b border-slate-200">
        <TopNavBar />
      </section>
      <section className="bg-white">
        <BottomNavBar />
      </section>
    </header>
  );
};

export default NavBarDashboard;

const TopNavBar = () => {
  return (
    <section className="flex justify-between container mx-auto items-center py-2 px-5 ">
      <section>
        <Link href={"/dashboard"} className="font-semibold text-2xl text-black">
          Ignisafe
        </Link>
      </section>
      <section>
        <section className="flex items-center gap-3">
          <section className="text-end text-sm font-thin">
            <p>Lorem ipsum</p>
            <p>Admin</p>
          </section>
          <button className="border-2 rounded-sm border-white text-white cursor-pointer">
            <Image
              src={`/images/profile.png`}
              alt="avatar"
              width={30}
              height={30}
              className="object-cover rounded-sm h-full w-full"
            />
          </button>
        </section>
      </section>
    </section>
  );
};

const BottomNavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isMasterDataActive = pathname.startsWith("/dashboard/master");

  return (
    <section className="py-1 hidden sm:block container mx-auto">
      <nav>
        <ul className="flex justify-start items-center">
          <li
            className={`rounded-lg ${
              pathname === "/dashboard" ? "text-blue-500" : ""
            }`}
          >
            <Link
              href={"/dashboard"}
              className="flex items-center gap-2 px-4 py-3 rounded-sm hover:bg-slate-100"
            >
              <RiHomeLine size={30} />
              Dashboard
            </Link>
          </li>

          {/* Master Data Dropdown */}
          <li
            className="relative"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <button
              className={`flex items-center gap-2 cursor-pointer px-4 py-3 rounded-sm hover:bg-slate-100 ${
                isMasterDataActive ? "text-blue-500" : ""
              }`}
            >
              <FaDatabase size={25} />
              Master Data
              <IoIosArrowDown />
            </button>

            <ul
              className={`absolute w-full min-w-max border rounded-lg px-2 py-2 bg-white top-14 left-0 shadow-lg z-10 ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <li
                className={`py-2 px-3 hover:text-blue-500 rounded-md ${
                  pathname === "/dashboard/master/staff" ? "text-blue-500" : ""
                }`}
              >
                <Link href={"/dashboard/master/staff"}>Staff</Link>
              </li>
              <li
                className={`py-2 px-3 hover:text-blue-500 rounded-md ${
                  pathname === "/dashboard/master/alat" ? "text-blue-500" : ""
                }`}
              >
                <Link href={"/dashboard/master/alat"}>Alat</Link>
              </li>
              <li
                className={`py-2 px-3 hover:text-blue-500 rounded-md ${
                  pathname === "/dashboard/master/lokasi" ? "text-blue-500" : ""
                }`}
              >
                <Link href={"/dashboard/master/lokasi"}>Lokasi</Link>
              </li>
            </ul>
          </li>

          {/* Data Operasional Link */}
          <li
            className={`rounded-sm  ${
              pathname === "/dashboard/operational" ? "bg-blue-500" : ""
            }`}
          >
            <Link
              href={"/dashboard/operational"}
              className="flex items-center gap-2 px-4 py-3 hover:bg-slate-100"
            >
              <GoGear size={30} />
              Data Operasional
            </Link>
          </li>

          <li
            className={`rounded-lg ${
              pathname === "/dashboard/reports" ? "bg-blue-500" : ""
            }`}
          >
            <Link
              href={"/dashboard/reports"}
              className="flex items-center gap-2 px-4 py-3 hover:bg-slate-100"
            >
              <HiDocumentReport size={32} />
              Data Laporan
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
