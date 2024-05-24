type CareerType = {
  title: string;
  role: string;
  date: string;
  url?: string;
  location?: string;
  description?: string;
};

type PubType = {
  abbr: string;
  title: string;
  authorNames: string[];
  venue: string[];
  pdfLink?: string;
  githubLink?: string;
  webDemoLink?: string;
  videoDemoLink?: string;
  talkLink?: string;
};

type MDXContent = import("mdx/types").MDXContent;

type StaticImageData = import("next/image").StaticImageData;

type EntityType = CareerType | PubType;

type AuthorType = {
  name: string;
  url?: string;
};

type AboutType = {
  name: string;
  description: string;
  pageTitle: string;
  pageDescription: string;
  Bio: MDXContent;
  profileImage: StaticImageData;
};

type Language = "en" | "ko";

type I18nData = {
  [key in Language]?: any;
} & {
  en: any;
};

type NewsType = {
  date: string;
  description: string;
};

type ProjectType = {
  title: string;
  description: string;
  teaser: StaticImageData;
  content: MDXContent;
  selected: boolean;
  type: "research" | "project";
  abbr: string;
  date?: string;
};

type FlexWithLanguageProps = {
  locale: Language;
} & import("@chakra-ui/react").FlexProps;
