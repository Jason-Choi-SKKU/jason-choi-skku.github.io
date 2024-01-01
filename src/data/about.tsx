import BioEn from "@/data/bio/en.mdx";
import BioKo from "@/data/bio/ko.mdx";

const en: AboutType = {
  name: "Jiwon Choi",
  description: "Jason, 최지원",
  pageTitle: "Jiwon Jason Choi",
  pageDescription: "Jason's Personal Page",
  Bio: BioEn,
};

const ko: AboutType = {
  name: "최지원",
  pageTitle: "최지원",
  description: "Jiwon Jason Choi",
  pageDescription: "Jason's Personal Page",
  Bio: BioKo,
};

export const about = { en, ko };
