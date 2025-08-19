"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaDatabase } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { HiDocumentReport } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";

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
              className={`absolute w-full min-w-max border border-slate-200 rounded-lg px-2 py-2 bg-white top-14 left-0 shadow-lg z-10 ${
                isDropdownOpen == 1 ? "block" : "hidden"
              }`}
            >
              <li
                className={`py-2 px-3 hover:text-blue-500 hover:bg-slate-200 rounded-md ${
                  pathname === "/dashboard/master/staff" ? "text-blue-500" : ""
                }`}
              >
                <Link href={"/dashboard/master/staff"}>Staff</Link>
              </li>
              <li
                className={`py-2 px-3 hover:text-blue-500 hover:bg-slate-200 rounded-md ${
                  pathname === "/dashboard/master/alat" ? "text-blue-500" : ""
                }`}
              >
                <Link href={"/dashboard/master/alat"}>Alat</Link>
              </li>
              <li
                className={`py-2 px-3 hover:text-blue-500 hover:bg-slate-200 rounded-md ${
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
              className="flex items-center gap-2 px-4 py-3 hover:bg-slate-100 cursor-pointer rounded-sm"
            >
              <GoGear size={30} />
              Data Operasional
              <IoIosArrowDown />
            </button>

            <ul
              className={`absolute w-full min-w-max border border-slate-200 rounded-lg px-2 py-2 bg-white top-15 left-0 shadow-lg z-10 ${
                isDropdownOpen == 2 ? "block" : "hidden"
              }`}
            >
              <li
                className={`py-2 px-3 hover:text-blue-500 hover:bg-slate-200 rounded-md ${
                  pathname === "/dashboard/operasional/alat"
                    ? "text-blue-500"
                    : ""
                }`}
              >
                <Link href={"/dashboard/operasional/alat"}>Alat Aktif</Link>
              </li>
              <li
                className={`py-2 px-3 hover:text-blue-500 hover:bg-slate-200 rounded-md ${
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

export default BottomNavBar;
