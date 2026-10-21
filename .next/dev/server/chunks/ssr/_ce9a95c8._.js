module.exports = [
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    metadataBase: new URL('https://drjonybarbosa.com.br'),
    title: 'Dr. Jony Barbosa | Ginecologista e Obstetra em Goiânia',
    description: 'Site oficial do Dr. Jony Barbosa, médico ginecologista e obstetra em Goiânia. Informações sobre consultas, pré-natal, ultrassonografia e acompanhamento ginecológico.',
    alternates: {
        canonical: '/'
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
                alt: 'Dr. Jony Barbosa - Ginecologista e Obstetra em Goiânia'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dr. Jony Barbosa | Ginecologista e Obstetra em Goiânia',
        description: 'Site oficial do Dr. Jony Barbosa, médico ginecologista e obstetra em Goiânia. Informações sobre consultas, pré-natal, ultrassonografia e acompanhamento ginecológico.',
        images: [
            '/dr-jony-profile.webp'
        ]
    }
};
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
        addressCountry: 'BR'
    },
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: '+55-62-9950-4788',
            contactType: 'appointments',
            areaServed: 'BR',
            availableLanguage: [
                'pt-BR'
            ]
        },
        {
            '@type': 'ContactPoint',
            telephone: '+55-62-99613-6640',
            contactType: 'customer service',
            areaServed: 'BR',
            availableLanguage: [
                'pt-BR'
            ]
        },
        {
            '@type': 'ContactPoint',
            telephone: '+55-62-3070-5555',
            contactType: 'customer service',
            areaServed: 'BR',
            availableLanguage: [
                'pt-BR'
            ]
        }
    ],
    availableService: [
        {
            '@type': 'MedicalSpecialty',
            name: 'Gynecology'
        },
        {
            '@type': 'MedicalSpecialty',
            name: 'Obstetrics'
        }
    ],
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
            ],
            opens: '07:00',
            closes: '18:00'
        }
    ],
    medicalSpecialty: [
        'Gynecology',
        'Obstetrics'
    ]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "pt-BR",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=EB+Garamond:wght@500;600&family=Inter:wght@400;700&family=Lato:wght@500&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@500;700&family=Questrial&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(physicianSchema)
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "bg-white text-slate-700 font-sans antialiased",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_ce9a95c8._.js.map