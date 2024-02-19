import React from "react";
import waitPage from "../../../images/waitPage.jpg"

const WaitPage = () => {
  return (
    <>
      <div className="flex justify-center items-center text-4xl text-cyan-900 bg-slate-200 shadow-lg h-72">
        <p>
          Dear Tutor, please wait while our team confirms and accepts your
          application.
        </p>
      </div>
      <div className="flex justify-center items-center bg-slate-100">
        <img
          src={waitPage}
          alt="Placeholder"
          className="w-[400px] h-[400px] rounded-full"
        />
      </div>
    </>
  );
};

export default WaitPage;
