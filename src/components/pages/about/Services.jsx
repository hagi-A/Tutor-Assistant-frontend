import React from "react";
import { FaUserShield, FaUserTie } from "react-icons/fa";
import { GiProgression, GiBookshelf } from "react-icons/gi"
import { MdQuiz, MdPayment } from "react-icons/md"
import { BsPersonVideo } from "react-icons/bs"
import { AiOutlineSchedule } from "react-icons/ai"
import { useTranslation } from "react-i18next";


const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <FaUserShield />,
      title: t("PersonalizedLearning"),
      desc: t("PersonalizedLearningDefn"),
    },
    {
      icon: <FaUserTie />,
      title: t("hireService"),
      desc: t("hireDefn"),
    },
    {
      icon: <GiProgression />,
      title: t("Monitoringprogress"),
      desc: t("MonitoringprogressDefn"),
    },
    {
      icon: <MdQuiz />,
      title: t("QuizzesAndAssessments"),
      desc:t("QuizzesAndAssessmentsDefn"),
    },
    {
      icon: <BsPersonVideo />,
      title: t("VideoSessions"),
      desc: t("VideoSessionsDefn"),
    },
    {
      icon: <AiOutlineSchedule />,
      title: t("FlexibleScheduling"),
      desc: t("FlexibleSchedulingDefn"),
    },
    {
      icon: <GiBookshelf />,
      title: t("Resources"),
      desc: t("ResourcesDefn"),
    },
    {
      icon: <MdPayment />,
      title: t("paymentSystem"),
      desc: t("paymentSystemDefn"),
    },
  ];

  return (
    <>
      <div className="mt-16 max-w-full md:py:[80] py-5 mx-auto font-sans">
        <h1 className="text-4xl text-center font-sans text-slate-100">Our Services</h1>
      </div>
      <div className="bg-slate-200 max-w-full mx-auto py-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-4  gap-4  p-4 text-center text-cyan-700">
          {services.map((service) => (
            <div className=" p-3 border border-cyan-900 shadow-xl">
              <div key={service.title}>
                <div className="text-3xl  flex justify-center text-teal-600 animate-bounce">
                  {service.icon}
                </div>
                <h3 className="text-2xl text-black py-2">{service.title}</h3>
                <p className="text-gray-500">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
