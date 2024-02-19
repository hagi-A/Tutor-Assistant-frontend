import React, { useState , useEffect } from "react";
import "../findtutor/findtutor.css";
import Header from "../../common/heading/Header";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import classNames from "classnames";
// import Title from "../../../common/title/Title";
// import { FaArrowRight } from "react-icons/fa";
// import AvailableTutors from "./AvailableTutors";
// import FindTutorNote from "./FindTutorNote.";
// import MultiStepForm from "../tutor/tutorRegister/MultiStepForm";

const BecomeTutor = () => {
  const steps = [
    {
      title: "Create a Profile",
      description:
        "Get started by registering on our platform and creating your tutor profile.",
    },
    {
      title: "Screening Process",
      description:
        "Undergo a screening process to ensure your qualifications meet our standards.",
    },
    {
      title: "Apply for Hiring Requests",
      description:
        "Once approved, you can start applying for tutoring requests.",
    },
    {
      title: "Tutoring Sessions",
      description:
        "Once hired, conduct tutoring sessions with students and help them succeed.",
    },
  ];
  // const [showSteps, setShowSteps] = useState(false);
  // const [showForm, setShowForm] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check for mobile view on initial render and when the window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {/* <Back/> */}

      <section className="bg-img bg-cover bg-fixed min-h-screen bg-no-repeat ">
        <Header />
        <section className="bg-cover bg-fixed  top-0 left-0 z-0 w-full h-screen pt-20 pr-50 text-white">
          <div className="container">
            <div>
              <Link
                to="/tutorRegistration"
                className=" ml-4 cursor-pointer font-sans border border-slate-300 text-white bg-transparent rounded-full font-light text-2xl md:text-sm  md:px-9 px-7 py-3"
              >
                <button >
                  Become a Tutor
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <div className="mt-9">
        {/* <FindTutorNote />
        <AvailableTutors /> */}
      </div>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-4">
            How it Works
          </h2>

          <div className="flex flex-col p-4 items-center justify-center md:flex-row md:justify-between transition duration-1000 ease-in-out">
            {steps.map((step, index) => (
              <>
                <div key={index} className="mb-8 sm:mb-0 p-6">
                  <div className="bg-blue-800 w-64 h-64 m-5 rounded-lg relative">
                    {/* <div className="w-1/2 h-full bg-blue-800 rounded-full absolute top-0 left-0"></div> */}
                    <div className="w-full h-full border-l-6 border-cyan-800 bg-slate-300 p-6 relative z-10 rounded-lg ">
                      <div className="text-4xl w-10 ml-20 rounded-full bg-cyan-800 text-slate-200 mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="font-light mt-2">{step.description}</p>
                    </div>
                  </div>
                </div>
                <div className="text-cyan-800 text-xl ">
                  {isMobileView ? "👇" : "👉"}
                </div>
              </>
            ))}
            <div className="text-cyan-600 ml-4 text-center text-4xl flex sm:text-right ">
              Happy Tutoring
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomeTutor;
