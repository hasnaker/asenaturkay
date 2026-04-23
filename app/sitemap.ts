import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://asenaturkay.com";
  const routes = [
    "",
    "/hakkimda",
    "/bireysel-danismanlik",
    "/bireysel-danismanlik/ergen-genc-yetiskin",
    "/bireysel-danismanlik/yetiskin-psikoterapi",
    "/bireysel-danismanlik/aile-cift",
    "/bireysel-danismanlik/ebeveyn",
    "/kurumsal",
    "/egitimler",
    "/blog",
    "/iletisim",
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
