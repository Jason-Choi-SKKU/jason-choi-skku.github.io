import { useLayoutEffect, useState } from "react";
import { useLanguage } from "./useLanguage";

export function useData<T>(i18ndata: I18nData) {
  const { language } = useLanguage();
  const [data, setData] = useState<T>(i18ndata[language]);
  useLayoutEffect(() => {
    if (i18ndata[language]) {
      setData(i18ndata[language]);
    } else {
      setData(i18ndata.en);
    }
  }, [i18ndata, language]);
  return data;
}
