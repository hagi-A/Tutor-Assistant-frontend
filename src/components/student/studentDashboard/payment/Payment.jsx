import React from "react";
import ChapaPayment from "../../../payment/ChapaPayment";
import Sidebar from "../../sidebar/Sidebar";
import Dashboard from "../../sidebar/Dashboard";
import Breadcrumb from "../../../../utils/Breadcrumb";

const Payment = () => {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%]  border h-[100vh] overflow-scroll">
        <Dashboard />
        <div className=" pt-6 px-6 min-h-screen bg-slate-200 ">
          <div className="flex justify-between">
            <Breadcrumb pageName="Payment" />
          </div>
          <ChapaPayment />
        </div>
      </div>
    </div>
  );
};

export default Payment;
