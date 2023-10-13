import React from "react";

import Counter from "./Counter";
import './counter.css'
import { useTranslation } from "react-i18next";


const Awrapper = () => {
  const { t } = useTranslation();

  return (
           <>
              <div className="countup_contain m-4">
                <p className="headerText one font-sans mb-3 text-teal-500">{t("progressFig")}</p>
                <div style={{ width: "10rem" }} className="divider" />
                <div className="counter-container mt-1 ">
                  <Counter value={7900} text={t("qualifiedTutFig")} />
                  <Counter value={5800} text={t("studentsFig")} />
                  <Counter value={30} text={t("courseFig")} />
                </div>
              </div>
           </>
  );
};

export default Awrapper;
