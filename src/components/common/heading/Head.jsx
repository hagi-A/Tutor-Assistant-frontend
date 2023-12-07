import React, { useState } from "react";
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { Link } from "react-router-dom";
import userProfile from "../../../images/userProfile.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../LanguageSelector";
import { FaComment } from "react-icons/fa";
import ChatPage from '../../chatPage/ChatPage'
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../../../utils/toastUtils";
import { useTutorContext } from "../../../hooks/useTutorContext";

const Head = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { tutor } = useTutorContext();
  const { t } = useTranslation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen(true);
  };

  const handleClick = () => {
    showToast("Logged out", "info");
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
                  <>
                    <button onClick={handleChatClick}>
                      <FaComment />
                    </button>
                    {isChatOpen && <ChatPage />}
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                  </>
                ) : (
                  <img
                    src={userProfile}
                    alt={user.name}
                    className="w-12 h-12 rounded-full mr-4 bg-gray-300 text-gray-600 flex items-center justify-center"
                  />
                )}
                <span className="text-white font-semibold">
                  {user.firstName}
                </span>
                <button
                  onClick={handleClick}
                  className="ml-9 text-light border border-solid border-white text-white px-4 py-2 rounded hover:border-indigo-500 hover:text-violet-500 transition duration-300 ease-in-out "
                >
                  {t("logoutButton")}
                </button>
              </div>
            )}
            {tutor && (
              <>
                <img
                  src={`http://localhost:9999/api/files/images/${tutor.tutor.selectedImages}`}
                  alt={tutor.tutor.firstName}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <span className="text-white font-semibold">
                  {tutor.tutor.firstName}
                </span>
                <button
                  onClick={handleClick}
                  className="ml-9 text-light border border-solid border-white text-white px-4 py-2 rounded hover:border-indigo-500 hover:text-violet-500 transition duration-300 ease-in-out "
                >
                  {t("logoutButton")}
                </button>
              </>
            )}
            {!user && !tutor && (
              <Link
                to="/login"
                className="ml-9 text-light border border-solid border-white text-white px-4 py-2 rounded hover:border-indigo-500 hover:text-violet-500 transition duration-300 ease-in-out "
              >
                Login
              </Link>
            )}
            <LanguageSelector />
          </nav>
        </div>
      </section>
    </>
  );
};

export default Head;
