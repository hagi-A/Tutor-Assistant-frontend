import React from "react";
import "./hero.css";
import Header from "../../common/heading/Header";
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <section className="hero py-4 md:px-24 px-4" id="hero">
        <div className="container flex md:flex-row flex-col gap-5 pt-20">
          <div className="row flex-1 mt-0">
            <h1
              className=" text-5xl font-semibold font-sans tracking-wide md:leading-tight leading-snug"
            >
              {t("heroh1")}
            </h1>
            <span className="text-slate-200 md:text-5xl font-light font-sans text-5xl tracking-wide md:leading-tight leading-snug">{t("heroh2")}</span>
            <p className="text-purple-300 text-xl font-sans  md:w-2/3 md:py-4 py-2 leading-relaxed">
               {t("heroh3")}
            </p>
            <br />
            <button
              className="bg-cyan-500 text-white rounded-full shadow-sm shadow-cyan-700 font-semibold md:text-sm text-xs tracking-wide md:px-9 px-7 py-3"
            >
              {t("heroBtn1")}
            </button>
            <Link to={"/login"}
              className=" ml-4 cursor-pointer font-sans border border-cyan-500 text-white bg-transparent rounded-full font-semibold md:text-sm text-md tracking-wide md:px-9 px-7 py-3"
            >
              {t("heroBtn2")}
            </Link>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Hero;
{
  /* <Title subtitle='WELCOME TO TUTOR ASSISTANCE' title='"EMPOWERING LEARNING BEYOND THE CLASSROOM"'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus dolorum pariatur, repellat aperiam sequi eos magni facere sunt, 
                distinctio sapiente quasi fugiat illum quia nulla laborum doloremque, expedita nam.</p>
                <div className='button'> */
}
{
  /* <button className='primary-btn'>GET STARTED NOW <FaArrowRight /></button>
                  <button>Find a Tutor NOW <FaArrowRight /></button> */
}
