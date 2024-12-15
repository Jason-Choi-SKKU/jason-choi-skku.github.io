import type { FlexProps } from "@chakra-ui/react";
import type { MDXContent } from "mdx/types";
import type { StaticImageData } from "next/image";

export type CareerType = {
  title: string;
  role: string;
  date: string;
  url?: string;
  location?: string;
  description?: string;
};

export type PubType = {
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

export type EntityType = CareerType | PubType;

export type AuthorType = {
  name: string;
  url?: string;
};

export type AboutType = {
  name: string;
  description: string;
  pageTitle: string;
  pageDescription: string;
  Bio: MDXContent;
  profileImage: StaticImageData;
};

export type Language = "en" | "ko";

export type I18nData<T> = Partial<Record<Language, T>> & {
  en: T;
};

export type NewsType = {
  date: string;
  description: string;
};

export type ProjectType = {
  title: string;
  description: string;
  teaser: StaticImageData;
  content: MDXContent;
  selected: boolean;
  type: "research" | "project";
  abbr: string;
  date?: string;
};

export type FlexWithLanguageProps = {
  locale: Language;
} & FlexProps;
