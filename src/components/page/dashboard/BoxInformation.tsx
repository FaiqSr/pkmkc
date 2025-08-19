"use client";
import Loading from "@/components/ui/Loading";
import { useState, useEffect } from "react";
import { CiGps, CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";

const BoxInformation = () => {
  const [time, setTime] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) return <Skeleton />;

  const showTime =
    time.getHours().toString().padStart(2, "0") +
    ":" +
    time.getMinutes().toString().padStart(2, "0") +
    ":" +
    time.getSeconds().toString().padStart(2, "0");

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <section className="rounded-xl p-3 py-5 bg-white border-slate-200 border h-30 flex justify-between">
        <section>
          <GiDeliveryDrone
            size={50}
            className="bg-slate-100 rounded-lg p-2 ml-2"
          />
        </section>
        <section className="text-end">
          <p className="text-sm font-semibold text-slate-600">Jumlah Drone</p>
          <p className="pt-1 text-5xl font-semibold">10</p>
        </section>
      </section>
      <section className="rounded-xl p-3 py-5 pr-5 bg-white border-slate-200 border h-30 flex justify-between">
        <section>
          <CiGps size={50} className="bg-slate-100 rounded-lg p-2 ml-2" />
        </section>
        <section className="text-end">
          <p className="text-sm font-semibold text-slate-600">Jumlah Lokasi</p>
          <p className="pt-1 text-5xl font-semibold">10</p>
        </section>
      </section>
      <section className="rounded-xl p-3 py-5 pr-5 bg-white border-slate-200 border h-30 flex justify-between">
        <section>
          <FaFire size={50} className="bg-slate-100 rounded-lg p-2 ml-2" />
        </section>
        <section className="text-end">
          <p className="text-sm font-semibold text-slate-600">Jumlah Drone</p>
          <p className="pt-1 text-5xl font-semibold">10</p>
        </section>
      </section>
      <section className="rounded-xl p-3 py-5 pr-5 bg-white border-slate-200 border h-30 flex justify-between">
        <section>
          <CiTimer size={50} className="bg-slate-100 rounded-lg p-2 ml-2" />
        </section>
        <section className="text-end">
          <p className="text-sm font-semibold text-slate-600">Waktu Saat Ini</p>
          <p className="pt-5 text-3xl font-semibold">{showTime}</p>
        </section>
      </section>
    </section>
  );
};

export default BoxInformation;

const Skeleton = (): React.ReactNode => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-5">
      <section className="rounded-xl p-3 py-5 bg-white border-slate-200 border h-30 flex justify-center items-center">
        <Loading />
      </section>
      <section className="rounded-xl p-3 py-5 bg-white border-slate-200 border h-45 flex justify-center items-center">
        <Loading />
      </section>
      <section className="rounded-xl p-3 py-5 bg-white border-slate-200 border h-45 flex justify-center items-center">
        <Loading />
      </section>
      <section className="rounded-xl p-3 py-5 bg-white border-slate-200 border h-45 flex justify-center items-center">
        <Loading />
      </section>
    </section>
  );
};
