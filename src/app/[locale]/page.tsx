import { Main } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jiwon Jason Choi 최지원 ",
  description: "My Personal Page",
};

export default function Index({
  params: { locale },
}: {
  params: { locale: Language };
}) {
  return <Main locale={locale} />;
}
