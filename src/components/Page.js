"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Gallery_1 = __importDefault(require("./Gallery"));
require("../styles/Gallery.css");
function Page({ children, img, style, useGallery, isFullscreen, setIsFullscreen, contentSide, id }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'layout-grid-container', id: id, children: [(0, jsx_runtime_1.jsxs)("div", { style: style, className: contentSide === 'left' ? 'layout-grid' : 'layout-grid-right', children: [(0, jsx_runtime_1.jsx)("div", { className: contentSide === 'left' ? 'layout-content' : 'layout-content-right', children: children }), (0, jsx_runtime_1.jsx)("div", { className: contentSide === 'left' ? 'banner-container' : 'banner-container-right', children: !useGallery && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'banner-mobile-overlay' }), (0, jsx_runtime_1.jsx)("img", { className: 'banner-img', src: img, alt: 'Christoffer' })] })) })] }), useGallery && ((0, jsx_runtime_1.jsx)("div", { className: `gallery-container ${isFullscreen ? 'gallery-container-fullscreen' : ''}`, style: contentSide === 'left' ? { right: 0 } : { left: 0 }, children: (0, jsx_runtime_1.jsx)(Gallery_1.default, { images: img, isFullscreen: isFullscreen, setIsFullscreen: setIsFullscreen }) }))] }));
}
exports.default = Page;
