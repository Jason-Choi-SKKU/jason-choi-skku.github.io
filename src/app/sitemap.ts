export default function sitemap() {
  return [
    {
      url: "https://www.jiwnchoi.me/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        ko: "https://www.jiwnchoi.me/ko",
        en: "https://www.jiwnchoi.me",
      },
    },
  ];
}
