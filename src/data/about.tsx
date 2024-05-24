import { BioEn, BioKo, ProfileImage } from "@/data/bio";

const en: AboutType = {
  name: "Jiwon Choi",
  description: "Jason, 최지원",
  pageTitle: "Jiwon Jason Choi",
  pageDescription: "Jason's Personal Page",
  Bio: BioEn,
  profileImage: ProfileImage,
};

const ko: AboutType = {
  name: "최지원",
  pageTitle: "최지원",
  description: "Jiwon Jason Choi",
  pageDescription: "Jason's Personal Page",
  Bio: BioKo,
  profileImage: ProfileImage,
};

export const about = { en, ko };
