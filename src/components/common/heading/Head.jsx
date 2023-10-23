import React from "react";
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import userProfile from "../../../images/userProfile.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../LanguageSelector";

const Head = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { t } = useTranslation();

  const handleClick = () => {
    logout();
  };
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>TUTOR ASSISTANCE</h1>
            <span>ONLINE TUTORING & PORTAL</span>
          </div>
          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
          <nav>
            {user && (
              <div className="flex items-center ml-9">
                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                ) : (
                  <img
                    src={userProfile}
                    alt={user.name}
                    className="w-12 h-12 rounded-full mr-4 bg-gray-300 text-gray-600 flex items-center justify-center"
                  />
                )}
                <span className="text-white font-semibold">
                  {user.username}
                </span>
                <button
                  onClick={handleClick}
                  className="ml-9 text-light border border-solid border-white text-white px-4 py-2 rounded hover:border-indigo-500 hover:text-violet-500 transition duration-300 ease-in-out "
                >
                  {t("logoutButton")}
                </button>
              </div>
            )}
            {!user && (
              <div className="flex items-center ml-9">
                <Link
                  to="/login"
                  className="ml-9 text-light border border-solid border-white text-white px-4 py-2 rounded hover:border-indigo-500 hover:text-violet-500 transition duration-300 ease-in-out "
                >
                  Login
                </Link>
              </div>
            )}
            <LanguageSelector />
          </nav>
        </div>
      </section>
    </>
  );
};

export default Head;
