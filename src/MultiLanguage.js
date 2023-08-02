import React, { useEffect } from 'react'

import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import ten from './locales/en/transaltion.json'
import tde from './locales/de/transaltion.json'
import tes from './locales/fc/transaltion.json'
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: ten
      },
      de: {
        translation: tde
      },
      es: {
        translation: tes
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
  const changeLanguage=(l)=>{
    return ()=>{
        // alert("ok"+l)
   i18n.changeLanguage(l)
   localStorage.setItem("lang",l);
    }
  }

function MultiLanguage() {
  const { t } = useTranslation();
  useEffect(()=>{
   let currlanguage=localStorage.getItem('lang')
   i18n.changeLanguage(currlanguage)
},[])
  return <><h2>{t('welcome_to_react')}</h2>
  {/* <select >
    <option onClick={changeLanguage('en')}>English</option>
    <option onClick={changeLanguage('de')}>Dutch</option>
    <option onClick={changeLanguage('es')}>esperatno</option>
  </select> */}
  <button onClick={changeLanguage('en')}>English</button>
  <button onClick={changeLanguage('de')}>Dutch</button>
  <button onClick={changeLanguage('es')}>esperatno</button>
  </>;
}

// append app to dom


export default MultiLanguage
