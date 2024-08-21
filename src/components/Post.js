"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Page_1 = __importDefault(require("./Page"));
const util_1 = require("../utils/util");
const LanguageContext_1 = require("../contexts/LanguageContext");
/*
 * A post. A wrapper for a Page, which takes props related to a post instead of children.
 *
 * Usage:
 * <Post {...post}/>
 *
 * Where post is an object with the props.
 *
 */
function Post({ name, title, subtitle, body, images, ghlink, tags, year, link }) {
    const [isFullscreen, setIsFullscreen] = (0, react_1.useState)(false);
    const locale = (0, LanguageContext_1.useLanguageContext)();
    let linkText;
    if (link && link.text) {
        linkText = link.text[locale.Name];
    }
    else {
        linkText = locale.VisitWebsite;
    }
    return ((0, jsx_runtime_1.jsx)(Page_1.default
    //name={name}
    , { 
        //name={name}
        img: images, useGallery: true, contentSide: 'left', isFullscreen: isFullscreen, setIsFullscreen: setIsFullscreen, id: name, children: (0, jsx_runtime_1.jsxs)("div", { className: 'inner-content-container', children: [(0, jsx_runtime_1.jsx)("h1", { children: title }), (0, jsx_runtime_1.jsxs)("div", { style: { background: 'none' }, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'link-container', children: [(0, jsx_runtime_1.jsx)("h3", { children: subtitle }), (0, jsx_runtime_1.jsx)("h4", { children: year })] }), (0, jsx_runtime_1.jsx)("div", { className: 'link-container', children: tags ? tags.map((tag, index) => (0, jsx_runtime_1.jsx)("p", { className: 'attention-text', children: tag }, index)) : '' }), (0, jsx_runtime_1.jsx)("p", { className: 'justify-text', children: body }), (0, jsx_runtime_1.jsxs)("div", { className: 'row gap-40', children: [ghlink ? (0, jsx_runtime_1.jsx)("a", { href: ghlink, target: '__blank', children: locale.SourceCode }) : '', link ? (0, jsx_runtime_1.jsx)("a", { href: link.url, target: '__blank', children: linkText }) : '', (0, util_1.isMobile)() ? ((0, jsx_runtime_1.jsx)("p", { className: 'clickable-text nomargin', onClick: () => { setIsFullscreen(true); (0, util_1.scrollToElement)(name); }, children: "Visa bilder" })) : null] })] })] }) }));
}
exports.default = Post;
