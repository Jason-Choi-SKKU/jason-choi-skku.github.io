type EntityType = {
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

type AuthorType = {
  name: string;
  url?: string;
};