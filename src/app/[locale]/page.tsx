import { Main } from "@/components";
import type { Language } from "@/types";
import { use } from "react";

export default function Index({ params }: { params: Promise<{ locale: Language }> }) {
  const { locale } = use(params);
  return <Main locale={locale} />;
}
