import { about } from "@/data/about";

export async function generateMetadata({ params }: any) {
  const { locale } = params;
  return {
    title: about[locale as Language].pageTitle,
    description: about[locale as Language].pageDescription,
  };
}
