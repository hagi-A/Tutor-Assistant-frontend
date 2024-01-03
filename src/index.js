import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { TutorContextProvider } from "./context/TutorContext";
import ChatProvider from "./context/ChatProvider";
import { ChakraProvider } from "@chakra-ui/react";
// Import your translation files
import enTranslation from "./locals/en.json";
import amhTranslation from "./locals/amh.json";
import store from "./redux/store";
import { Provider } from "react-redux";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      amh: {
        translation: amhTranslation,
      },
    },
    fallbackLng: "en", // Default language if the user's preferred language is not available
    interpolation: {
      escapeValue: false, // React already escapes content by default
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <ChatProvider> */}
      <AuthContextProvider>
        <TutorContextProvider>
          <App />
        </TutorContextProvider>
      </AuthContextProvider>
      {/* </ChatProvider> */}
    </React.StrictMode>
  </Provider>
);
