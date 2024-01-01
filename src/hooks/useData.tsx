import { useLayoutEffect, useState } from "react";
import { useLanguage } from "./useLanguage";

export function useData<T>(i18ndata: I18nData) {
  const lang = useLanguage();
  const [data, setData] = useState<T>(i18ndata[lang]);
  useLayoutEffect(() => {
    if (i18ndata[lang]) {
      setData(i18ndata[lang]);
    } else {
      setData(i18ndata.en);
    }
  }, [i18ndata, lang]);
  return data;
}
