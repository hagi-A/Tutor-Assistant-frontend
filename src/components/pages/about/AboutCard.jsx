import React from "react";
import Title from "../../common/title/Title";
import { homeAbout } from "../../../Dummydata";
import Awrapper from "./Awrapper";
import "./about.css";
import AboutImage from "../../../images/AboutImage.jpg";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import AboutInfo from "./AboutInfo";
import Services from "./Services";

const AboutCard = () => {
  const { t } = useTranslation();
  const Info = [
    {
      icon: <FaRegThumbsUp />,
      title: t("convenience"),
      des: t("convenienceDefn"),
    },
    {
      icon: <MdOutlineSecurity />,
      title: t("security"),
      des: t("securityDefn"),
    },
    {
      icon: <BiSupport />,
      title: t("support"),
      des: t("supportDefn"),
    },
  ];
 
  return (
    <>
      <section className="aboutHome" id="about">
        <div className="container flexSB">
          {/* <div className='left row'>
            <img src={AboutImage} alt='' />
          </div> */}
          <div classname="">
            <div className="bg-slate-300 shadow-2xl sm:mb-9 flex md:flex-row flex-col md:-mt-48 gap-6 md:p-14 p-10 mt-5 rounded-md">
              {Info.map((info, i) => (
                <div
                  key={i}
                  className={` relative ${
                    i !== Info.length - 1 ? "border-r-2 border-cyan-700 pr-6" : ""
                  }`}
                >
                  <div className="text-5xl flex  justify-center">
                    {info.icon}{" "}
                  </div>
                  <h1 className="font-semibold text-2xl flex justify-center my-3">
                    {info.title}
                  </h1>
                  <p className="text-gray-600 font-light text-lg  leading-relaxed">
                    {info.des}
                  </p>
                  <button className="text-rose-600 font-medium text-sm my-1">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-cyan-800 max-w-full max-h-full ">
          <Awrapper />
        </div>
        {/* <AboutInfo /> */}
        <Services />
      </section>
    </>
  );
};

export default AboutCard;
