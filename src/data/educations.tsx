const educations_en: CareerType[] = [
  {
    title: "Sungkyunkwan University",
    role: "Master of Engineering in Computer Science and Engineering",
    location: "Suwon, South Korea",
    date: "Sep. 2023 - Present",
    description: "GPA: 4.3/4.5",
    url: "https://cse.skku.edu",
  },
  {
    title: "Sungkyunkwan University",
    role: "Bachelor of Science in Computer Science and Education",
    location: "Seoul, South Korea",
    date: "Mar. 2019 - Aug. 2023",
    description: "GPA: 3.89/4.5",
    url: "https://comedu.skku.edu",
  },
  {
    title: "Kyunggi High School",
    role: "Graduated",
    location: "Seoul, South Korea",
    date: "Mar. 2015 - Feb. 2018",
    url: "https://kyunggi.sen.hs.kr",
  },
];

const educations_ko: CareerType[] = [
  {
    title: "성균관대학교",
    role: "소프트웨어학과 석사과정",
    location: "수원, 대한민국",
    date: "2023. 9 - Present",
    description: "학점: 4.3/4.5",
    url: "https://cse.skku.edu",
  },
  {
    title: "성균관대학교",
    role: "컴퓨터교육과 이학사",
    location: "서울, 대한민국",
    date: "2019. 3 - 2023. 8",
    description: "학점: 3.89/4.5",
    url: "https://comedu.skku.edu",
  },
  {
    title: "경기고등학교",
    role: "졸업",
    location: "서울, 대한민국",
    date: "2015. 3 - 2018. 2",
    url: "https://kyunggi.sen.hs.kr",
  },
];

export const educations: I18nData = {
  en: educations_en,
  ko: educations_ko,
};
