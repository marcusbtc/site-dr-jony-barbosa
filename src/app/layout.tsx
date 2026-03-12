import type { Metadata } from 'next'
import '../styles/global.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://drjonybarbosa.com.br'),
  title: 'Dr. Jony Barbosa | Ginecologista e Obstetra em Goiânia',
  description: 'Site oficial do Dr. Jony Barbosa, médico ginecologista e obstetra em Goiânia. Informações sobre consultas, pré-natal, ultrassonografia e acompanhamento ginecológico.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Jony Barbosa | Ginecologista e Obstetra em Goiânia',
    description: 'Site oficial do Dr. Jony Barbosa, médico ginecologista e obstetra em Goiânia. Informações sobre consultas, pré-natal, ultrassonografia e acompanhamento ginecológico.',
    type: 'website',
    url: '/',
    locale: 'pt_BR',
    images: [
      {
        url: '/dr-jony-profile.webp',
        width: 1200,
        height: 630,
        alt: 'Dr. Jony Barbosa - Ginecologista e Obstetra em Goiânia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jony Barbosa | Ginecologista e Obstetra em Goiânia',
    description: 'Site oficial do Dr. Jony Barbosa, médico ginecologista e obstetra em Goiânia. Informações sobre consultas, pré-natal, ultrassonografia e acompanhamento ginecológico.',
    images: ['/dr-jony-profile.webp'],
  },
}

const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Jony Rodrigues Barbosa',
  description: 'Médico ginecologista e obstetra em Goiânia',
  url: 'https://drjonybarbosa.com.br',
  image: 'https://drjonybarbosa.com.br/dr-jony-profile.webp',
  telephone: '+55-62-9950-4788',
  email: 'contato@drjonybarbosa.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua 3A, Policlínica Sao Luiz, 211',
    addressLocality: 'Goiânia',
    addressRegion: 'GO',
    postalCode: '74075-090',
    addressCountry: 'BR',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+55-62-9950-4788',
      contactType: 'appointments',
      areaServed: 'BR',
      availableLanguage: ['pt-BR'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+55-62-99613-6640',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: ['pt-BR'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+55-62-3070-5555',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: ['pt-BR'],
    },
  ],
  availableService: [
    {
      '@type': 'MedicalSpecialty',
      name: 'Gynecology',
    },
    {
      '@type': 'MedicalSpecialty',
      name: 'Obstetrics',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  medicalSpecialty: ['Gynecology', 'Obstetrics'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=EB+Garamond:wght@500;600&family=Inter:wght@400;700&family=Lato:wght@500&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@500;700&family=Questrial&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(physicianSchema)
          }}
        />
      </head>
      <body className="bg-white text-slate-700 font-sans antialiased">{children}</body>
    </html>
  )
}
