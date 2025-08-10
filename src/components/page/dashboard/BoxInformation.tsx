"use client";
import React, { useState, useEffect } from "react";

const BoxInformation = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const showTime =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

  return (
    <section className="flex justify-center gap-5 flex-wrap mx-5">
      <section className="rounded-sm p-3 py-5 bg-blue-400 w-80 h-35">
        <p className="text-lg sm:text-xl font-bold">Jumlah Drone</p>
        <p className="pt-5 text-5xl font-semibold">10</p>
      </section>
      <section className="rounded-sm p-3 py-5 bg-red-400 w-80 h-35">
        <p className="text-lg sm:text-xl font-bold">Jumlah Lokasi</p>
        <p className="pt-5 text-5xl font-semibold">10</p>
      </section>
      <section className="rounded-sm p-3 py-5 bg-yellow-400 w-80 h-35">
        <p className="text-lg sm:text-xl font-bold">
          Jumlah Kebakaran Bulan Ini
        </p>
        <p className="pt-5 text-5xl font-semibold">10</p>
      </section>
      <section className="rounded-sm p-3 py-5 bg-green-400 w-80 h-35">
        <p className="text-lg sm:text-xl font-bold">Waktu</p>
        <p className="pt-5 text-5xl font-semibold">{showTime}</p>
      </section>
    </section>
  );
};

export default BoxInformation;
