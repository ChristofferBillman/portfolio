"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Page_1 = __importDefault(require("./Page"));
require("../styles/Animations.css");
const LanguageContext_1 = require("../contexts/LanguageContext");
/*
 * The landing page. The first page you see when the site loads.
 * Takes no props.
 */
function Landing() {
    const locale = (0, LanguageContext_1.useLanguageContext)();
    const setLang = (0, LanguageContext_1.useLanguageContextSetter)();
    const switchLanguage = () => {
        if (locale.Name === 'SE') {
            setLang('EN');
            return;
        }
        setLang('SE');
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("button", { id: "switchLang", className: 'clickable-text', onClick: switchLanguage, children: [locale.InOppositeLang, "?"] }), (0, jsx_runtime_1.jsx)(Page_1.default, { img: 'img/landing.webp', id: 'landing', useGallery: false, contentSide: 'left', children: (0, jsx_runtime_1.jsxs)("div", { className: 'inner-content-container', children: [(0, jsx_runtime_1.jsxs)("h1", { className: 'fadeIn stagger-1', children: ["Christoffer ", (0, jsx_runtime_1.jsx)("br", {}), "Billman"] }), (0, jsx_runtime_1.jsxs)("div", { style: { background: 'none' }, children: [(0, jsx_runtime_1.jsx)("h3", { className: 'fadeIn stagger-2', children: locale.EngineeringStudent }), (0, jsx_runtime_1.jsx)("h4", { className: 'justify-text fadeIn stagger-3', children: locale.LandingText }), (0, jsx_runtime_1.jsx)("div", { className: 'vertical-spacing' }), (0, jsx_runtime_1.jsxs)("div", { className: 'link-container fadeIn stagger-4', children: [(0, jsx_runtime_1.jsx)("a", { href: 'https://github.com/ChristofferBillman', target: '_blank', rel: 'noreferrer', children: "GitHub" }), (0, jsx_runtime_1.jsx)("a", { href: 'https://www.linkedin.com/in/christoffer-billman-840029212/', target: '_blank', rel: 'noreferrer', children: "LinkedIn" }), (0, jsx_runtime_1.jsx)("a", { href: locale.Name === "EN" ? 'CV Christoffer Billman EN.pdf' : 'CV Christoffer Billman SE.pdf', download: true, children: locale.DownloadCV })] }), (0, jsx_runtime_1.jsx)("div", { className: 'vertical-spacing' }), (0, jsx_runtime_1.jsx)("div", { className: 'center fadeIn stagger-5', children: (0, jsx_runtime_1.jsxs)("p", { className: 'attention-text', children: [locale.Scroll, "!"] }) })] })] }) })] }));
}
exports.default = Landing;
