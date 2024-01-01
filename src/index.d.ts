
type CareerType = {
  title: string;
  role: string;
  date: string;
  url?: string;
  location?: string;
  description?: string;
};

type PubType = {
  title: string;
  authorNames: string[];
  venue: string[];
  pdfLink?: string;
  githubLink?: string;
  webDemoLink?: string;
  videoDemoLink?: string;
  talkLink?: string;
}

type Bio = import('mdx/types').MDXContent

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
  Bio: Bio;
};

type Language = "en" | "ko"

type I18nData = {
  [key in Language]: any;
}