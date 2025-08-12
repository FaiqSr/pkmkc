"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaDatabase } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { CiLogout, CiSettings } from "react-icons/ci";

const NavBarDashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

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
  const [profileState, setProfileState] = useState(false);
  return (
    <section className="flex justify-between container mx-auto items-center py-2 px-5 ">
      <section>
        <Link href={"/dashboard"} className="font-semibold text-2xl text-black">
          Ignisafe
        </Link>
      </section>
      <section>
        <section className="flex items-center gap-3 relative">
          <section className="text-end text-sm font-thin">
            <p>Lorem ipsum</p>
          </section>
          <button
            className="border-2 rounded-sm border-white text-white cursor-pointer"
            onClick={() => setProfileState(!profileState)}
          >
            <Image
              src={`/images/profile.png`}
              alt="avatar"
              width={30}
              height={30}
              className="object-cover rounded-sm h-full w-full"
            />
          </button>
          <nav
            className={`absolute text-black right-5 top-12 border-slate-200 border rounded-lg transition-all duration-500 ease-in bg-white p-3 ${
              profileState ? "" : "hidden"
            }`}
          >
            <ul>
              <li className="text-start text-sm pb-2">
                <p className="font-semibold">Raden Tuhibagus Ahmad Sazira</p>
                <p className="font-thin">Admin</p>
              </li>
              <hr />
              <li>
                <ul className="p-2 flex flex-col gap-2">
                  <li className=" rounded-sm hover:bg-slate-200">
                    <Link
                      href={"/"}
                      className="flex gap-2 py-2 pl-1 pr-30 items-center text-sm"
                    >
                      <CiSettings size={25} />
                      Settings
                    </Link>
                  </li>

                  <li className=" rounded-sm hover:bg-slate-200">
                    <Link
                      href={"/"}
                      className="flex gap-2 py-2 pl-1 pr-30 items-center text-sm"
                    >
                      <CiLogout size={25} />
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </section>
  );
};

const BottomNavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(0);
  const pathname = usePathname();

  const isMasterDataActive = pathname.startsWith("/dashboard/master");
  const isOperasionalActive = pathname.startsWith("/dashboard/operasional");

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
            onClick={() => setDropdownOpen(isDropdownOpen == 1 ? 0 : 1)}
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
                isDropdownOpen == 1 ? "block" : "hidden"
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
            className={`relative ${isOperasionalActive ? "bg-blue-500" : ""}`}
          >
            <button
              onClick={() => setDropdownOpen(isDropdownOpen == 2 ? 0 : 2)}
              className="flex items-center gap-2 px-4 py-3 hover:bg-slate-100"
            >
              <GoGear size={30} />
              Data Operasional
              <IoIosArrowDown />
            </button>

            <ul
              className={`absolute w-full min-w-max border rounded-lg px-2 py-2 bg-white top-14 left-0 shadow-lg z-10 ${
                isDropdownOpen == 2 ? "block" : "hidden"
              }`}
            >
              <li
                className={`py-2 px-3 hover:text-blue-500 rounded-md ${
                  pathname === "/dashboard/operasional/alat"
                    ? "text-blue-500"
                    : ""
                }`}
              >
                <Link href={"/dashboard/operasional/alat"}>Alat Aktif</Link>
              </li>
              <li
                className={`py-2 px-3 hover:text-blue-500 rounded-md ${
                  pathname === "/dashboard/operasional/monitor"
                    ? "text-blue-500"
                    : ""
                }`}
              >
                <Link href={"/dashboard/operasional/monitor"}>Monitoring</Link>
              </li>
            </ul>
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
