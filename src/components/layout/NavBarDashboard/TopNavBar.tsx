"use client";
import { CurrentUserResponse } from "@/lib/type/user.type";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiLogout, CiSettings } from "react-icons/ci";

const TopNavBar = () => {
  const [profileState, setProfileState] = useState(false);
  const [user, setUser] = useState<CurrentUserResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/user", {
        method: "GET",
      });

      const result = await response.json();
      setUser(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <section className="flex justify-between container mx-auto items-center py-2 px-5 ">
        <section>
          <Link
            href={"/dashboard"}
            className="font-semibold text-2xl text-black"
          >
            Ignisafe
          </Link>
        </section>
        <section>
          <section className="flex items-center gap-3 relative">
            <section className="text-end text-sm font-thin">
              <p>Loading</p>
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
                  <p className="font-semibold">Loading</p>
                  <p className="font-thin">Loading</p>
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
            <p>{user?.nama}</p>
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
            className={`absolute text-black right-5 top-12 border-slate-200 border rounded-lg transition-all duration-500 ease-in bg-white p-3 z-50 ${
              profileState ? "" : "hidden"
            }`}
          >
            <ul>
              <li className="text-start text-sm pb-2">
                <p className="font-semibold">{user?.nama}</p>
                <p className="font-thin">{user?.role}</p>
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

export default TopNavBar;
