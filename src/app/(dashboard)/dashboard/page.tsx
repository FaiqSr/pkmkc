import BoxInformation from "@/components/page/dashboard/BoxInformation";
import TableStaff from "@/components/page/dashboard/master/staff/TableStaff";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-5">
      <BoxInformation />
      <section className="pt-5">
        <TableStaff />
      </section>
    </div>
  );
};

export default page;
