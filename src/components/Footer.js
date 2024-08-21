"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const DualColumnPage_1 = __importDefault(require("./DualColumnPage"));
const util_1 = require("../utils/util");
require("../styles/Footer.css");
const LanguageContext_1 = require("../contexts/LanguageContext");
/*
 * Footer
 */
function Footer() {
    const locale = (0, LanguageContext_1.useLanguageContext)();
    const content = (0, jsx_runtime_1.jsxs)("div", { className: 'footer-content', children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("h1", { className: 'white', children: locale.FooterHeader }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'contact-section', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'white', children: locale.Contact }), (0, jsx_runtime_1.jsxs)("div", { className: 'contact', children: [(0, jsx_runtime_1.jsx)("h4", { className: 'white nomargin', children: locale.Email }), (0, jsx_runtime_1.jsx)("p", { className: 'white nomargin', children: "christofferbillman@gmail.com" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'contact', children: [(0, jsx_runtime_1.jsx)("h4", { className: 'white nomargin', children: locale.Phone }), (0, jsx_runtime_1.jsx)("p", { className: 'white nomargin', children: "070 577 22 97" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'contact', children: [(0, jsx_runtime_1.jsx)("h4", { className: 'white nomargin', children: "LinkedIn" }), (0, jsx_runtime_1.jsx)("p", { className: 'white nomargin', children: "Christoffer Billman" })] }), (0, jsx_runtime_1.jsxs)("p", { className: 'clickable-text', style: { marginTop: '3rem', marginBottom: '3rem' }, onClick: () => (0, util_1.scrollToElement)('landing'), children: [locale.ReturnToTop, " ^"] }), (0, jsx_runtime_1.jsx)("p", { style: { marginTop: '3em' }, className: 'white nomargin', children: "\u00A9 Christoffer Billman 2024" })] })] });
    return ((0, jsx_runtime_1.jsx)(DualColumnPage_1.default, { style: { background: 'var(--black)' }, id: 'footer', leftContent: content }));
}
exports.default = Footer;
