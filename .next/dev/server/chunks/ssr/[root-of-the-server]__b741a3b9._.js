module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Button = ({ children, variant = 'primary', fullWidth = false, className = '', href, ...props })=>{
    const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-center";
    const variants = {
        primary: "bg-[#004aad] text-white hover:bg-[#003d8f] hover:shadow-lg hover:shadow-[#004aad]/20",
        secondary: "bg-[#e6f0ff] text-[#004aad] hover:bg-[#cce0ff] hover:shadow-lg hover:shadow-[#004aad]/20",
        accent: "bg-[#25D366] text-white hover:bg-[#1ebe55]",
        outline: "bg-transparent border-2 border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white",
        ghost: "bg-transparent text-[#004aad] hover:bg-[#004aad]/10"
    };
    const widthStyle = fullWidth ? "w-full" : "";
    const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: combinedClasses,
            target: href.startsWith('http') ? '_blank' : undefined,
            rel: href.startsWith('http') ? 'noopener noreferrer' : undefined,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: combinedClasses,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Button;
}),
"[project]/src/components/MobileMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
function MobileMenu({ links }) {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                className: "lg:hidden text-primary",
                "aria-label": "Toggle mobile menu",
                "aria-expanded": isMenuOpen,
                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/src/components/MobileMenu.tsx",
                    lineNumber: 21,
                    columnNumber: 23
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/src/components/MobileMenu.tsx",
                    lineNumber: 21,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MobileMenu.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg py-4 px-6 flex flex-col gap-4 top-full left-0",
                children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link.href,
                        onClick: ()=>setIsMenuOpen(false),
                        className: "py-2 border-b border-slate-50",
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/src/components/MobileMenu.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/MobileMenu.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MobileMenu.tsx [app-ssr] (ecmascript)");
;
;
;
const navLinks = [
    {
        label: "Início",
        href: "/"
    },
    {
        label: "Sobre",
        href: "/sobre"
    },
    {
        label: "Especialidades",
        href: "/especialidades"
    },
    {
        label: "Exames",
        href: "/exames"
    },
    {
        label: "Serviços",
        href: "/servicos"
    },
    {
        label: "Contato",
        href: "/contato"
    }
];
const mobileLinks = [
    {
        label: "Início",
        href: "/"
    },
    {
        label: "Sobre",
        href: "/sobre"
    },
    {
        label: "Especialidades",
        href: "/especialidades"
    },
    {
        label: "Exames",
        href: "/exames"
    },
    {
        label: "Serviços",
        href: "/servicos"
    },
    {
        label: "Contato",
        href: "/contato"
    },
    {
        label: "📍 Setor Bueno",
        href: "/localizacao/ginecologista-setor-bueno-goiania"
    },
    {
        label: "📍 Setor Marista",
        href: "/localizacao/ginecologista-setor-marista-goiania"
    },
    {
        label: "📍 Setor Sul",
        href: "/localizacao/ginecologista-setor-sul-goiania"
    },
    {
        label: "📍 Setor Oeste",
        href: "/localizacao/ginecologista-setor-oeste-goiania"
    },
    {
        label: "📍 Alphaville Flamboyant",
        href: "/localizacao/ginecologista-alphaville-flamboyant-goiania"
    }
];
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 py-4 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-serif font-bold text-primary",
                        children: "Dr. Jony Barbosa"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden lg:flex items-center gap-8 font-medium text-sm uppercase tracking-wide text-slate-500",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "hover:text-secondary transition-colors",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-1 hover:text-secondary transition-colors uppercase py-2",
                                    children: [
                                        "Localização",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "transition-transform group-hover:rotate-180 duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m6 9 6 6 6-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 47,
                                                columnNumber: 262
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full right-0 lg:-left-4 mt-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-slate-100 shadow-xl rounded-xl flex flex-col overflow-hidden py-2 cursor-default",
                                        children: [
                                            {
                                                label: "Setor Bueno",
                                                href: "/localizacao/ginecologista-setor-bueno-goiania"
                                            },
                                            {
                                                label: "Setor Marista",
                                                href: "/localizacao/ginecologista-setor-marista-goiania"
                                            },
                                            {
                                                label: "Setor Sul",
                                                href: "/localizacao/ginecologista-setor-sul-goiania"
                                            },
                                            {
                                                label: "Setor Oeste",
                                                href: "/localizacao/ginecologista-setor-oeste-goiania"
                                            },
                                            {
                                                label: "Alphaville Flamboyant",
                                                href: "/localizacao/ginecologista-alphaville-flamboyant-goiania"
                                            }
                                        ].map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: loc.href,
                                                className: "px-5 py-3 hover:bg-slate-50 text-slate-600 hover:text-primary transition-colors text-sm font-medium normal-case flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        className: "text-secondary",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 59,
                                                                columnNumber: 226
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "10",
                                                                r: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Header.tsx",
                                                                lineNumber: 59,
                                                                columnNumber: 284
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    loc.label
                                                ]
                                            }, loc.href, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            variant: "primary",
                            className: "ml-4 !py-2.5 !px-6 text-sm font-bold shadow-md",
                            href: "https://wa.me/556299504788",
                            children: "Agendar Consulta"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    links: mobileLinks
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/src/components/HeroSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
;
;
const HeroSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl opacity-60 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-3xl opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:w-1/2 text-center lg:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100/80 text-primary text-sm font-bold tracking-wide uppercase backdrop-blur-sm border border-blue-200/50 animate-fade-in",
                                    children: "Ginecologia & Obstetrícia Humanizada"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.15] mb-8",
                                    children: [
                                        "Cuidado especializado para ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary italic",
                                            children: "todas as fases"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 21,
                                            columnNumber: 42
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " da sua saúde."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed",
                                    children: "Atendimento focado no acolhimento e na excelência médica, proporcionando saúde e bem-estar para a mulher moderna em Goiânia."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "primary",
                                            className: "shadow-xl shadow-primary/20",
                                            href: "https://wa.me/556299504788",
                                            children: "Agendar Consulta"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "outline",
                                            href: "/especialidades",
                                            children: "Conhecer Especialidades"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-12 flex items-center gap-6 justify-center lg:justify-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex -space-x-3",
                                            "aria-hidden": "true",
                                            children: [
                                                1,
                                                2,
                                                3
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary to-primary-hover text-white text-xs font-bold flex items-center justify-center shadow-sm",
                                                    children: "DJ"
                                                }, item, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-500 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary font-bold",
                                                    children: "+5.000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " pacientes atendidas"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:w-1/2 relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-primary/5 rounded-3xl -rotate-2 transform transition-transform group-hover:rotate-0 duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/dr-jony-profile.webp",
                                        alt: "Dr. Jony Barbosa",
                                        className: "w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 lg:-left-12 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 animate-bounce-slow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HeroSection.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 197
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HeroSection.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xl font-bold text-primary leading-none",
                                                        children: "Experiência"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HeroSection.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-slate-500 mt-1",
                                                        children: "Ginecologia e Obstetrícia"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HeroSection.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HeroSection.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSection.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HeroSection;
}),
"[project]/src/components/IntroSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const IntroSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-8 leading-relaxed",
                        children: [
                            "Olá, eu sou o ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary italic",
                                children: "Dr. Jony Barbosa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/IntroSection.tsx",
                                lineNumber: 10,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0)),
                            ". Acredito que cada mulher é única e merece um atendimento ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-secondary",
                                children: "individualizado e humano"
                            }, void 0, false, {
                                fileName: "[project]/src/components/IntroSection.tsx",
                                lineNumber: 11,
                                columnNumber: 70
                            }, ("TURBOPACK compile-time value", void 0)),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/IntroSection.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-1.5 bg-accent mx-auto mb-10 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/IntroSection.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12",
                        children: [
                            {
                                title: "Humanização",
                                desc: "Atendimento focado no acolhimento emocional e físico da paciente.",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/IntroSection.tsx",
                                        lineNumber: 21,
                                        columnNumber: 201
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IntroSection.tsx",
                                    lineNumber: 21,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            },
                            {
                                title: "Tecnologia",
                                desc: "Uso das mais modernas técnicas em cirurgia ginecológica e exames.",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IntroSection.tsx",
                                            lineNumber: 26,
                                            columnNumber: 201
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m16 12-4-4-4 4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IntroSection.tsx",
                                            lineNumber: 26,
                                            columnNumber: 233
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 16V8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/IntroSection.tsx",
                                            lineNumber: 26,
                                            columnNumber: 259
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/IntroSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            },
                            {
                                title: "Excelência",
                                desc: "Constantemente atualizado com as melhores práticas da medicina mundial.",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/IntroSection.tsx",
                                        lineNumber: 31,
                                        columnNumber: 201
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IntroSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            }
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 border border-slate-100 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300",
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/IntroSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-slate-800 mb-3",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/IntroSection.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 leading-relaxed text-sm",
                                        children: item.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/IntroSection.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/IntroSection.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/IntroSection.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-primary/5 p-8 rounded-3xl border border-primary/10 inline-flex items-center gap-6 text-left max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/dr-jony-profile.webp",
                                    alt: "Dr. Jony Barbosa",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/IntroSection.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/IntroSection.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "italic text-slate-700 leading-relaxed text-sm mb-2",
                                        children: '"Minha missão é transformar a experiência da saúde feminina, trazendo segurança e autonomia para minhas pacientes."'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/IntroSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-primary",
                                        children: "Dr. Jony Barbosa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/IntroSection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/IntroSection.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/IntroSection.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/IntroSection.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/IntroSection.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/IntroSection.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = IntroSection;
}),
"[project]/src/components/CategoriesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const categories = [
    {
        title: "Especialidades",
        subtitle: "Atendimento Clínico",
        description: "Consultas especializadas em ginecologia de rotina, climatério e reposição hormonal.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoriesSection.tsx",
                lineNumber: 9,
                columnNumber: 185
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/CategoriesSection.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        color: "bg-blue-500",
        href: "/especialidades"
    },
    {
        title: "Exames",
        subtitle: "Medicina Fetal",
        description: "Ultrassonografia obstétrica avançada e exames ginecológicos de alta precisão.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 12h-4l-3 9L9 3l-3 9H2"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoriesSection.tsx",
                lineNumber: 19,
                columnNumber: 185
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/CategoriesSection.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        color: "bg-secondary",
        href: "/exames"
    },
    {
        title: "Serviços",
        subtitle: "Procedimentos",
        description: "Cirurgias ginecológicas minimamente invasivas e procedimentos ambulatoriais.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/src/components/CategoriesSection.tsx",
                lineNumber: 29,
                columnNumber: 185
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/CategoriesSection.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        color: "bg-primary",
        href: "/servicos"
    }
];
const CategoriesSection = ({ title, subtitle })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-end mb-12 gap-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight",
                                children: title || "Áreas de Atuação"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoriesSection.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 text-lg leading-relaxed",
                                children: subtitle || "Soluções completas e humanizadas para a saúde da mulher em todas as idades."
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoriesSection.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CategoriesSection.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/CategoriesSection.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: categories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: cat.href,
                            className: "group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-slate-100 overflow-hidden flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-${cat.color.split('-')[1]}/20 transform transition-transform group-hover:scale-110 duration-500`,
                                    children: cat.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoriesSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-bold text-primary uppercase tracking-widest mb-2 opacity-60",
                                            children: cat.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CategoriesSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors",
                                            children: cat.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CategoriesSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-600 leading-relaxed mb-8 flex-grow",
                                            children: cat.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CategoriesSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all",
                                            children: [
                                                "Ver Mais",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M5 12h14"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CategoriesSection.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 197
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "m12 5 7 7-7 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CategoriesSection.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 217
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CategoriesSection.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CategoriesSection.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CategoriesSection.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -right-4 -bottom-4 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-primary/5 transition-colors duration-500 -z-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoriesSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/CategoriesSection.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/CategoriesSection.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CategoriesSection.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/CategoriesSection.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CategoriesSection;
}),
"[project]/src/components/AboutDoctor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
;
;
const AboutDoctor = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 lg:py-32 bg-white overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row items-center gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:w-1/2 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutDoctor.tsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/dr-jony-profile.webp",
                                    alt: "Dr. Jony Barbosa atendendo",
                                    className: "w-full h-[600px] object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutDoctor.tsx",
                                    lineNumber: 12,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutDoctor.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -right-8 bottom-20 bg-primary p-6 rounded-2xl shadow-xl z-20 text-white max-w-[200px] animate-fade-in-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-serif font-bold mb-1",
                                        children: "+15"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutDoctor.tsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs uppercase tracking-widest font-bold opacity-80",
                                        children: "Anos de dedicação à medicina"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutDoctor.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutDoctor.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutDoctor.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:w-1/2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-primary text-sm font-bold tracking-wide uppercase",
                                children: "Conheça o Especialista"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutDoctor.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl lg:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight",
                                children: "Dr. Jony Rodrigues Barbosa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutDoctor.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 text-slate-600 text-lg leading-relaxed mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Graduado em Medicina pela Universidade Federal de Goiás, o Dr. Jony Barbosa é especialista em Ginecologia e Obstetrícia, com foco em Medicina Fetal e Ultrassonografia."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutDoctor.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Sua trajetória é marcada pelo compromisso com a atualização constante e pelo desenvolvimento de um atendimento que une rigor científico a uma escuta cuidadosa e empática."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutDoctor.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm font-bold text-slate-800",
                                        children: [
                                            "CRM 7652 / GO",
                                            "RQE 3900 (Ginecologia)",
                                            "RQE 9229 (Ultrassonografia)",
                                            "Especialista em Medicina Fetal"
                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-secondary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutDoctor.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    item
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/components/AboutDoctor.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutDoctor.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutDoctor.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-bold text-primary mb-4",
                                        children: "Experiência e Formação"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutDoctor.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 mb-6",
                                        children: "Membro titular da Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO) e da Sociedade Brasileira de Ultrassonografia (SBUS)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutDoctor.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "outline",
                                        className: "text-sm",
                                        href: "/sobre",
                                        children: "Ver Currículo Completo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutDoctor.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutDoctor.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutDoctor.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutDoctor.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/AboutDoctor.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/AboutDoctor.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AboutDoctor;
}),
"[project]/src/components/ServicesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
;
;
const ServicesSection = ({ title, subtitle })=>{
    const services = [
        {
            title: "Consulta Médica",
            desc: "Check-up ginecológico completo e humanizado.",
            price: "Sob Consulta",
            img: "/dr-jony-profile.webp"
        },
        {
            title: "Medicina Fetal",
            desc: "Acompanhamento detalhado da saúde do seu bebê.",
            price: "Sob Consulta",
            img: "/dr-jony-profile.webp"
        },
        {
            title: "Cirurgia Ginecológica",
            desc: "Procedimentos avançados minimamente invasivos.",
            price: "Sob Consulta",
            img: "/dr-jony-profile.webp"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 lg:py-32 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl lg:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight",
                            children: title || "Principais Serviços"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServicesSection.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 text-lg max-w-2xl mx-auto",
                            children: subtitle || "Tecnologia e cuidado integrados na preservação da saúde feminina."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServicesSection.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServicesSection.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-10",
                    children: services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-slate-100 flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-64 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: service.img,
                                        alt: service.title,
                                        className: "w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServicesSection.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicesSection.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 flex flex-col flex-grow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-grow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors",
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServicesSection.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-600 mb-6 leading-relaxed",
                                                    children: service.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServicesSection.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServicesSection.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-auto border-t border-slate-50 pt-6 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary font-bold",
                                                    children: service.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServicesSection.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `/servicos`,
                                                    className: "w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M5 12h14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ServicesSection.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 199
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m12 5 7 7-7 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ServicesSection.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 219
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServicesSection.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServicesSection.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServicesSection.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServicesSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/ServicesSection.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ServicesSection.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outline",
                        href: "/servicos",
                        children: "Ver Todos os Serviços"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesSection.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ServicesSection.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ServicesSection.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ServicesSection.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ServicesSection;
}),
"[project]/src/components/ui/Slider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const Slider = ({ id, title, subtitle, autoplay = true, autoplayInterval = 4000, children })=>{
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [itemCount, setItemCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (trackRef.current) {
            setItemCount(trackRef.current.children.length);
        }
    }, [
        children
    ]);
    const getItemsPerView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return 1;
        //TURBOPACK unreachable
        ;
        const width = undefined;
    }, []);
    const totalDots = Math.ceil(itemCount / getItemsPerView());
    const scrollToIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        if (!trackRef.current) return;
        const slider = trackRef.current;
        const itemWidth = slider.children[0]?.getBoundingClientRect().width || 0;
        const gap = parseFloat(getComputedStyle(slider).gap) || 24;
        slider.scrollTo({
            left: index * (itemWidth + gap),
            behavior: 'smooth'
        });
        setCurrentIndex(index);
    }, []);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const nextIndex = currentIndex >= totalDots - 1 ? 0 : currentIndex + 1;
        scrollToIndex(nextIndex);
    }, [
        currentIndex,
        totalDots,
        scrollToIndex
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const prevIndex = currentIndex <= 0 ? totalDots - 1 : currentIndex - 1;
        scrollToIndex(prevIndex);
    }, [
        currentIndex,
        totalDots,
        scrollToIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!autoplay) return;
        const timer = setInterval(handleNext, autoplayInterval);
        return ()=>clearInterval(timer);
    }, [
        autoplay,
        autoplayInterval,
        handleNext
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: [
            (title || subtitle) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16 relative",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-5xl font-serif font-bold text-primary mb-4 relative inline-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-2 -left-4 w-12 h-[2px] bg-gradient-to-r from-secondary to-transparent rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Slider.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Slider.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 text-lg font-light",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Slider.tsx",
                        lineNumber: 82,
                        columnNumber: 24
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Slider.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrev,
                        className: "absolute top-1/2 -left-4 lg:-left-7 z-20 -translate-y-1/2 hidden lg:flex w-14 h-14 rounded-full bg-white border-2 border-secondary shadow-lg items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all transform hover:scale-105 active:scale-95",
                        "aria-label": "Anterior",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "15 18 9 12 15 6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Slider.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Slider.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Slider.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-visible relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: trackRef,
                            className: "flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-1",
                            style: {
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            },
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Slider.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Slider.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        className: "absolute top-1/2 -right-4 lg:-right-7 z-20 -translate-y-1/2 hidden lg:flex w-14 h-14 rounded-full bg-white border-2 border-secondary shadow-lg items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all transform hover:scale-105 active:scale-95",
                        "aria-label": "Próximo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "9 18 15 12 9 6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Slider.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Slider.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Slider.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Slider.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            totalDots > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-full shadow-sm",
                    children: Array.from({
                        length: totalDots
                    }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollToIndex(idx),
                            className: `h-2 transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-8 bg-secondary' : 'w-2 bg-slate-200 hover:bg-secondary/50'}`,
                            "aria-label": `Ir para slide ${idx + 1}`
                        }, idx, false, {
                            fileName: "[project]/src/components/ui/Slider.tsx",
                            lineNumber: 124,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Slider.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Slider.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Slider.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Slider;
}),
"[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Card = ({ item, type, title, description, href, linkText = 'Saiba mais' })=>{
    const cardTitle = title || item?.title || '';
    const cardDescription = description || item?.description || '';
    let cardHref = href;
    if (!cardHref && item?.slug && type) {
        const categoryMap = {
            'service': 'especialidades',
            'exam': 'exames',
            'procedure': 'servicos'
        };
        const categoryPath = categoryMap[type] || 'servicos';
        cardHref = `/${categoryPath}/${item.slug}`;
    } else if (!cardHref) {
        cardHref = '#contato';
    }
    const icons = {
        service: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        exam: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 12h-4l-3 9L9 3l-3 9H2"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)),
        procedure: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Card.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "22 4 12 14.01 9 11.01"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Card.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Card.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-8 rounded-xl border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-200 group min-w-[280px] md:min-w-[300px] flex-shrink-0 mx-4 md:mx-0 snap-center",
        children: [
            type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 text-primary bg-slate-50 border border-slate-200 w-14 h-14 rounded-lg flex items-center justify-center transition-transform duration-300",
                children: icons[type]
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-serif font-bold text-primary mb-3",
                children: cardTitle
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-600/90 text-sm mb-6 leading-relaxed font-light",
                children: cardDescription
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: cardHref,
                className: "text-secondary text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-1",
                children: [
                    linkText,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "9 18 15 12 9 6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Card.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Card.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Card.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Card;
}),
"[project]/src/data/services-extended.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllServicesByCategory",
    ()=>getAllServicesByCategory,
    "getRelatedServices",
    ()=>getRelatedServices,
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "servicesExtended",
    ()=>servicesExtended
]);
const servicesExtended = [
    // ============================================
    // ESPECIALIDADES (5)
    // ============================================
    {
        title: 'Gestação de Alto Risco',
        slug: 'gestacao-alto-risco-goiania',
        description: 'Acompanhamento especializado para gestações complexas em Goiânia com Dr. Jony Barbosa.',
        category: 'especialidade',
        // SEO
        metaTitle: 'Gestação de Alto Risco em Goiânia | Dr. Jony Barbosa - Obstetra',
        metaDescription: 'Pré-natal de alto risco em Goiânia com Dr. Jony Barbosa. Gestação gemelar, diabetes gestacional, hipertensão. Agende: (62) 9950-4788',
        keywords: [
            'gestação alto risco goiânia',
            'pré-natal alto risco goiás',
            'obstetra alto risco goiânia',
            'diabetes gestacional goiânia',
            'gestação gemelar goiânia',
            'pré-eclâmpsia goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/especialidades/gestacao-alto-risco-goiania',
        // Conteúdo
        longDescription: 'A gestação de alto risco requer cuidados especializados e acompanhamento médico intensivo para garantir a saúde da mãe e do bebê.',
        whatIsIt: 'A gestação de alto risco é caracterizada por condições que aumentam a probabilidade de complicações durante a gravidez, parto ou pós-parto. Em Goiânia, o Dr. Jony Barbosa oferece acompanhamento diferenciado com consultas mais frequentes, exames especializados como ultrassom morfológico, Doppler e NIPT, e monitoramento intensivo. O objetivo é identificar precocemente qualquer alteração e agir preventivamente para garantir um desfecho positivo.',
        whoNeedsIt: [
            'Gestantes com diabetes gestacional ou diabetes tipo 1/2 pré-existente',
            'Hipertensão arterial crônica ou desenvolvimento de pré-eclâmpsia',
            'Gestação gemelar, trigemelar ou múltipla',
            'Idade materna acima de 35 anos ou abaixo de 18 anos',
            'Histórico de parto prematuro ou perda gestacional anterior',
            'Doenças autoimunes como lúpus ou tireoidite de Hashimoto',
            'Gestação após tratamentos de fertilização in vitro',
            'Malformações fetais detectadas em ultrassonografia',
            'Placenta prévia, descolamento prematuro ou outras alterações placentárias',
            'Restrição de crescimento intrauterino (CIUR)'
        ],
        howItWorks: [
            'Consulta inicial detalhada com revisão completa do histórico médico e obstétrico',
            'Exames laboratoriais ampliados incluindo perfil glicêmico, função renal e tireoideana',
            'Ultrassonografia morfológica de alta resolução e Doppler quando necessário',
            'Consultas de retorno a cada 2-3 semanas ao invés de mensais',
            'Monitoramento fetal com cardiotocografia e perfil biofísico fetal',
            'Coordenação com especialistas (endocrinologista, cardiologista, nefrologista) conforme necessário',
            'Planejamento antecipado do parto com discussão de riscos, benefícios e preferências da família'
        ],
        benefits: [
            'Detecção precoce de complicações reduz drasticamente riscos maternos e fetais',
            'Acompanhamento personalizado com Dr. Jony disponível para dúvidas via WhatsApp',
            'Acesso a exames de medicina fetal de última geração',
            'Planejamento de parto seguro em maternidades de referência em Goiânia',
            'Tranquilidade através de monitoramento constante e comunicação transparente',
            'Documentação completa para reembolso por convênios médicos'
        ],
        relatedServices: [
            'medicina-fetal-goiania',
            'ultrassom-morfologico-segundo-trimestre-goiania',
            'nipt-goiania',
            'ultrassom-obstetrico-doppler-goiania'
        ],
        faq: [
            {
                question: 'Quando devo procurar um obstetra especialista em alto risco em Goiânia?',
                answer: 'Procure assim que descobrir a gravidez se já tiver fatores de risco conhecidos (diabetes, hipertensão, gestação múltipla). Mesmo em gestações que iniciam normais, se surgirem complicações durante o pré-natal regular, seu obstetra pode encaminhar para acompanhamento especializado com Dr. Jony Barbosa.'
            },
            {
                question: 'O pré-natal de alto risco é mais caro que o convencional?',
                answer: 'O investimento é maior devido à frequência de consultas e exames especializados (ultrassom com Doppler, NIPT, ecocardiografia fetal). Oferecemos documentação completa para reembolso por convênios como Unimed, Bradesco e Sulamérica. O importante é que o acompanhamento adequado previne complicações graves e internações prolongadas.'
            },
            {
                question: 'Posso ter parto normal mesmo com gestação de alto risco?',
                answer: 'Sim! Muitas gestações de alto risco podem ter parto normal com segurança. Dr. Jony avalia cada caso individualmente considerando o tipo de complicação, controle da condição e bem-estar fetal. O importante é ter um planejamento adequado e equipe preparada.'
            },
            {
                question: 'Com que frequência serão as consultas no pré-natal de alto risco?',
                answer: 'Geralmente a cada 2-3 semanas, podendo ser semanal nos casos mais complexos ou no final da gestação. A frequência é individualizada conforme o tipo de risco e resposta ao tratamento.'
            },
            {
                question: 'Onde Dr. Jony realiza os partos de alto risco em Goiânia?',
                answer: 'Os partos são realizados em maternidades de referência em Goiânia equipadas com UTI neonatal e materna, como Hospital Premium, Materno Infantil e outras conforme sua preferência e convênio.'
            }
        ],
        schemaType: 'MedicalSpecialty',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '45-60 minutos por consulta'
    },
    {
        title: 'Ginecologia',
        slug: 'ginecologia-goiania',
        description: 'Cuidado integral da saúde da mulher em todas as fases da vida com Dr. Jony Barbosa em Goiânia.',
        category: 'especialidade',
        metaTitle: 'Ginecologista em Goiânia | Dr. Jony Barbosa - Consulta e Exames',
        metaDescription: 'Consulta ginecológica completa em Goiânia: prevenção, tratamento e cuidado feminino. Dr. Jony Barbosa atende com humanização. Agende: (62) 9950-4788',
        keywords: [
            'ginecologista goiânia',
            'consulta ginecológica goiás',
            'médico ginecologista goiânia',
            'ginecologia feminina goiânia',
            'check-up ginecológico goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/especialidades/ginecologia-goiania',
        longDescription: 'A ginecologia é a especialidade médica que cuida da saúde do sistema reprodutor feminino em todas as fases da vida.',
        whatIsIt: 'A ginecologia abrange prevenção, diagnóstico e tratamento de condições que afetam o sistema reprodutor feminino. No consultório do Dr. Jony Barbosa em Goiânia, as consultas ginecológicas incluem exame físico completo, coleta de preventivo (Papanicolau), solicitação de exames complementares, orientação contraceptiva, investigação de queixas como corrimentos, dores pélvicas ou irregularidades menstruais, e acompanhamento de condições como SOP, endometriose e miomas.',
        whoNeedsIt: [
            'Mulheres a partir da primeira menstruação ou início da vida sexual',
            'Prevenção e rastreamento de câncer de colo de útero e mama',
            'Irregularidades menstruais ou cólicas intensas',
            'Corrimento vaginal, coceira ou odor alterado',
            'Dor durante relações sexuais (dispareunia)',
            'Planejamento contraceptivo (DIU, implante, pílula)',
            'Menopausa e reposição hormonal',
            'Investigação de infertilidade conjugal',
            'Check-up ginecológico anual de rotina'
        ],
        howItWorks: [
            'Anamnese detalhada sobre histórico menstrual, sexual e familiar',
            'Exame físico ginecológico com espéculo e toque vaginal',
            'Coleta de preventivo (Papanicolau) quando indicado',
            'Solicitação de exames complementares: ultrassom, mamografia, hormônios',
            'Orientação sobre métodos contraceptivos e planejamento familiar',
            'Prescrição de tratamentos medicamentosos ou encaminhamento para procedimentos',
            'Agendamento de retorno conforme necessidade individual'
        ],
        benefits: [
            'Prevenção de doenças ginecológicas e detecção precoce de câncer',
            'Tratamento eficaz de condições comuns como candidíase e vaginose',
            'Planejamento contraceptivo personalizado conforme seu estilo de vida',
            'Acolhimento humanizado em ambiente confortável e discreto',
            'Esclarecimento de dúvidas sobre sexualidade e saúde íntima',
            'Documentação para reembolso por convênios médicos'
        ],
        relatedServices: [
            'consulta-medica-goiania',
            'ultrassom-mamas-goiania',
            'histeroscopia-goiania',
            'videolaparoscopia-goiania'
        ],
        faq: [
            {
                question: 'Com que frequência devo ir ao ginecologista em Goiânia?',
                answer: 'O recomendado é consulta anual de rotina para mulheres saudáveis. Se você tem condições como SOP, endometriose ou está em acompanhamento específico, a frequência pode ser semestral ou trimestral conforme orientação do Dr. Jony.'
            },
            {
                question: 'Preciso fazer preventivo todo ano?',
                answer: 'O exame de Papanicolau é recomendado anualmente para mulheres de 25 a 64 anos que já iniciaram vida sexual. Após dois exames anuais consecutivos normais, pode ser espaçado para a cada 3 anos conforme protocolo do Ministério da Saúde.'
            },
            {
                question: 'Dr. Jony atende adolescentes?',
                answer: 'Sim! O Dr. Jony tem experiência em ginecologia da adolescência, oferecendo atendimento acolhedor e educativo para jovens com orientação sobre ciclo menstrual, contracepção e prevenção de ISTs.'
            },
            {
                question: 'Posso consultar durante a menstruação?',
                answer: 'Para consultas de rotina e coleta de preventivo, é preferível evitar o período menstrual. Porém, se houver queixa aguda (dor intensa, sangramento anormal), pode agendar mesmo menstruada.'
            }
        ],
        schemaType: 'MedicalSpecialty',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '30-45 minutos'
    },
    {
        title: 'Medicina Fetal',
        slug: 'medicina-fetal-goiania',
        description: 'Diagnóstico e tratamento de condições fetais com tecnologia avançada em Goiânia.',
        category: 'especialidade',
        metaTitle: 'Medicina Fetal em Goiânia | Dr. Jony Barbosa - Diagnóstico Fetal',
        metaDescription: 'Especialista em Medicina Fetal em Goiânia: ultrassom morfológico, ecocardiografia fetal, diagnóstico pré-natal. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'medicina fetal goiânia',
            'especialista fetal goiás',
            'diagnóstico fetal goiânia',
            'malformação fetal goiânia',
            'ecocardiografia fetal goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/especialidades/medicina-fetal-goiania',
        longDescription: 'A medicina fetal é uma subespecialidade que se dedica ao diagnóstico, tratamento e acompanhamento de condições que afetam o feto durante a gestação.',
        whatIsIt: 'A Medicina Fetal combina ultrassonografia de alta resolução, procedimentos invasivos diagnósticos (amniocentese, cordocentese) e acompanhamento multidisciplinar para identificar e manejar malformações, doenças genéticas, restrição de crescimento, gemelaridade complicada e outras condições fetais. O Dr. Jony Barbosa utiliza equipamentos de última geração para diagnóstico preciso e oferece aconselhamento detalhado às famílias sobre prognóstico e opções terapêuticas.',
        whoNeedsIt: [
            'Suspeita de malformação fetal em ultrassom de rotina',
            'Alterações em exames de triagem (NIPT, translucência nucal)',
            'Histórico familiar de doenças genéticas',
            'Gestação gemelar monocoriônica (risco de síndrome transfusão feto-fetal)',
            'Restrição de crescimento intrauterino (CIUR)',
            'Polidrâmnio ou oligodrâmnio (alterações do líquido amniótico)',
            'Arritmias ou alterações cardíacas fetais',
            'Hydrops fetal (acúmulo de líquido em cavidades)',
            'Idade materna avançada (≥35 anos)',
            'Exposição a teratógenos ou infecções na gestação (toxoplasmose, Zika, CMV)'
        ],
        howItWorks: [
            'Ultrassom morfológico detalhado com avaliação anatômica completa do feto',
            'Ecocardiografia fetal quando necessária para avaliar estrutura cardíaca',
            'Doppler para avaliar fluxo sanguíneo placentário e fetal',
            'Procedimentos invasivos (amniocentese, cordocentese) quando indicados',
            'Discussão multidisciplinar com geneticistas, cirurgiões pediátricos quando necessário',
            'Aconselhamento sobre prognóstico, tratamento intrauterino ou pós-natal',
            'Acompanhamento seriado conforme a condição diagnosticada'
        ],
        benefits: [
            'Diagnóstico precoce permite planejamento adequado do parto e tratamento pós-natal',
            'Reduz ansiedade através de informação clara e baseada em evidências',
            'Acesso a terapias intrauterinas quando disponíveis',
            'Coordenação com centros de referência para cirurgia fetal se necessário',
            'Acompanhamento humanizado com suporte emocional para a família',
            'Segunda opinião especializada em casos complexos'
        ],
        relatedServices: [
            'gestacao-alto-risco-goiania',
            'ultrassom-morfologico-segundo-trimestre-goiania',
            'amniocentese-goiania',
            'cordocentese-goiania'
        ],
        faq: [
            {
                question: 'Quando devo procurar um especialista em medicina fetal em Goiânia?',
                answer: 'Sempre que houver suspeita de malformação ou alteração fetal em ultrassom de rotina, alterações em exames de triagem (translucência nucal aumentada, NIPT positivo), ou histórico familiar de doenças genéticas. Muitas vezes o próprio obstetra encaminha para avaliação especializada.'
            },
            {
                question: 'O ultrassom morfológico é o mesmo que ultrassom comum?',
                answer: 'Não. O ultrassom morfológico é muito mais detalhado, realizado por especialista em medicina fetal, com equipamento de alta resolução. Avalia minuciosamente anatomia fetal, crescimento, placenta, líquido amniótico e marcadores de anomalias cromossômicas.'
            },
            {
                question: 'Se for diagnosticada uma malformação, o que acontece?',
                answer: 'Dr. Jony fornece aconselhamento detalhado sobre a condição, prognóstico, necessidade de exames adicionais (ressonância, cariótipo), possibilidades de tratamento intrauterino ou cirurgia pós-natal, e planeja o parto em maternidade com UTI neonatal adequada.'
            },
            {
                question: 'Medicina fetal trata o bebê ainda na barriga?',
                answer: 'Em alguns casos sim. Transfusões intrauterinas, drenagem de derrames, ablação a laser em gemelar monocoriônico são exemplos. Porém, a maioria dos tratamentos é realizada após o nascimento, sendo o papel da medicina fetal principalmente diagnóstico e planejamento.'
            }
        ],
        schemaType: 'MedicalSpecialty',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '60-90 minutos'
    },
    {
        title: 'Obstetrícia',
        slug: 'obstetricia-goiania',
        description: 'Acompanhamento pré-natal completo e parto humanizado em Goiânia com Dr. Jony Barbosa.',
        category: 'especialidade',
        metaTitle: 'Obstetra em Goiânia | Dr. Jony Barbosa - Pré-natal e Parto',
        metaDescription: 'Obstetra em Goiânia: pré-natal humanizado, parto normal e cesárea. Dr. Jony Barbosa acompanha sua gestação com cuidado. Agende: (62) 9950-4788',
        keywords: [
            'obstetra goiânia',
            'pré-natal goiânia',
            'parto humanizado goiás',
            'médico obstetra goiânia',
            'acompanhamento gestacional goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/especialidades/obstetricia-goiania',
        longDescription: 'A obstetrícia é a especialidade que cuida da mulher durante a gestação, parto e puerpério, garantindo saúde para mãe e bebê.',
        whatIsIt: 'A Obstetrícia abrange todo o acompanhamento da gestação desde a confirmação até o pós-parto. No consultório do Dr. Jony Barbosa em Goiânia, o pré-natal inclui consultas mensais (quinzenais no final), exames de rotina, ultrassonografias, orientações nutricionais e de exercícios, vacinação, preparação para o parto e suporte no puerpério. O Dr. Jony é defensor do parto adequado: seja normal ou cesárea, sempre respeitando a fisiologia, preferências da família e priorizando segurança.',
        whoNeedsIt: [
            'Toda mulher grávida desde a confirmação da gestação',
            'Gestantes de primeira viagem que desejam orientação detalhada',
            'Mulheres buscando parto humanizado e respeitoso',
            'Gestações de risco habitual sem complicações',
            'Segunda gestação com desejo de VBAC (parto normal após cesárea)',
            'Casais que valorizam participação ativa no processo',
            'Gestantes que desejam plano de parto personalizado'
        ],
        howItWorks: [
            'Primeira consulta pré-natal com confirmação da gestação por ultrassom',
            'Solicitação de exames laboratoriais de rotina do primeiro trimestre',
            'Consultas mensais até 28 semanas, quinzenais até 36 e semanais até o parto',
            'Ultrassonografias obstétricas e morfológicas em momentos estratégicos',
            'Orientações sobre alimentação, ganho de peso, atividade física',
            'Vacinação (dTpa, influenza) e suplementação (ácido fólico, ferro)',
            'Discussão sobre plano de parto e escolha da maternidade',
            'Acompanhamento do trabalho de parto e realização do parto'
        ],
        benefits: [
            'Redução de riscos maternos e fetais através de acompanhamento adequado',
            'Detecção precoce de complicações como diabetes e hipertensão gestacional',
            'Orientação baseada em evidências sobre mitos e verdades da gestação',
            'Preparação emocional e física para o parto',
            'Respeito às escolhas da família dentro da segurança médica',
            'Disponibilidade do Dr. Jony para dúvidas via WhatsApp'
        ],
        relatedServices: [
            'gestacao-alto-risco-goiania',
            'ultrassom-morfologico-primeiro-trimestre-goiania',
            'nipt-goiania',
            'consulta-medica-goiania'
        ],
        faq: [
            {
                question: 'Quando devo fazer a primeira consulta de pré-natal em Goiânia?',
                answer: 'Idealmente assim que confirmar a gestação, mesmo que muito recente. A primeira consulta pode ser entre 6-8 semanas para confirmar gestação tópica por ultrassom e iniciar suplementação de ácido fólico.'
            },
            {
                question: 'Dr. Jony faz parto normal ou só cesárea?',
                answer: 'Dr. Jony faz ambos e é defensor do parto adequado. Se não houver contraindicação, incentiva o parto normal. A cesárea é indicada quando há riscos maternos ou fetais ou por escolha informada da paciente.'
            },
            {
                question: 'Posso ter parto normal após cesárea (VBAC)?',
                answer: 'Sim! VBAC é possível e seguro na maioria dos casos. Dr. Jony avalia criteriosamente cada situação considerando tipo de incisão anterior, motivo da cesárea prévia e condições da gestação atual.'
            },
            {
                question: 'Onde Dr. Jony realiza os partos em Goiânia?',
                answer: 'Os partos são realizados nas principais maternidades de Goiânia como Hospital Premium, Materno Infantil, e outras conforme sua preferência e convênio médico.'
            },
            {
                question: 'O pré-natal inclui ultrassom?',
                answer: 'Sim. Dr. Jony realiza ultrassonografia em todas as consultas quando necessário para avaliar crescimento fetal, batimentos cardíacos e posição do bebê, sem custo adicional na consulta.'
            }
        ],
        schemaType: 'MedicalSpecialty',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '30-40 minutos por consulta'
    },
    {
        title: 'Ultrassonografia',
        slug: 'ultrassonografia-goiania',
        description: 'Exames de ultrassom obstétrico e ginecológico com tecnologia de ponta em Goiânia.',
        category: 'especialidade',
        metaTitle: 'Ultrassonografia em Goiânia | Dr. Jony Barbosa - Ultrassom 4D/5D',
        metaDescription: 'Ultrassom obstétrico, morfológico e ginecológico em Goiânia. Tecnologia 4D/5D. Dr. Jony Barbosa especialista. Agende: (62) 9950-4788',
        keywords: [
            'ultrassom goiânia',
            'ultrassonografia obstétrica goiás',
            'ultrassom 4d goiânia',
            'ultrassom morfológico goiânia',
            'ultrassom transvaginal goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/especialidades/ultrassonografia-goiania',
        longDescription: 'A ultrassonografia é método diagnóstico não invasivo que utiliza ondas sonoras para visualizar estruturas internas do corpo.',
        whatIsIt: 'A Ultrassonografia é exame de imagem essencial na ginecologia e obstetrícia. No consultório do Dr. Jony Barbosa em Goiânia, são realizados ultrassom transvaginal (ginecológico), ultrassom obstétrico de rotina, morfológico de primeiro, segundo e terceiro trimestres, Doppler obstétrico, ultrassom de mamas e ultrassom para monitoração de ovulação. Os equipamentos de última geração permitem imagens 4D/5D para visualização detalhada do bebê.',
        whoNeedsIt: [
            'Gestantes em todas as fases da gravidez',
            'Avaliação de miomas, cistos ovarianos e pólipos',
            'Investigação de dor pélvica ou sangramento ginecológico',
            'Rastreamento de malformações fetais',
            'Monitoração de ovulação para tentantes',
            'Avaliação de espessura endometrial',
            'Ultrassom de mamas para nódulos palpáveis',
            'Acompanhamento de tratamentos de fertilidade'
        ],
        howItWorks: [
            'Agendamento do exame conforme indicação médica',
            'Preparo específico conforme tipo de ultrassom (bexiga cheia para obstétrico, jejum não necessário)',
            'Realização do exame pelo Dr. Jony com duração de 15-40 minutos conforme complexidade',
            'Explicação em tempo real das imagens visualizadas',
            'Laudo técnico detalhado entregue ao final',
            'Imagens digitais e vídeos disponibilizados quando solicitado'
        ],
        benefits: [
            'Exame não invasivo, seguro e sem radiação',
            'Diagnóstico preciso de condições ginecológicas e obstétricas',
            'Imagens 4D/5D permitem visualização realista do bebê',
            'Realizado por especialista em medicina fetal',
            'Laudo imediato sem necessidade de retorno apenas para resultado',
            'Esclarecimento de dúvidas durante o próprio exame'
        ],
        relatedServices: [
            'ultrassom-morfologico-segundo-trimestre-goiania',
            'ultrassom-obstetrico-doppler-goiania',
            'ultrassom-mamas-goiania',
            'monitoracao-ovulacao-goiania'
        ],
        faq: [
            {
                question: 'Qual a diferença entre ultrassom transvaginal e abdominal?',
                answer: 'O transvaginal usa transdutor introduzido no canal vaginal, oferecendo imagens mais nítidas do útero e ovários. É usado em ginecologia e início da gestação. O abdominal é feito sobre o abdome e é preferido após 12 semanas de gestação.'
            },
            {
                question: 'Preciso fazer ultrassom em jejum?',
                answer: 'Não é necessário jejum para ultrassom obstétrico ou ginecológico. Para ultrassom abdominal de rotina, pode ser solicitado jejum de 6 horas, mas isso não se aplica aos exames ginecológicos e obstétricos.'
            },
            {
                question: 'Com quantas semanas posso fazer ultrassom 4D do bebê?',
                answer: 'O melhor período é entre 26-32 semanas de gestação, quando o bebê já tem gordurinha mas ainda tem espaço para se movimentar. Antes de 26 semanas o rosto é muito fino, após 32 semanas fica mais difícil visualizar pela posição.'
            },
            {
                question: 'O ultrassom pode fazer mal para o bebê?',
                answer: 'Não. A ultrassonografia é segura em qualquer fase da gestação. Não utiliza radiação, apenas ondas sonoras de alta frequência que não causam dano ao feto. É exame recomendado pela OMS e pelo Ministério da Saúde.'
            }
        ],
        schemaType: 'MedicalSpecialty',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '20-40 minutos'
    },
    // ============================================
    // EXAMES (14)
    // ============================================
    {
        title: 'Amniocentese',
        slug: 'amniocentese-goiania',
        description: 'Exame diagnóstico pré-natal para análise genética fetal em Goiânia.',
        category: 'exame',
        metaTitle: 'Amniocentese em Goiânia | Dr. Jony Barbosa - Exame Pré-natal',
        metaDescription: 'Amniocentese em Goiânia com Dr. Jony Barbosa. Diagnóstico genético fetal preciso e seguro. Agende seu exame: (62) 9950-4788',
        keywords: [
            'amniocentese goiânia',
            'exame amniocentese goiás',
            'diagnóstico pré-natal goiânia',
            'cariótipo fetal goiânia',
            'síndrome de down exame goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/amniocentese-goiania',
        longDescription: 'A amniocentese é um procedimento diagnóstico que coleta líquido amniótico para análise genética do feto.',
        whatIsIt: 'A amniocentese é um exame invasivo realizado geralmente entre 15-20 semanas de gestação, onde uma agulha fina é inserida através do abdome materno até a cavidade amniótica para coletar uma pequena amostra de líquido. O líquido contém células fetais que são analisadas para detectar alterações cromossômicas (síndrome de Down, Edwards, Patau), defeitos do tubo neural e doenças genéticas. Dr. Jony Barbosa realiza o procedimento guiado por ultrassom para máxima segurança.',
        whoNeedsIt: [
            'Resultado alterado no NIPT ou teste combinado do primeiro trimestre',
            'Ultrassom morfológico com marcadores de cromossomopatias',
            'Idade materna ≥35 anos com desejo de confirmação diagnóstica',
            'Histórico familiar de doenças genéticas',
            'Gestação anterior com alteração cromossômica',
            'Ansiedade importante que só será resolvida com confirmação diagnóstica',
            'Investigação de infecções congênitas (toxoplasmose, CMV) em casos específicos'
        ],
        howItWorks: [
            'Consulta pré-procedimento para orientações e consentimento informado',
            'Ultrassom para localizar bolsão de líquido e posição fetal',
            'Assepsia abdominal com solução antisséptica',
            'Anestesia local da pele (opcional)',
            'Inserção de agulha fina guiada por ultrassom em tempo real',
            'Aspiração de 15-20ml de líquido amniótico',
            'Repouso relativo por 24-48 horas após o procedimento',
            'Resultado de cariótipo em 10-15 dias; FISH em 48-72 horas'
        ],
        benefits: [
            'Diagnóstico definitivo de alterações cromossômicas com 99% de precisão',
            'Permite decisões informadas sobre continuidade ou manejo da gestação',
            'Pode detectar doenças genéticas raras não identificadas por NIPT',
            'Possibilita aconselhamento genético adequado',
            'Realizado por especialista experiente em medicina fetal',
            'Guiado por ultrassom de alta resolução para máxima segurança'
        ],
        relatedServices: [
            'medicina-fetal-goiania',
            'nipt-goiania',
            'cordocentese-goiania',
            'fish-goiania'
        ],
        faq: [
            {
                question: 'A amniocentese dói?',
                answer: 'A maioria das pacientes relata desconforto leve, semelhante a uma coleta de sangue. Pode ser realizada anestesia local da pele se desejado. A agulha é fina e o procedimento dura poucos minutos.'
            },
            {
                question: 'Qual o risco de aborto após amniocentese?',
                answer: 'O risco de aborto relacionado ao procedimento é muito baixo, cerca de 0,1-0,3% (1 em 300-500 procedimentos). Dr. Jony utiliza técnica moderna guiada por ultrassom que minimiza ainda mais esse risco.'
            },
            {
                question: 'Quanto tempo demora para sair o resultado?',
                answer: 'O FISH (análise rápida dos cromossomos 13, 18, 21, X e Y) sai em 48-72 horas. O cariótipo completo demora 10-15 dias pois as células precisam ser cultivadas antes da análise.'
            },
            {
                question: 'Preciso ficar internada?',
                answer: 'Não. A amniocentese é procedimento ambulatorial. Você fica em observação por 30-60 minutos após e pode ir para casa com orientação de repouso relativo no dia do procedimento e no dia seguinte.'
            },
            {
                question: 'Quando o exame NIPT substitui a amniocentese?',
                answer: 'O NIPT é exame de triagem (rastreamento), não diagnóstico. Se o NIPT der alterado, a amniocentese é necessária para confirmação diagnóstica antes de tomar decisões importantes.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '15-20 minutos'
    },
    {
        title: 'Biópsia de Vilo Corial',
        slug: 'biopsia-vilo-corial-goiania',
        description: 'Exame genético precoce da placenta para diagnóstico fetal em Goiânia.',
        category: 'exame',
        metaTitle: 'Biópsia de Vilo Corial em Goiânia | Dr. Jony Barbosa',
        metaDescription: 'Biópsia de vilo corial em Goiânia: diagnóstico genético no 1º trimestre. Dr. Jony Barbosa, especialista em medicina fetal. Agende: (62) 9950-4788',
        keywords: [
            'biópsia vilo corial goiânia',
            'BVC goiás',
            'exame genético primeiro trimestre goiânia',
            'diagnóstico precoce fetal goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/biopsia-vilo-corial-goiania',
        longDescription: 'A biópsia de vilo corial (BVC) é procedimento que coleta fragmentos da placenta para análise genética precoce.',
        whatIsIt: 'A BVC é realizada entre 11-14 semanas de gestação, período mais precoce que a amniocentese. O procedimento coleta pequena amostra das vilosidades coriônicas (tecido placentário) que possuem o mesmo DNA do feto. Pode ser feita por via transabdominal (agulha através do abdome) ou transcervical (cateter pelo colo uterino), conforme posição da placenta. Dr. Jony escolhe a via mais segura guiado por ultrassom em tempo real.',
        whoNeedsIt: [
            'Resultado alterado no teste combinado do primeiro trimestre',
            'Translucência nucal aumentada (>3,5mm)',
            'Histórico de filho anterior com alteração cromossômica',
            'Portadores de translocações cromossômicas balanceadas',
            'Casais com doenças genéticas conhecidas na família',
            'Desejo de diagnóstico precoce por ansiedade materna importante'
        ],
        howItWorks: [
            'Consulta pré-procedimento com orientações e termo de consentimento',
            'Ultrassom detalhado para escolher via de acesso (abdominal ou cervical)',
            'Assepsia da região conforme via escolhida',
            'Inserção de agulha ou cateter guiado por ultrassom em tempo real',
            'Aspiração de pequena quantidade de vilosidade coriônica',
            'Repouso relativo por 24-48 horas',
            'Resultado de cariótipo em 7-10 dias; FISH em 48 horas'
        ],
        benefits: [
            'Diagnóstico genético no primeiro trimestre (mais precoce que amniocentese)',
            'Resultado mais rápido que amniocentese (7-10 dias vs 10-15 dias)',
            'Mesma precisão diagnóstica da amniocentese (>99%)',
            'Permite decisões mais precoces sobre manejo da gestação',
            'Realizado por especialista com treinamento específico'
        ],
        relatedServices: [
            'amniocentese-goiania',
            'nipt-goiania',
            'medicina-fetal-goiania',
            'ultrassom-morfologico-primeiro-trimestre-goiania'
        ],
        faq: [
            {
                question: 'Qual a diferença entre BVC e amniocentese?',
                answer: 'A BVC é feita mais cedo (11-14 semanas vs 15-20 semanas) e coleta tecido placentário. A amniocentese coleta líquido amniótico. Ambas têm precisão diagnóstica semelhante, a escolha depende da idade gestacional e indicação.'
            },
            {
                question: 'BVC é mais arriscado que amniocentese?',
                answer: 'Estudos recentes mostram risco de perda fetal semelhante quando realizada por profissional experiente (cerca de 0,2-0,5%). A via transabdominal tem perfil de segurança comparável à amniocentese.'
            },
            {
                question: 'Pode dar resultado errado?',
                answer: 'Em cerca de 1-2% dos casos pode ocorrer mosaicismo placentário confinado (alteração só na placenta, não no feto). Nesses casos, pode ser necessária amniocentese confirmatória.'
            },
            {
                question: 'Quanto custa a biópsia de vilo corial em Goiânia?',
                answer: 'O valor varia conforme o laboratório de análise genética escolhido. Entre em contato conosco para orçamento atualizado incluindo procedimento e análise laboratorial.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '15-25 minutos'
    },
    {
        title: 'Cariótipo',
        slug: 'cariotipo-goiania',
        description: 'Análise cromossômica completa para diagnóstico genético em Goiânia.',
        category: 'exame',
        metaTitle: 'Exame de Cariótipo em Goiânia | Dr. Jony Barbosa - Genética',
        metaDescription: 'Cariótipo fetal e investigação de abortos em Goiânia. Análise cromossômica completa com Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'cariótipo goiânia',
            'exame cromossômico goiás',
            'análise genética goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/cariotipo-goiania',
        longDescription: 'O cariótipo é a análise microscópica dos cromossomos para detectar alterações numéricas ou estruturais.',
        whatIsIt: 'O cariótipo analisa todos os 23 pares de cromossomos em busca de alterações numéricas (trissomias, monossomias) ou estruturais (translocações, deleções). É o exame padrão-ouro para diagnóstico cromossômico definitivo.',
        whoNeedsIt: [
            'Confirmação após NIPT positivo',
            'Casal com abortos de repetição',
            'Investigação de infertilidade',
            'Malformação fetal detectada'
        ],
        howItWorks: [
            'Coleta de amostra (sangue, líquido amniótico ou tecido)',
            'Cultura celular por 7-15 dias',
            'Análise microscópica dos cromossomos',
            'Laudo detalhado em 10-20 dias'
        ],
        benefits: [
            'Diagnóstico definitivo de alterações cromossômicas',
            'Detecta alterações estruturais',
            'Orienta aconselhamento genético'
        ],
        relatedServices: [
            'amniocentese-goiania',
            'fish-goiania',
            'medicina-fetal-goiania'
        ],
        faq: [
            {
                question: 'Qual a diferença entre cariótipo e NIPT?',
                answer: 'O NIPT é triagem não invasiva. O cariótipo é diagnóstico definitivo que requer amostra fetal (amniocentese ou BVC).'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '10-15 minutos (coleta)'
    },
    {
        title: 'Cordocentese',
        slug: 'cordocentese-goiania',
        description: 'Coleta de sangue fetal pelo cordão umbilical para diagnóstico avançado.',
        category: 'exame',
        metaTitle: 'Cordocentese em Goiânia | Dr. Jony Barbosa - Medicina Fetal',
        metaDescription: 'Cordocentese (punção de cordão) em Goiânia para diagnóstico fetal avançado. Dr. Jony Barbosa, especialista. Agende: (62) 9950-4788',
        keywords: [
            'cordocentese goiânia',
            'punção cordão umbilical goiás',
            'coleta sangue fetal goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/cordocentese-goiania',
        longDescription: 'A cordocentese coleta sangue fetal diretamente do cordão umbilical para diagnósticos específicos.',
        whatIsIt: 'Procedimento que coleta sangue fetal do cordão umbilical após 18 semanas, guiado por ultrassom. Usado para investigar anemias fetais, infecções congênitas e quando resultado rápido de cariótipo é necessário.',
        whoNeedsIt: [
            'Suspeita de anemia fetal',
            'Investigação de infecções congênitas',
            'Mosaicismo cromossômico',
            'Hydrops fetal'
        ],
        howItWorks: [
            'Ultrassom detalhado',
            'Inserção de agulha até veia umbilical',
            'Aspiração de sangue fetal',
            'Resultados conforme exame: cariótipo em 48-72h'
        ],
        benefits: [
            'Diagnóstico de anemias e infecções fetais',
            'Cariótipo rápido em 48-72h',
            'Possibilita tratamento intrauterino'
        ],
        relatedServices: [
            'amniocentese-goiania',
            'medicina-fetal-goiania',
            'ultrassom-obstetrico-doppler-goiania'
        ],
        faq: [
            {
                question: 'Cordocentese é mais perigoso que amniocentese?',
                answer: 'Sim, risco ligeiramente maior (1-2% de perda fetal). Reservado para situações específicas onde amniocentese não é suficiente.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '20-30 minutos'
    },
    {
        title: 'Exame FISH',
        slug: 'fish-goiania',
        description: 'Análise genética rápida por hibridização fluorescente em Goiânia.',
        category: 'exame',
        metaTitle: 'Exame FISH em Goiânia | Dr. Jony Barbosa - Genética Rápida',
        metaDescription: 'FISH em Goiânia. Resultado em 48h para cromossomos 13, 18, 21, X e Y. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'fish goiânia',
            'exame fish genética goiás',
            'resultado rápido cromossomos goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/fish-goiania',
        longDescription: 'O FISH permite análise rápida de cromossomos específicos em 48-72 horas.',
        whatIsIt: 'FISH usa sondas fluorescentes para detectar cromossomos 13, 18, 21, X e Y. Fornece resultado preliminar em 48-72 horas enquanto aguarda cariótipo completo.',
        whoNeedsIt: [
            'Complemento da amniocentese para resultado rápido',
            'Ansiedade aguardando cariótipo',
            'Gestação avançada com decisões urgentes'
        ],
        howItWorks: [
            'Material coletado por amniocentese ou BVC',
            'Aplicação de sondas fluorescentes',
            'Análise microscópica',
            'Resultado em 48-72 horas'
        ],
        benefits: [
            'Resultado em 48-72h vs 10-15 dias',
            'Detecta alterações mais comuns (85%)',
            'Reduz ansiedade',
            '>99% de precisão'
        ],
        relatedServices: [
            'cariotipo-goiania',
            'amniocentese-goiania',
            'nipt-goiania'
        ],
        faq: [
            {
                question: 'FISH substitui o cariótipo?',
                answer: 'Não. FISH analisa apenas 5 cromossomos. Cariótipo analisa todos os 23 pares. FISH é complementar, não substitutivo.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás'
    },
    {
        title: 'Monitoração de Ovulação',
        slug: 'monitoracao-ovulacao-goiania',
        description: 'Acompanhamento ultrassonográfico do ciclo ovulatório para aumentar chances de gravidez.',
        category: 'exame',
        metaTitle: 'Monitoração de Ovulação em Goiânia | Dr. Jony Barbosa',
        metaDescription: 'Ultrassom seriado para monitorar ovulação em Goiânia. Aumente suas chances de gravidez com Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'monitoração ovulação goiânia',
            'ultrassom ovulação goiás',
            'tentar engravidar goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/monitoracao-ovulacao-goiania',
        longDescription: 'A monitoração usa ultrassom seriado para identificar período fértil com precisão.',
        whatIsIt: 'Série de ultrassons transvaginais durante o ciclo menstrual para acompanhar crescimento folicular e identificar momento exato da ovulação. Geralmente 3-4 ultrassons por ciclo.',
        whoNeedsIt: [
            'Casais tentando há mais de 6 meses',
            'Ciclos irregulares',
            'SOP com anovulação',
            'Uso de indutores de ovulação'
        ],
        howItWorks: [
            'Primeiro ultrassom no 8º-10º dia do ciclo',
            'Retornos a cada 2-3 dias',
            'Identificação do folículo dominante',
            'Programação de relações no momento ideal'
        ],
        benefits: [
            'Identifica período fértil com precisão',
            'Maximiza chances de gravidez',
            'Diagnostica anovulação',
            'Monitora resposta a medicações'
        ],
        relatedServices: [
            'consulta-medica-goiania',
            'ginecologia-goiania',
            'ultrassonografia-goiania'
        ],
        faq: [
            {
                question: 'Quantos ultrassons por ciclo?',
                answer: 'Geralmente 3-4 exames. Primeiro no 8º-10º dia, depois a cada 2-3 dias até confirmar ovulação.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '10-15 minutos por ultrassom'
    },
    {
        title: 'NIPT - Teste Pré-natal Não Invasivo',
        slug: 'nipt-goiania',
        description: 'Triagem pré-natal não invasiva de alta confiabilidade para síndromes cromossômicas.',
        category: 'exame',
        metaTitle: 'NIPT em Goiânia | Dr. Jony Barbosa - Teste Pré-natal Não Invasivo',
        metaDescription: 'NIPT em Goiânia. Triagem de síndrome de Down sem risco ao bebê. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'nipt goiânia',
            'teste pré-natal não invasivo goiás',
            'síndrome de down exame sangue goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/nipt-goiania',
        longDescription: 'O NIPT analisa DNA fetal livre no sangue materno para triagem de alterações cromossômicas sem risco.',
        whatIsIt: 'Exame de triagem a partir de 10 semanas através de coleta de sangue materno. Analisa DNA fetal para rastrear trissomias 13, 18, 21 e alterações de cromossomos sexuais. Sensibilidade >99%.',
        whoNeedsIt: [
            'Todas gestantes que desejam triagem precisa',
            'Idade materna ≥35 anos',
            'Histórico familiar de alterações cromossômicas',
            'Ansiedade sobre saúde fetal'
        ],
        howItWorks: [
            'Coleta de sangue materno a partir de 10 semanas',
            'Sequenciamento do DNA fetal livre',
            'Análise bioinformática',
            'Resultado em 7-10 dias'
        ],
        benefits: [
            'Zero risco de aborto',
            'Sensibilidade >99% para trissomia 21',
            'Pode ser feito precocemente',
            'Reduz amniocenteses desnecessárias'
        ],
        relatedServices: [
            'amniocentese-goiania',
            'medicina-fetal-goiania',
            'gestacao-alto-risco-goiania'
        ],
        faq: [
            {
                question: 'NIPT substitui amniocentese?',
                answer: 'Não. NIPT é triagem. Resultado de alto risco deve ser confirmado com amniocentese antes de decisões importantes.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '5-10 minutos (coleta)'
    },
    {
        title: 'SNIP Array',
        slug: 'snip-array-goiania',
        description: 'Análise genômica de alta resolução para detectar microdeleções e microduplicações.',
        category: 'exame',
        metaTitle: 'SNIP Array em Goiânia | Dr. Jony Barbosa - Genética Avançada',
        metaDescription: 'SNIP Array (CGH Array) em Goiânia. Detecta alterações cromossômicas submicroscópicas. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'snip array goiânia',
            'cgh array goiás',
            'microarray cromossômico goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/snip-array-goiania',
        longDescription: 'O SNIP Array detecta alterações cromossômicas menores que o cariótipo não identifica.',
        whatIsIt: 'Análise genômica de alta resolução que detecta microdeleções e microduplicações (alterações muito pequenas nos cromossomos) não visíveis no cariótipo tradicional. Especialmente útil em fetos com malformações ou atraso desenvolvimento.',
        whoNeedsIt: [
            'Malformação fetal com cariótipo normal',
            'Atraso desenvolvimento com cariótipo normal',
            'Múltiplas malformações',
            'Histórico familiar de microdeleções'
        ],
        howItWorks: [
            'Material de amniocentese ou BVC',
            'Extração de DNA',
            'Análise em microarray de SNP',
            'Identificação de ganhos ou perdas genômicas',
            'Resultado em 15-20 dias'
        ],
        benefits: [
            'Detecta alterações 100x menores que cariótipo',
            'Identifica síndromes de microdeleção',
            'Esclarece casos com malformação e cariótipo normal',
            'Permite aconselhamento genético preciso'
        ],
        relatedServices: [
            'amniocentese-goiania',
            'cariotipo-goiania',
            'medicina-fetal-goiania'
        ],
        faq: [
            {
                question: 'Quando fazer SNIP Array ao invés de cariótipo?',
                answer: 'Quando há malformação fetal, o ideal é fazer ambos ou SNIP Array diretamente, pois detecta tudo que o cariótipo detecta + microdeleções.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás'
    },
    {
        title: 'Ultrassom das Mamas',
        slug: 'ultrassom-mamas-goiania',
        description: 'Ultrassonografia mamária para rastreamento e investigação de nódulos.',
        category: 'exame',
        metaTitle: 'Ultrassom de Mamas em Goiânia | Dr. Jony Barbosa',
        metaDescription: 'Ultrassom de mamas em Goiânia para rastreamento e investigação de nódulos. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'ultrassom mamas goiânia',
            'ultrassom mamário goiás',
            'nódulo mama goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/ultrassom-mamas-goiania',
        longDescription: 'O ultrassom mamário complementa a mamografia na avaliação das mamas.',
        whatIsIt: 'Exame de imagem que utiliza ondas sonoras para avaliar tecido mamário. Especialmente útil em mamas densas (jovens), complementa mamografia, caracteriza nódulos palpáveis e acompanha lesões benignas.',
        whoNeedsIt: [
            'Mulheres jovens (<40 anos) com nódulo palpável',
            'Complemento de mamografia alterada',
            'Mamas densas onde mamografia tem limitação',
            'Rastreamento em gestantes/lactantes'
        ],
        howItWorks: [
            'Paciente deitada em maca',
            'Aplicação de gel condutor',
            'Varredura de ambas mamas com transdutor',
            'Avaliação de nódulos, cistos e padrão tissular',
            'Laudo imediato'
        ],
        benefits: [
            'Sem radiação (seguro em jovens e gestantes)',
            'Diferencia cistos de nódulos sólidos',
            'Avalia mamas densas com precisão',
            'Caracteriza nódulos (BI-RADS)'
        ],
        relatedServices: [
            'ginecologia-goiania',
            'consulta-medica-goiania'
        ],
        faq: [
            {
                question: 'Ultrassom substitui mamografia?',
                answer: 'Não. São complementares. Mamografia é rastreamento padrão >40 anos. Ultrassom complementa em casos específicos.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '15-20 minutos'
    },
    {
        title: 'Ultrassom Morfológico de Primeiro Trimestre',
        slug: 'ultrassom-morfologico-primeiro-trimestre-goiania',
        description: 'Avaliação detalhada do feto entre 11-14 semanas com medida da translucência nucal.',
        category: 'exame',
        metaTitle: 'Ultrassom Morfológico 1º Trimestre Goiânia | Dr. Jony Barbosa',
        metaDescription: 'Morfológico de primeiro trimestre em Goiânia. Translucência nucal e rastreamento de malformações precoces. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'morfológico primeiro trimestre goiânia',
            'translucência nucal goiás',
            'ultrassom 12 semanas goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/ultrassom-morfologico-primeiro-trimestre-goiania',
        longDescription: 'Exame detalhado entre 11-14 semanas que avalia anatomia fetal precoce e rastreia cromossomopatias.',
        whatIsIt: 'Ultrassom especializado realizado entre 11-14 semanas que inclui medida da translucência nucal (TN), avaliação do osso nasal, ducto venoso e regurgitação tricúspide. Rastreia 60-70% das malformações detectáveis nessa idade e calcula risco de trissomias.',
        whoNeedsIt: [
            'Todas gestantes entre 11-14 semanas',
            'Rastreamento de síndrome de Down',
            'Detecção precoce de malformações graves',
            'Base para cálculo do teste combinado'
        ],
        howItWorks: [
            'Ultrassom transabdominal (bexiga cheia ajuda)',
            'Biometria fetal e datação precisa',
            'Medida da translucência nucal',
            'Avaliação de marcadores (osso nasal, ducto venoso)',
            'Avaliação anatômica precoce',
            'Laudo com cálculo de risco'
        ],
        benefits: [
            'Rastreamento precoce de cromossomopatias',
            'Detecta malformações graves já no 1º trimestre',
            'Permite NIPT ou BVC mais precocemente se alterado',
            'Datação precisa da gestação'
        ],
        relatedServices: [
            'nipt-goiania',
            'medicina-fetal-goiania',
            'biopsia-vilo-corial-goiania'
        ],
        faq: [
            {
                question: 'O que é translucência nucal aumentada?',
                answer: 'É acúmulo de fluido na nuca do feto >2,5mm. Aumenta risco de cromossomopatias e malformações cardíacas. TN >3,5mm requer investigação adicional.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '30-40 minutos'
    },
    {
        title: 'Ultrassom Morfológico de Segundo Trimestre',
        slug: 'ultrassom-morfologico-segundo-trimestre-goiania',
        description: 'Avaliação anatômica completa do feto entre 20-24 semanas.',
        category: 'exame',
        metaTitle: 'Ultrassom Morfológico 2º Trimestre Goiânia | Dr. Jony Barbosa',
        metaDescription: 'Morfológico de segundo trimestre em Goiânia. Avaliação anatômica completa do bebê. Dr. Jony Barbosa especialista. Agende: (62) 9950-4788',
        keywords: [
            'morfológico segundo trimestre goiânia',
            'ultrassom 20 semanas goiás',
            'morfológico detalhado goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/ultrassom-morfologico-segundo-trimestre-goiania',
        longDescription: 'Exame mais importante da gestação, avalia detalhadamente todos os órgãos e sistemas fetais.',
        whatIsIt: 'Ultrassom especializado entre 20-24 semanas que avalia minuciosamente cérebro, face, coração, pulmões, abdome, coluna, membros e genitália. Detecta 80-85% das malformações. Realizado por especialista em medicina fetal com equipamento de alta resolução.',
        whoNeedsIt: [
            'Todas gestantes entre 20-24 semanas (obrigatório)',
            'Rastreamento de malformações fetais',
            'Avaliação de placenta e líquido amniótico',
            'Investigação de suspeitas em exames anteriores'
        ],
        howItWorks: [
            'Ultrassom transabdominal detalhado',
            'Avaliação sistemática de todos órgãos',
            'Biometria fetal completa',
            'Avaliação de placenta, cordão e líquido',
            'Doppler de artérias uterinas',
            'Sexagem fetal',
            'Laudo descritivo completo'
        ],
        benefits: [
            'Detecta maioria das malformações',
            'Permite planejamento do parto em maternidade adequada',
            'Identifica gestações de risco',
            'Tranquiliza quando normal',
            'Imagens 4D do bebê'
        ],
        relatedServices: [
            'medicina-fetal-goiania',
            'gestacao-alto-risco-goiania',
            'amniocentese-goiania'
        ],
        faq: [
            {
                question: 'Morfológico normal garante bebê sem problemas?',
                answer: 'Não. Detecta 80-85% das malformações. Algumas só aparecem no 3º trimestre ou após nascimento. Mas é o exame mais completo disponível.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '40-60 minutos'
    },
    {
        title: 'Ultrassom Morfológico de Terceiro Trimestre',
        slug: 'ultrassom-morfologico-terceiro-trimestre-goiania',
        description: 'Avaliação do crescimento e bem-estar fetal no final da gestação.',
        category: 'exame',
        metaTitle: 'Ultrassom Morfológico 3º Trimestre Goiânia | Dr. Jony Barbosa',
        metaDescription: 'Morfológico de terceiro trimestre em Goiânia. Avaliação de crescimento e vitalidade fetal. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'morfológico terceiro trimestre goiânia',
            'ultrassom 32 semanas goiás',
            'crescimento fetal goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/ultrassom-morfologico-terceiro-trimestre-goiania',
        longDescription: 'Avaliação entre 28-34 semanas focada em crescimento fetal, vitalidade e preparo para o parto.',
        whatIsIt: 'Ultrassom realizado entre 28-34 semanas que avalia crescimento fetal (peso estimado), líquido amniótico, placenta, Doppler de artérias umbilical e cerebral média, e posição fetal. Detecta restrição de crescimento, macrossomia e malformações tardias.',
        whoNeedsIt: [
            'Gestações de alto risco',
            'Suspeita de restrição de crescimento',
            'Diabetes gestacional (risco de macrossomia)',
            'Oligoâmnio ou polidrâmnio',
            'Preparo para parto'
        ],
        howItWorks: [
            'Biometria fetal completa (peso estimado)',
            'Avaliação do líquido amniótico',
            'Doppler das artérias umbilical, cerebral média e uterinas',
            'Avaliação de placenta e maturidade',
            'Posição fetal (cefálico, pélvico, transverso)'
        ],
        benefits: [
            'Identifica restrição de crescimento',
            'Detecta macrossomia (bebê grande)',
            'Avalia vitalidade fetal',
            'Auxilia planejamento do parto',
            'Últimas imagens 4D nítidas'
        ],
        relatedServices: [
            'ultrassom-obstetrico-doppler-goiania',
            'gestacao-alto-risco-goiania',
            'obstetricia-goiania'
        ],
        faq: [
            {
                question: 'O peso estimado no ultrassom é confiável?',
                answer: 'Tem margem de erro de ±10-15%. Bebês muito grandes ou muito pequenos podem ter erro maior. Mas é a melhor estimativa disponível.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '30-40 minutos'
    },
    {
        title: 'Ultrassom Obstétrico com Doppler',
        slug: 'ultrassom-obstetrico-doppler-goiania',
        description: 'Avaliação do fluxo sanguíneo placentário e fetal para detectar insuficiência.',
        category: 'exame',
        metaTitle: 'Ultrassom Doppler Obstétrico Goiânia | Dr. Jony Barbosa',
        metaDescription: 'Doppler obstétrico em Goiânia. Avaliação de fluxo sanguíneo fetal e placentário. Dr. Jony Barbosa especialista. Agende: (62) 9950-4788',
        keywords: [
            'doppler obstétrico goiânia',
            'ultrassom doppler goiás',
            'doppler fetal goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/ultrassom-obstetrico-doppler-goiania',
        longDescription: 'O Doppler avalia fluxo sanguíneo nas artérias uterinas, umbilical e cerebrais fetais.',
        whatIsIt: 'Ultrassom especializado que mede velocidade do fluxo sanguíneo em vasos maternos e fetais. Detecta precocemente insuficiência placentária, restrição de crescimento e prediz pré-eclâmpsia. Essencial em gestações de alto risco.',
        whoNeedsIt: [
            'Restrição de crescimento fetal',
            'Hipertensão materna ou pré-eclâmpsia',
            'Diabetes gestacional',
            'Gestação gemelar',
            'Oligoâmnio',
            'Doppler de artérias uterinas alterado no 2º trimestre'
        ],
        howItWorks: [
            'Ultrassom convencional + Doppler colorido',
            'Avaliação de artérias uterinas (maternas)',
            'Artéria umbilical (placenta-feto)',
            'Artéria cerebral média fetal',
            'Ducto venoso em casos específicos',
            'Cálculo de índices de resistência'
        ],
        benefits: [
            'Detecta insuficiência placentária precocemente',
            'Prevê risco de pré-eclâmpsia',
            'Orienta momento do parto em CIUR',
            'Evita mortalidade fetal por hipóxia',
            'Não invasivo e sem risco'
        ],
        relatedServices: [
            'gestacao-alto-risco-goiania',
            'medicina-fetal-goiania',
            'ultrassom-morfologico-terceiro-trimestre-goiania'
        ],
        faq: [
            {
                question: 'Doppler alterado significa que o bebê está em risco?',
                answer: 'Não necessariamente. Alteração leve requer acompanhamento mais frequente. Alterações graves (diástole zero ou reversa) podem indicar necessidade de parto antecipado.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '20-30 minutos'
    },
    {
        title: 'Ultrassom Obstétrico Transvaginal',
        slug: 'ultrassom-obstetrico-transvaginal-goiania',
        description: 'Ultrassom pela via vaginal para avaliação do colo uterino e gestação inicial.',
        category: 'exame',
        metaTitle: 'Ultrassom Transvaginal Obstétrico Goiânia | Dr. Jony Barbosa',
        metaDescription: 'Ultrassom transvaginal obstétrico em Goiânia. Avaliação de colo uterino e gestação inicial. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'ultrassom transvaginal goiânia',
            'medida colo uterino goiás',
            'ultrassom início gestação goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/exames/ultrassom-obstetrico-transvaginal-goiania',
        longDescription: 'Ultrassom pela via vaginal oferece imagens mais nítidas do colo e gestação precoce.',
        whatIsIt: 'Ultrassom realizado com transdutor inserido no canal vaginal. No início da gestação (até 12 semanas) fornece imagens mais nítidas que o abdominal. Após 12 semanas é usado principalmente para medir colo uterino e predizer parto prematuro.',
        whoNeedsIt: [
            'Gestação inicial (<12 semanas)',
            'Suspeita de gravidez ectópica',
            'Sangramento no primeiro trimestre',
            'Medida de colo uterino (risco de parto prematuro)',
            'Histórico de parto prematuro anterior'
        ],
        howItWorks: [
            'Introdução de transdutor com protetor no canal vaginal',
            'Visualização do útero e anexos',
            'Confirmação de gestação tópica',
            'Medida do comprimento do colo uterino',
            'Avaliação de placenta quando inserção baixa'
        ],
        benefits: [
            'Imagens nítidas da gestação inicial',
            'Detecta gestação ectópica precocemente',
            'Prediz risco de parto prematuro (colo <25mm)',
            'Confortável (maioria das pacientes não sente desconforto)'
        ],
        relatedServices: [
            'obstetricia-goiania',
            'gestacao-alto-risco-goiania',
            'ultrassom-morfologico-primeiro-trimestre-goiania'
        ],
        faq: [
            {
                question: 'Ultrassom transvaginal pode machucar o bebê?',
                answer: 'Não. É completamente seguro em qualquer fase da gestação. O transdutor não chega perto do bebê, apenas visualiza útero e colo.'
            }
        ],
        schemaType: 'MedicalTest',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '10-15 minutos'
    },
    // ============================================
    // SERVIÇOS/PROCEDIMENTOS (6)
    // ============================================
    {
        title: 'Avaliação Fetal',
        slug: 'avaliacao-fetal-goiania',
        description: 'Avaliação completa do bem-estar e desenvolvimento fetal.',
        category: 'servico',
        metaTitle: 'Avaliação Fetal em Goiânia | Dr. Jony Barbosa - Medicina Fetal',
        metaDescription: 'Avaliação fetal completa em Goiânia: ultrassom, Doppler, perfil biofísico. Dr. Jony Barbosa especialista. Agende: (62) 9950-4788',
        keywords: [
            'avaliação fetal goiânia',
            'bem-estar fetal goiás',
            'perfil biofísico fetal goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/servicos/avaliacao-fetal-goiania',
        longDescription: 'Avaliação fetal abrangente combinando ultrassom, Doppler e cardiotocografia.',
        whatIsIt: 'Consulta especializada de medicina fetal que combina ultrassonografia morfológica, Doppler de vasos fetais e placentários, perfil biofísico fetal (movimentos, tônus, respiração, líquido) e cardiotocografia. Fornece panorama completo da saúde fetal.',
        whoNeedsIt: [
            'Gestações de alto risco',
            'Diminuição de movimentos fetais',
            'Pós-datismo (gestação >40 semanas)',
            'Restrição de crescimento',
            'Diabetes ou hipertensão materna'
        ],
        howItWorks: [
            'Ultrassom para biometria e líquido amniótico',
            'Avaliação de movimentos, tônus e movimentos respiratórios fetais',
            'Doppler de artérias umbilical e cerebral',
            'Cardiotocografia (monitoramento de batimentos)',
            'Cálculo de escore de bem-estar fetal'
        ],
        benefits: [
            'Avaliação completa da vitalidade fetal',
            'Identifica sofrimento fetal precocemente',
            'Orienta decisão sobre momento do parto',
            'Evita mortalidade fetal'
        ],
        relatedServices: [
            'medicina-fetal-goiania',
            'ultrassom-obstetrico-doppler-goiania',
            'gestacao-alto-risco-goiania'
        ],
        faq: [
            {
                question: 'Quando fazer avaliação fetal?',
                answer: 'Em gestações de risco após 32 semanas, semanalmente ou conforme indicação. Em gestações normais, quando há queixa de diminuição de movimentos ou após 40 semanas.'
            }
        ],
        schemaType: 'MedicalProcedure',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '45-60 minutos'
    },
    {
        title: 'Consulta Médica',
        slug: 'consulta-medica-goiania',
        description: 'Consulta ginecológica ou obstétrica completa com Dr. Jony Barbosa.',
        category: 'servico',
        metaTitle: 'Consulta Médica em Goiânia | Dr. Jony Barbosa - Ginecologista e Obstetra',
        metaDescription: 'Consulta ginecológica e obstétrica em Goiânia. Atendimento humanizado com Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'consulta ginecológica goiânia',
            'consulta obstetra goiás',
            'médico ginecologista goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/servicos/consulta-medica-goiania',
        longDescription: 'Consulta completa de ginecologia ou obstetrícia com tempo estendido e atendimento humanizado.',
        whatIsIt: 'Consulta médica com tempo adequado para ouvir suas queixas, realizar exame físico completo, solicitar exames complementares e discutir plano terapêutico. Inclui ultrassom quando necessário. Dr. Jony prioriza consultas sem pressa para esclarecer todas dúvidas.',
        whoNeedsIt: [
            'Primeira consulta ginecológica',
            'Pré-natal de rotina ou alto risco',
            'Queixas ginecológicas (dor, corrimento, irregularidade)',
            'Planejamento contraceptivo',
            'Menopausa e reposição hormonal'
        ],
        howItWorks: [
            'Anamnese detalhada',
            'Exame físico ginecológico quando indicado',
            'Ultrassom transvaginal ou obstétrico conforme necessidade',
            'Solicitação de exames complementares',
            'Discussão de plano terapêutico',
            'Orientações e prescrições'
        ],
        benefits: [
            'Consultas sem pressa com tempo adequado',
            'Atendimento humanizado e acolhedor',
            'Ultrassom incluído quando necessário',
            'Disponibilidade via WhatsApp para dúvidas',
            'Documentação para reembolso'
        ],
        relatedServices: [
            'ginecologia-goiania',
            'obstetricia-goiania',
            'ultrassonografia-goiania'
        ],
        faq: [
            {
                question: 'Quanto tempo dura a consulta?',
                answer: 'Primeira consulta: 40-60 minutos. Retornos: 30-40 minutos. Dr. Jony não marca consultas em intervalos curtos para garantir tempo adequado.'
            }
        ],
        schemaType: 'MedicalTherapy',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '30-60 minutos'
    },
    {
        title: 'Histerectomia',
        slug: 'histerectomia-goiania',
        description: 'Cirurgia de remoção do útero por via videolaparoscópica em Goiânia.',
        category: 'servico',
        metaTitle: 'Histerectomia em Goiânia | Dr. Jony Barbosa - Cirurgia Ginecológica',
        metaDescription: 'Histerectomia videolaparoscópica em Goiânia. Cirurgia minimamente invasiva com Dr. Jony Barbosa. Agende consulta: (62) 9950-4788',
        keywords: [
            'histerectomia goiânia',
            'retirada útero goiás',
            'cirurgia ginecológica goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/servicos/histerectomia-goiania',
        longDescription: 'Cirurgia de remoção do útero, preferencialmente por via videolaparoscópica (minimamente invasiva).',
        whatIsIt: 'Histerectomia é cirurgia que remove o útero. Pode ser total (útero + colo) ou subtotal (preserva colo). Dr. Jony realiza preferencialmente por videolaparoscopia (pequenas incisões) ao invés de cirurgia aberta, resultando em menor dor, recuperação mais rápida e cicatrizes mínimas.',
        whoNeedsIt: [
            'Miomas volumosos com sangramento intenso',
            'Adenomiose refratária a tratamento clínico',
            'Prolapso uterino grave',
            'Sangramento uterino anormal sem resposta a tratamento',
            'Câncer de endométrio ou colo (após avaliação oncológica)'
        ],
        howItWorks: [
            'Consulta pré-operatória com exames',
            'Cirurgia sob anestesia geral',
            '3-4 pequenas incisões (0,5-1cm) no abdome',
            'Remoção do útero por via laparoscópica',
            'Internação de 1-2 dias',
            'Recuperação completa em 2-4 semanas'
        ],
        benefits: [
            'Via laparoscópica: menor dor pós-operatória',
            'Recuperação mais rápida',
            'Cicatrizes mínimas (estética)',
            'Menor risco de infecção',
            'Retorno às atividades em 2-3 semanas'
        ],
        relatedServices: [
            'videolaparoscopia-goiania',
            'consulta-medica-goiania',
            'ginecologia-goiania'
        ],
        faq: [
            {
                question: 'Histerectomia causa menopausa?',
                answer: 'Não. Menopausa ocorre quando ovários param de funcionar. Na histerectomia removemos útero, mas ovários são preservados. Você continua ovulando normalmente, apenas não menstrua mais.'
            }
        ],
        schemaType: 'MedicalProcedure',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '90-120 minutos (cirurgia)'
    },
    {
        title: 'Histeroscopia',
        slug: 'histeroscopia-goiania',
        description: 'Visualização interna do útero com câmera para diagnóstico e tratamento.',
        category: 'servico',
        metaTitle: 'Histeroscopia em Goiânia | Dr. Jony Barbosa - Diagnóstica e Cirúrgica',
        metaDescription: 'Histeroscopia diagnóstica e cirúrgica em Goiânia. Remoção de pólipos e miomas. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'histeroscopia goiânia',
            'remoção pólipo útero goiás',
            'histeroscopia cirúrgica goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/servicos/histeroscopia-goiania',
        longDescription: 'Exame e procedimento que permite visualizar e tratar o interior do útero.',
        whatIsIt: 'Histeroscopia introduz câmera fina pelo colo uterino para visualizar cavidade uterina. Pode ser diagnóstica (apenas visualização) ou cirúrgica (remove pólipos, miomas submucosos, septo uterino). Feita ambulatorialmente ou com sedação conforme complexidade.',
        whoNeedsIt: [
            'Sangramento uterino anormal',
            'Pólipos endometriais',
            'Mioma submucoso',
            'Sinéquias (aderências intrauterinas)',
            'Investigação de infertilidade',
            'Abortos de repetição'
        ],
        howItWorks: [
            'Histeroscopia diagnóstica: ambulatorial, anestesia local',
            'Histeroscopia cirúrgica: sedação ou anestesia geral',
            'Introdução de histeroscópio pelo colo uterino',
            'Visualização da cavidade e ressecção de lesões',
            'Procedimento dura 10-30 minutos',
            'Alta no mesmo dia'
        ],
        benefits: [
            'Diagnóstico e tratamento em mesmo procedimento',
            'Minimamente invasivo (sem incisões)',
            'Recuperação rápida (1-3 dias)',
            'Resolve sangramento anormal',
            'Melhora fertilidade quando há lesões intrauterinas'
        ],
        relatedServices: [
            'videolaparoscopia-goiania',
            'ginecologia-goiania',
            'consulta-medica-goiania'
        ],
        faq: [
            {
                question: 'Histeroscopia dói?',
                answer: 'A diagnóstica ambulatorial causa desconforto leve tipo cólica. A cirúrgica é feita com sedação/anestesia, então não há dor durante. Após, cólica leve controlada com analgésicos.'
            }
        ],
        schemaType: 'MedicalProcedure',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '15-30 minutos'
    },
    {
        title: 'Videolaparoscopia',
        slug: 'videolaparoscopia-goiania',
        description: 'Cirurgia ginecológica minimamente invasiva por pequenas incisões.',
        category: 'servico',
        metaTitle: 'Videolaparoscopia em Goiânia | Dr. Jony Barbosa - Cirurgia Minimamente Invasiva',
        metaDescription: 'Videolaparoscopia ginecológica em Goiânia. Tratamento de endometriose, cistos, miomas. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'videolaparoscopia goiânia',
            'cirurgia minimamente invasiva goiás',
            'endometriose laparoscopia goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/servicos/videolaparoscopia-goiania',
        longDescription: 'Cirurgia através de 3-4 pequenas incisões com câmera e instrumentos especializados.',
        whatIsIt: 'Videolaparoscopia é técnica cirúrgica que utiliza câmera e instrumentos finos inseridos por pequenas incisões (0,5-1cm) no abdome. Permite tratar endometriose, cistos ovarianos, miomas, gravidez ectópica, laqueadura tubária e outras condições com mínimo trauma.',
        whoNeedsIt: [
            'Endometriose com dor pélvica crônica',
            'Cistos ovarianos >5cm ou suspeitos',
            'Miomas pediculados ou subserosos',
            'Gravidez ectópica íntegra',
            'Investigação de infertilidade (verificar tubas)',
            'Laqueadura tubária definitiva'
        ],
        howItWorks: [
            'Cirurgia sob anestesia geral',
            '3-4 pequenas incisões no abdome',
            'Insuflação de CO2 para criar espaço',
            'Câmera HD e instrumentos cirúrgicos especializados',
            'Realização do procedimento visualizando em monitor',
            'Internação de 12-24 horas',
            'Recuperação em 7-14 dias'
        ],
        benefits: [
            'Incisões mínimas (melhor estética)',
            'Menos dor pós-operatória',
            'Recuperação 3-4x mais rápida que cirurgia aberta',
            'Menor risco de aderências',
            'Retorno ao trabalho em 1-2 semanas'
        ],
        relatedServices: [
            'histerectomia-goiania',
            'consulta-medica-goiania',
            'ginecologia-goiania'
        ],
        faq: [
            {
                question: 'Quanto tempo de recuperação da videolaparoscopia?',
                answer: 'Depende do procedimento. Cirurgias simples: 7-10 dias. Cirurgias complexas (endometriose avançada): 2-3 semanas. Sempre menor que cirurgia aberta equivalente.'
            }
        ],
        schemaType: 'MedicalProcedure',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '60-180 minutos (conforme procedimento)'
    },
    {
        title: 'Videohisteroscopia',
        slug: 'videohisteroscopia-goiania',
        description: 'Histeroscopia com sistema de vídeo de alta definição para diagnóstico e cirurgia.',
        category: 'servico',
        metaTitle: 'Videohisteroscopia em Goiânia | Dr. Jony Barbosa',
        metaDescription: 'Videohisteroscopia diagnóstica e cirúrgica em Goiânia com alta definição. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'videohisteroscopia goiânia',
            'histeroscopia hd goiás',
            'pólipo útero cirurgia goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/servicos/videohisteroscopia-goiania',
        longDescription: 'Histeroscopia com câmera de alta definição e sistema de vídeo para precisão diagnóstica.',
        whatIsIt: 'Videohisteroscopia é histeroscopia realizada com sistema de vídeo HD que permite visualização ampliada e detalhada da cavidade uterina. A imagem ampliada facilita identificação de lesões pequenas e melhora precisão cirúrgica na remoção de pólipos, miomas e septos.',
        whoNeedsIt: [
            'Sangramento uterino anormal',
            'Pólipos endometriais',
            'Espessamento endometrial em pós-menopausa',
            'Mioma submucoso pequeno',
            'Septo uterino',
            'Remoção de DIU retido'
        ],
        howItWorks: [
            'Sistema de vídeo HD conectado ao histeroscópio',
            'Visualização ampliada em monitor',
            'Permite documentação em foto/vídeo',
            'Maior precisão na ressecção de lesões',
            'Mesma técnica da histeroscopia, com melhor visualização'
        ],
        benefits: [
            'Imagem HD permite detectar lesões menores',
            'Documentação visual para acompanhamento',
            'Maior precisão cirúrgica',
            'Paciente pode ver imagens após (se desejar)'
        ],
        relatedServices: [
            'histeroscopia-goiania',
            'videolaparoscopia-goiania',
            'ginecologia-goiania'
        ],
        faq: [
            {
                question: 'Qual diferença entre histeroscopia e videohisteroscopia?',
                answer: 'Tecnicamente são a mesma coisa. "Vídeo" refere-se ao sistema de câmera HD acoplado. Atualmente a maioria das histeroscopias usa sistema de vídeo.'
            }
        ],
        schemaType: 'MedicalProcedure',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '15-30 minutos'
    },
    {
        title: 'Cirurgia Ginecológica',
        slug: 'cirurgia-ginecologica-goiania',
        description: 'Histerectomia, miomectomia e procedimentos minimamente invasivos.',
        category: 'servico',
        metaTitle: 'Cirurgia Ginecológica em Goiânia | Dr. Jony Barbosa',
        metaDescription: 'Cirurgia ginecológica minimamente invasiva em Goiânia: histerectomia, miomectomia, laparoscopia. Dr. Jony Barbosa. Agende: (62) 9950-4788',
        keywords: [
            'cirurgia ginecológica goiânia',
            'miomectomia goiás',
            'histerectomia laparoscópica goiânia'
        ],
        canonicalUrl: 'https://drjonybarbosa.com.br/servicos/cirurgia-ginecologica-goiania',
        longDescription: 'Cirurgias ginecológicas realizadas preferencialmente por técnicas minimamente invasivas.',
        whatIsIt: 'Conjunto de procedimentos cirúrgicos para tratamento de condições ginecológicas. Dr. Jony Barbosa é habilitado em cirurgias minimamente invasivas (videolaparoscopia e videohisteroscopia), que resultam em menor trauma, recuperação mais rápida e melhor resultado estético. Inclui histerectomia, miomectomia, tratamento de endometriose, cistos ovarianos e muito mais.',
        whoNeedsIt: [
            'Miomas uterinos sintomáticos',
            'Endometriose com dor pélvica',
            'Cistos ovarianos complexos ou volumosos',
            'Sangramento uterino anormal refratário',
            'Prolapso genital',
            'Necessidade de laqueadura tubária'
        ],
        howItWorks: [
            'Consulta pré-operatória detalhada',
            'Avaliação com exames de imagem (ultrassom/ressonância)',
            'Cirurgia sob anestesia geral',
            'Técnica minimamente invasiva quando possível',
            'Internação de 1-2 dias',
            'Acompanhamento pós-operatório'
        ],
        benefits: [
            'Preferência por técnicas minimamente invasivas',
            'Menor dor e trauma cirúrgico',
            'Recuperação mais rápida',
            'Cicatrizes menores',
            'Retorno precoce às atividades',
            'Menor risco de complicações'
        ],
        relatedServices: [
            'videolaparoscopia-goiania',
            'histerectomia-goiania',
            'histeroscopia-goiania'
        ],
        faq: [
            {
                question: 'Todas cirurgias podem ser feitas por videolaparoscopia?',
                answer: 'A maioria sim. Dr. Jony avalia cada caso individualmente. Algumas condições (massas muito volumosas, aderências extensas) podem necessitar cirurgia aberta, mas mesmo assim priorizamos a menor incisão possível.'
            },
            {
                question: 'Quanto tempo de afastamento após cirurgia ginecológica?',
                answer: 'Depende do procedimento. Histeroscopia: 3-5 dias. Laparoscopia simples: 7-14 dias. Histerectomia: 2-4 semanas. Sempre menor que cirurgia aberta equivalente.'
            }
        ],
        schemaType: 'MedicalProcedure',
        performedAt: 'Goiânia, Goiás',
        estimatedDuration: '60-180 minutos'
    }
];
function getServiceBySlug(slug) {
    return servicesExtended.find((service)=>service.slug === slug);
}
function getRelatedServices(service, limit = 3) {
    return service.relatedServices.map((slug)=>getServiceBySlug(slug)).filter((s)=>s !== undefined).slice(0, limit);
}
function getAllServicesByCategory(categorySlug) {
    const categoryMap = {
        'especialidades': 'especialidade',
        'exames': 'exame',
        'servicos': 'servico'
    };
    const categoryType = categoryMap[categorySlug];
    return servicesExtended.filter((service)=>service.category === categoryType);
}
}),
"[project]/src/components/ExamsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2d$extended$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services-extended.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const exames = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2d$extended$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesExtended"].filter((s)=>s.category === 'exame');
const ExamsSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "exames",
        className: "py-24 lg:py-32 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 lg:px-16 max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    id: "exames-slider",
                    title: "Exames Especializados",
                    subtitle: "Diagnóstico de Precisão com Tecnologia Avançada",
                    children: exames.map((exam, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            item: exam,
                            type: "exam"
                        }, i, false, {
                            fileName: "[project]/src/components/ExamsSection.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ExamsSection.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "accent",
                        href: "/exames",
                        children: "Ver Todos os Exames"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExamsSection.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ExamsSection.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ExamsSection.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ExamsSection.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ExamsSection;
}),
"[project]/src/components/ProceduresSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2d$extended$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services-extended.ts [app-ssr] (ecmascript)");
;
;
;
;
;
// Helper to filter and type items correctly
const procedimentos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2d$extended$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["servicesExtended"].filter((s)=>s.category === 'servico').filter((s)=>[
        'videolaparoscopia-goiania',
        'histeroscopia-goiania',
        'histerectomia-goiania',
        'videohisteroscopia-goiania'
    ].includes(s.slug));
const ProceduresSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "procedimentos",
        className: "py-24 lg:py-32 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 lg:px-16 max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    id: "procedimentos-slider",
                    title: "Procedimentos Cirúrgicos",
                    subtitle: "Cirurgias Minimamente Invasivas com Segurança",
                    children: procedimentos.map((proc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            item: proc,
                            type: "procedure",
                            linkText: "Saiba mais"
                        }, i, false, {
                            fileName: "[project]/src/components/ProceduresSection.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProceduresSection.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "primary",
                        href: "/servicos",
                        children: "Ver Todos os Procedimentos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProceduresSection.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProceduresSection.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProceduresSection.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ProceduresSection.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProceduresSection;
}),
"[project]/src/components/WhyChooseSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const WhyChooseSection = ()=>{
    const points = [
        {
            title: "Atendimento Humanizado",
            desc: "Escuta ativa e acolhimento em cada etapa do seu tratamento.",
            color: "bg-blue-500"
        },
        {
            title: "Tecnologia de Ponta",
            desc: "Equipamentos modernos para diagnósticos precisos e seguros.",
            color: "bg-secondary"
        },
        {
            title: "Localização Privilegiada",
            desc: "Clínicas nos principais bairros de Goiânia para sua conveniência.",
            color: "bg-primary"
        },
        {
            title: "Foco na Paciente",
            desc: "Planos de tratamento personalizados de acordo com sua realidade.",
            color: "bg-accent text-primary"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] -z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/WhyChooseSection.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] -z-0"
            }, void 0, false, {
                fileName: "[project]/src/components/WhyChooseSection.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 text-accent text-sm font-bold tracking-wide uppercase backdrop-blur-md",
                                    children: "Diferenciais"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl lg:text-5xl font-serif font-bold mb-8 leading-tight",
                                    children: [
                                        "Por que escolher o ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-secondary",
                                            children: "Dr. Jony Barbosa"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WhyChooseSection.tsx",
                                            lineNumber: 40,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-slate-300 mb-12 leading-relaxed",
                                    children: "Combinamos décadas de experiência clínica com um olhar moderno e atencioso, garantindo que você se sinta segura e respeitada em todas as consultas."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-8",
                                    children: points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-12 rounded-xl ${point.color} flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg`,
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-white mb-2",
                                                            children: point.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WhyChooseSection.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-slate-400 leading-relaxed",
                                                            children: point.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WhyChooseSection.tsx",
                                                            lineNumber: 54,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/WhyChooseSection.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WhyChooseSection.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-primary/20 rounded-[3rem] blur-2xl -z-10"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-[3rem] border border-white/10 shadow-3xl bg-slate-800 p-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/dr-jony-profile.webp",
                                            alt: "Excelência médica",
                                            className: "w-full h-full object-cover rounded-[2.5rem]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/WhyChooseSection.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl text-slate-900 border border-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-primary mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "32",
                                                        height: "32",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.437.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/WhyChooseSection.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 122
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/WhyChooseSection.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "italic font-serif text-lg mb-4",
                                                    children: '"O Dr. Jony não apenas trata problemas, ele cuida de pessoas. Foi a primeira vez que me senti realmente ouvida por um médico."'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-bold text-primary uppercase tracking-widest",
                                                    children: "— Maria Eduarda, Goiânia"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/WhyChooseSection.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/WhyChooseSection.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/WhyChooseSection.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/WhyChooseSection.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WhyChooseSection.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = WhyChooseSection;
}),
"[project]/src/components/VideoSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const VideoSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-slate-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-serif text-primary mb-8 font-bold",
                    children: "Como funciona o atendimento com o Dr. Jony?"
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoSection.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative aspect-video",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        className: "absolute inset-0 w-full h-full",
                        src: "https://www.youtube.com/embed/ie829MJ0BC0?si=G0K90b9mKHz0O7oG",
                        title: "Dr. Jony Barbosa - Institucional",
                        frameBorder: "0",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/VideoSection.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/VideoSection.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/VideoSection.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/VideoSection.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VideoSection;
}),
"[project]/src/data/site-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "businessHours",
    ()=>businessHours,
    "contactInfo",
    ()=>contactInfo,
    "exams",
    ()=>exams,
    "faqs",
    ()=>faqs,
    "navLinks",
    ()=>navLinks,
    "procedures",
    ()=>procedures,
    "services",
    ()=>services,
    "socialLinks",
    ()=>socialLinks,
    "whyChooseReasons",
    ()=>whyChooseReasons
]);
const services = [
    {
        title: "Pré-natal de Alto Risco",
        slug: "pre-natal-alto-risco-goiania",
        description: "Acompanhamento especializado para gestações complexas em Goiânia."
    },
    {
        title: "Ginecologia da Adolescência",
        slug: "ginecologista-adolescencia-goiania",
        description: "Cuidado delicado e educativo para jovens."
    },
    {
        title: "Inserção de DIU/Mirena",
        slug: "insercao-diu-mirena-goiania",
        description: "Métodos contraceptivos de longa duração com segurança."
    },
    {
        title: "Implantes Hormonais",
        slug: "implantes-hormonais-goiania",
        description: "Implanon e outras terapias de reposição hormonal."
    }
];
const exams = [
    {
        title: "Cordocentese",
        slug: "cordocentese-goiania",
        description: "Diagnóstico fetal avançado realizado com precisão."
    },
    {
        title: "Exame FISH",
        slug: "exame-fish-genetica-goiania",
        description: "Análise genética rápida para saúde do bebê."
    },
    {
        title: "Ultrassom Obstétrico",
        slug: "ultrassom-obstetrico-goiania",
        description: "Tecnologia 4D/5D para ver seu bebê em detalhes."
    },
    {
        title: "NIPT",
        slug: "nipt-teste-prenatal-goiania",
        description: "Triagem pré-natal não invasiva de alta confiabilidade."
    }
];
const procedures = [
    {
        title: "Laqueadura Tubária",
        slug: "laqueadura-tubaria-goiania",
        description: "Planejamento familiar definitivo com cirurgia segura."
    },
    {
        title: "Ninfoplastia",
        slug: "ninfoplastia-goiania",
        description: "Cirurgia íntima para conforto e estética feminina."
    },
    {
        title: "Parto Cesariana",
        slug: "parto-cesariana-humanizada-goiania",
        description: "Parto cirúrgico humanizado e respeitoso."
    },
    {
        title: "Cirurgia Ginecológica",
        slug: "cirurgia-ginecologica-goiania",
        description: "Histerectomia, miomectomia e procedimentos minimamente invasivos."
    }
];
const faqs = [
    {
        question: "Como funciona a consulta com Dr. Jony em Goiânia?",
        answer: "A consulta é realizada no Setor Aeroporto ou Marista, com duração estendida para ouvir todas as suas queixas, realizar exame físico completo e ultrassonografia se necessário."
    },
    {
        question: "Como faço para agendar uma consulta particular?",
        answer: "O agendamento pode ser feito via WhatsApp ou telefone. Priorizamos horários flexíveis para atender sua rotina."
    },
    {
        question: "Dr. Jony atende Unimed ou outros convênios?",
        answer: "Atendemos na modalidade particular e oferecemos toda a documentação necessária para que você solicite o reembolso junto ao seu plano de saúde (Unimed, Bradesco, Sulamérica, etc)."
    },
    {
        question: "O Dr. Jony faz parto normal e humanizado?",
        answer: "Sim! O Dr. Jony é defensor do parto adequado, seja normal ou cesariana, sempre priorizando a segurança da mãe e do bebê e respeitando o plano de parto."
    },
    {
        question: "Onde são realizados os partos?",
        answer: "Os partos são realizados nas melhores maternidades de Goiânia, como Fetal Center, Hospital Premium, e outras de sua preferência."
    },
    {
        question: "Qual o valor da inserção do DIU em Goiânia?",
        answer: "Para valores atualizados de procedimentos como DIU de Cobre, Mirena ou Kyleena, por favor entre em contato com nossa equipe via WhatsApp."
    }
];
const contactInfo = {
    phone: "(62) 3070-5555 / (62) 3224-5276 / (62) 99613-6640",
    email: "contato@drjonybarbosa.com.br",
    address: "Fetalcenter Centro Médico Goiânia (St. Bueno) e FetalCenter (St. Aeroporto) - Goiânia - GO"
};
const navLinks = [
    {
        label: "Início",
        href: "#home"
    },
    {
        label: "Ginecologista",
        href: "#ginecologista"
    },
    {
        label: "Obstetra",
        href: "#obstetra"
    },
    {
        label: "Serviços",
        href: "#servicos"
    },
    {
        label: "Exames",
        href: "#exames"
    },
    {
        label: "Sobre",
        href: "#sobre"
    },
    {
        label: "Procedimentos",
        href: "#procedimentos"
    }
];
const blogPosts = [
    {
        title: "Doppler na Gestação: quando fazer?",
        excerpt: "Por Dr. Jony - Ginecologista e Obstetra. Se você está grávida, pode ser que já tenha ouvido falar no exame...",
        slug: "doppler-na-gestacao"
    },
    {
        title: "O que é o exame Doppler?",
        excerpt: "Por Dr. Jony - Ginecologista e Obstetra. Muitas pacientes me perguntam sobre o exame Doppler na gestação...",
        slug: "o-que-e-exame-doppler"
    }
];
const businessHours = [
    {
        day: "Segunda-feira",
        hours: "07:00-18:00"
    },
    {
        day: "Terça-feira",
        hours: "07:00-18:00"
    },
    {
        day: "Quarta-feira",
        hours: "07:00-18:00"
    },
    {
        day: "Quinta-feira",
        hours: "07:00-18:00"
    },
    {
        day: "Sexta-feira",
        hours: "07:00-18:00"
    },
    {
        day: "Sábado",
        hours: "Fechado",
        isClosed: true
    },
    {
        day: "Domingo",
        hours: "Fechado",
        isClosed: true
    }
];
const socialLinks = [
    {
        platform: 'instagram',
        url: '#'
    },
    {
        platform: 'facebook',
        url: '#'
    },
    {
        platform: 'youtube',
        url: '#'
    }
];
const whyChooseReasons = [
    "Consultas sem pressa",
    "Espaço para tirar dúvidas",
    "Apoio profissional de verdade",
    "Acompanhamento em todos os momentos"
];
}),
"[project]/src/components/FaqSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site-data.ts [app-ssr] (ecmascript)");
"use client";
"use client";
;
;
;
const FaqSection = ()=>{
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "py-24 bg-blue-50/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 max-w-4xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl lg:text-5xl font-serif font-bold text-primary mb-4",
                            children: "Perguntas Frequentes (FAQ)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FaqSection.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 bg-secondary/30 w-16 mx-auto mb-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FaqSection.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FaqSection.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faqs"].map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm transition-all",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenIndex(openIndex === i ? null : i),
                                    className: "w-full px-8 py-6 flex items-center justify-between text-left group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-primary group-hover:text-secondary transition-colors",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqSection.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center transition-all ${openIndex === i ? 'rotate-180 bg-secondary text-white border-secondary' : 'text-slate-400'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "m6 9 6 6 6-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FaqSection.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 199
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FaqSection.tsx",
                                                lineNumber: 30,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqSection.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FaqSection.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96' : 'max-h-0'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4",
                                        children: faq.answer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FaqSection.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqSection.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/FaqSection.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/FaqSection.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FaqSection.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/FaqSection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FaqSection;
}),
"[project]/src/components/CtaSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
;
;
const CtaSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 lg:py-32 relative overflow-hidden bg-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/dr-jony-profile.webp",
                    alt: "Dr. Jony Barbosa",
                    className: "w-full h-full object-cover opacity-10 mix-blend-overlay"
                }, void 0, false, {
                    fileName: "[project]/src/components/CtaSection.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/CtaSection.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 relative z-10 text-center text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-5xl font-serif mb-6 font-bold leading-tight",
                        children: [
                            "Comece a sua jornada de ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent underline decoration-secondary",
                                children: "saúde e bem-estar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CtaSection.tsx",
                                lineNumber: 16,
                                columnNumber: 35
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CtaSection.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed",
                        children: "Consulta ginecológica particular com atendimento personalizado e possibilidade de reembolso pelo seu plano de saúde."
                    }, void 0, false, {
                        fileName: "[project]/src/components/CtaSection.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "accent",
                                className: "bg-[#25D366] text-white hover:bg-[#1ebe55] border-none shadow-2xl shadow-[#25D366]/20 px-10 py-5",
                                href: "https://wa.me/556299504788",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "mr-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CtaSection.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CtaSection.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Agendar no WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CtaSection.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "outline",
                                className: "border-white text-white hover:bg-white hover:text-primary px-10 py-5",
                                href: "/localizacao",
                                children: "Localização das Clínicas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CtaSection.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CtaSection.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CtaSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CtaSection.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CtaSection;
}),
"[project]/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site-data.ts [app-ssr] (ecmascript)");
;
;
const Footer = ({ clinic })=>{
    const clinicName = clinic ? clinic.name : "Dr. Jony Rodrigues Barbosa Ginecologista e Obstetra em Goiânia";
    const mapUrlToDisplay = clinic ? clinic.mapEmbedUrl : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.0269040169446!2d-49.26921852485097!3d-16.675537084095318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3c3787ab911%3A0x861f2a60dd5f0deb!2sDr.%20Jony%20Rodrigues%20Barbosa%20Ginecologista%20e%20Obstetra%20Goi%C3%A2nia!5e0!3m2!1spt-BR!2sbr!4v1773170528459!5m2!1spt-BR!2sbr";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "contato",
        className: "bg-slate-100 pt-20 pb-10 border-t border-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-serif text-primary font-bold",
                        children: clinicName
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-primary mb-4 text-xl",
                                    children: "Navegação"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                className: "hover:text-secondary",
                                                children: "Início"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 24,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/sobre",
                                                className: "hover:text-secondary",
                                                children: "Sobre o Dr. Jony"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/especialidades",
                                                className: "hover:text-secondary",
                                                children: "Especialidades"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 26,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/exames",
                                                className: "hover:text-secondary",
                                                children: "Exames"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/servicos",
                                                className: "hover:text-secondary",
                                                children: "Serviços e Cirurgias"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-primary mb-4 text-xl",
                                    children: "Bairros Atendidos"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/localizacao/ginecologista-setor-bueno-goiania",
                                                className: "hover:text-secondary",
                                                children: "Setor Bueno"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 35,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/localizacao/ginecologista-setor-marista-goiania",
                                                className: "hover:text-secondary",
                                                children: "Setor Marista"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/localizacao/ginecologista-setor-sul-goiania",
                                                className: "hover:text-secondary",
                                                children: "Setor Sul"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/localizacao/ginecologista-setor-oeste-goiania",
                                                className: "hover:text-secondary",
                                                children: "Setor Oeste"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/localizacao/ginecologista-alphaville-flamboyant-goiania",
                                                className: "hover:text-secondary",
                                                children: "Alphaville Flamboyant"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        clinic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2 bg-blue-200/20 p-8 rounded-xl flex flex-col justify-start h-fit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-primary mb-4 text-xl flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 47,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 46,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        clinic.phone
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600 mb-2 font-medium",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactInfo"].email
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-500 text-sm tracking-wide leading-relaxed",
                                    children: clinic.address
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-200/20 p-6 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-primary mb-2 text-lg",
                                            children: "FetalCenter Medicina Fetal e Ultrassonografia Goiânia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 font-medium text-primary mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "text-secondary",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "(62) 3224-5276"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://api.whatsapp.com/send?phone=556296136640",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-2 flex justify-start items-center gap-1",
                                                            children: "(62) 99613-6640 (WhatsApp)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-sm tracking-wide leading-relaxed mb-1",
                                            children: "contato@fetalcenter.com.br"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-sm tracking-wide leading-relaxed",
                                            children: "Rua 3A, Policlínica São Luiz, 211 - St. Aeroporto, Goiânia - GO, 74075-090"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-200/20 p-6 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-bold text-primary mb-2 text-lg",
                                            children: "Fetalcenter Centro Médico Goiânia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 font-medium text-primary mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "text-secondary",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "(62) 3070-5555"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-sm tracking-wide leading-relaxed mb-1",
                                            children: "contato@fetalcentercentromedico.com.br"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-sm tracking-wide leading-relaxed",
                                            children: "Edificio Absolut Business Style - 2 Andar - Av. T-4, 1478 - St. Bueno, Goiânia - GO, 74230-030"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8 mt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:w-1/3 bg-slate-200/50 p-8 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "flex items-center gap-2 font-bold text-primary mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "12 6 12 12 16 14"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Horas:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-slate-600",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businessHours"].map((schedule)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: `flex justify-between ${schedule.isClosed ? 'font-bold text-slate-400' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        schedule.day,
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: schedule.hours
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, schedule.day, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:w-2/3 h-64 bg-slate-300 rounded-xl overflow-hidden relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: mapUrlToDisplay,
                                width: "100%",
                                height: "100%",
                                style: {
                                    border: 0
                                },
                                allowFullScreen: true,
                                loading: "lazy",
                                referrerPolicy: "no-referrer-when-downgrade",
                                className: "absolute inset-0 w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-slate-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-primary text-lg mb-1",
                                    children: "Dr. Jony Rodrigues Barbosa"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "CRM: 7652| RQE Nº 3900| RQE Nº 9229"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 md:mt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Copyright © 2025 Dr. Jony Rodrigues Barbosa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 mt-4 md:mt-0",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socialLinks"].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: social.url,
                                    className: "hover:text-accent cursor-pointer",
                                    "aria-label": social.platform,
                                    children: [
                                        social.platform === 'instagram' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "20",
                                                    height: "20",
                                                    x: "2",
                                                    y: "2",
                                                    rx: "5",
                                                    ry: "5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "17.5",
                                                    x2: "17.51",
                                                    y1: "6.5",
                                                    y2: "6.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        social.platform === 'facebook' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 141,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        social.platform === 'youtube' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "10 15 15 12 10 9 10 15"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, social.platform, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IntroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/IntroSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoriesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CategoriesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutDoctor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AboutDoctor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServicesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExamsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExamsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProceduresSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProceduresSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhyChooseSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WhyChooseSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VideoSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FaqSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FaqSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CtaSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CtaSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col font-sans text-slate-600",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$IntroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoriesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutDoctor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServicesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExamsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProceduresSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhyChooseSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VideoSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FaqSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CtaSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b741a3b9._.js.map