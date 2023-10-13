import React from 'react'
import { useTranslation } from "react-i18next";


const AboutInfo = ({}) => {
  const { t } = useTranslation();

  return (
     <div className="antialiased bg-slate-100 text-slate-200">
       <h1 className="text-4xl text-cyan-800 flex justify-center sm:text-left">Tutor Assistance</h1>
         <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            <div
                className="absolute z-0 w-2 h-full bg-cyan-700 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
            ></div>
            <div className="relative z-10">
                <div className="timeline-container">
                    <div className="timeline-pointer" aria-hidden="true"></div>
                    <div className="bg-cyan-700 p-4 rounded-md shadow-md">
                        <p className="pt-1">
                            {t("info1")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <div className="timeline-container timeline-container-left">
                    <div
                        className="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div className="bg-cyan-700 p-4 rounded-md shadow-md">
                        <p className="pt-1">
                           {t("info2")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <div className="timeline-container">
                    <div className="timeline-pointer" aria-hidden="true"></div>
                    <div className="bg-cyan-700 p-4 rounded-md shadow-md">
                        <p className="pt-1">
                           {t("info3")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <div className="timeline-container timeline-container-left">
                    <div
                        className="timeline-pointer timeline-pointer-left"
                        aria-hidden="true"
                    ></div>
                    <div className="bg-cyan-700 p-4 rounded-md shadow-md">
                        <p className="pt-1">
                           {t("info4")}
                        </p>
                    </div>
                </div>
            </div>
        </div>

     </div>
     
  )
}

export default AboutInfo
// ${
//         alternative ? "md:flex-row-reverse" : "md:flex-row"
//       }