import type { Metadata } from 'next'
import '../styles/global.css'

export const metadata: Metadata = {
  title: 'Dr. Jony Barbosa | Ginecologista e Obstetra em Goiânia',
  description: 'Site oficial do Dr. Jony Barbosa, Ginecologista e Obstetra em Goiânia. Especialista em pré-natal, ultrassonografia e cirurgias ginecológicas.',
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. Jony Rodrigues Barbosa",
              "description": "Ginecologista e Obstetra em Goiânia",
              "url": "https://drjonybarbosa.com.br",
              "telephone": "+55-62-9950-4788",
              "email": "contato@drjonybarbosa.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua 3A, Policlínica Sao Luiz, 211",
                "addressLocality": "Goiânia",
                "addressRegion": "GO",
                "postalCode": "74075-090",
                "addressCountry": "BR"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "18:00"
                }
              ],
              "medicalSpecialty": ["Gynecology", "Obstetrics"]
            })
          }}
        />
      </head>
      <body className="bg-white text-slate-700 font-sans antialiased">{children}</body>
    </html>
  )
}
