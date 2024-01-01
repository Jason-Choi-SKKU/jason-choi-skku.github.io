import { useState, useLayoutEffect } from "react";

export function useLanguage() {
  const [language, _setLanguage] = useState<Language>("en");
  const setLanguage = (lang: Language) => {
    localStorage.setItem("language", lang);
    _setLanguage(lang);
  };

  useLayoutEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage as Language);
    } else {
      const navigatorLanguage = navigator.language.split("-")[0] as Language;
      setLanguage(navigatorLanguage);
    }
  }, []);

  return { language, setLanguage };
}
