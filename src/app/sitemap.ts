import type { MetadataRoute } from "next";
import { nobleNeighborhoods } from "../data/neighborhoods";
import { calculators } from "../data/calculators";
import { servicesExtended } from "../data/services-extended";

const siteUrl = "https://drjonybarbosa.com.br";
const lastModified = new Date();

const staticPages = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/sobre", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contato", changeFrequency: "monthly", priority: 0.8 },
  { path: "/especialidades", changeFrequency: "weekly", priority: 0.9 },
  { path: "/exames", changeFrequency: "weekly", priority: 0.9 },
  { path: "/servicos", changeFrequency: "weekly", priority: 0.9 },
  { path: "/calculadoras", changeFrequency: "weekly", priority: 0.85 },
  { path: "/localizacao", changeFrequency: "monthly", priority: 0.8 },
] as const;

type SitemapFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function toAbsoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

function createEntry(
  url: string,
  changeFrequency: SitemapFrequency,
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url,
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((page) =>
    createEntry(toAbsoluteUrl(page.path), page.changeFrequency, page.priority),
  );

  const serviceEntries = servicesExtended.map((service) =>
    createEntry(service.canonicalUrl, "monthly", 0.8),
  );

  const calculatorEntries = calculators.map((calculator) =>
    createEntry(calculator.canonicalUrl, "monthly", 0.75),
  );

  const neighborhoodEntries = nobleNeighborhoods.map((neighborhood) =>
    createEntry(
      toAbsoluteUrl(`/localizacao/${neighborhood.slug}`),
      "monthly",
      0.7,
    ),
  );

  return [
    ...staticEntries,
    ...serviceEntries,
    ...calculatorEntries,
    ...neighborhoodEntries,
  ];
}
