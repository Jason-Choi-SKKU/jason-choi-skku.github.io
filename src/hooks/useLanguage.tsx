import { useState, useLayoutEffect } from "react";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en");

  useLayoutEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage as Language);
    } else {
      const navigatorLanguage = navigator.language.split("-")[0] as Language;
      setLanguage(navigatorLanguage);
      localStorage.setItem("language", navigatorLanguage);
    }
  }, []);

  return language;
}
