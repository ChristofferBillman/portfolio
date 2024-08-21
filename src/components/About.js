"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Page_1 = __importDefault(require("./Page"));
const util_1 = require("../utils/util");
const LanguageContext_1 = require("../contexts/LanguageContext");
function About() {
    const locale = (0, LanguageContext_1.useLanguageContext)();
    return ((0, jsx_runtime_1.jsx)(Page_1.default, { img: './about2.webp', useGallery: false, contentSide: "left", children: (0, jsx_runtime_1.jsxs)("div", { style: { overflowY: 'scroll', height: '90vh', maxWidth: '500px', padding: '0 1rem 0 0' }, children: [(0, util_1.isMobile)() && (0, jsx_runtime_1.jsx)("div", { style: { height: '10rem' } }), (0, jsx_runtime_1.jsx)("h1", { children: locale.AboutTitle }), (0, jsx_runtime_1.jsxs)("p", { children: [" ", locale.AboutP1, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), locale.AboutP2, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), locale.AboutP3, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("b", { children: locale.AboutBold }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), locale.AboutP5, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), locale.AboutP6] })] }) }));
}
exports.default = About;
