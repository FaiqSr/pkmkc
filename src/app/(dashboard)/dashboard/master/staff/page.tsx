import ModalButton from "@/components/page/dashboard/master/staff/ModalButton";
import TableStaff from "@/components/page/dashboard/master/staff/TableStaff";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Master - Staff",
};

const page = () => {
  return (
    <>
      <section className="container mx-auto px-5">
        <section>
          <h1 className="text-2xl font-bold">Master - Staff</h1>
        </section>
        <section className="py-5">
          <ModalButton />
        </section>
        <TableStaff />
      </section>
    </>
  );
};

export default page;
