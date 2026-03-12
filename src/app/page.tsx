import type { Metadata } from "next";
import FigmaHomePage from "../components/FigmaHomePage";

export const metadata: Metadata = {
  title: "Ginecologista e Obstetra em Goiânia | Dr. Jony Barbosa",
  description:
    "Ginecologista e obstetra em Goiânia com foco em atendimento particular. Pré-natal, rotina ginecológica, exames e cuidado individualizado com Dr. Jony Barbosa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ginecologista e Obstetra em Goiânia | Dr. Jony Barbosa",
    description:
      "Ginecologista e obstetra em Goiânia com foco em atendimento particular. Pré-natal, rotina ginecológica, exames e cuidado individualizado com Dr. Jony Barbosa.",
    url: "/",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/dr-jony-profile.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Jony Barbosa - Ginecologista e Obstetra em Goiânia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ginecologista e Obstetra em Goiânia | Dr. Jony Barbosa",
    description:
      "Ginecologista e obstetra em Goiânia com foco em atendimento particular.",
    images: ["/dr-jony-profile.webp"],
  },
};

export default function HomePage() {
  return <FigmaHomePage />;
}
