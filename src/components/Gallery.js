"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../styles/Gallery.css");
const ScrollIndicator_1 = __importDefault(require("./ScrollIndicator"));
const react_1 = require("react");
const Buttons_1 = require("./Buttons");
const util_1 = require("../utils/util");
function Gallery({ images, setIsFullscreen, isFullscreen }) {
    const galleryRef = (0, react_1.useRef)(null);
    return ((0, jsx_runtime_1.jsxs)("div", { className: `gallery ${isFullscreen ? 'gallery-fullscreen' : ''}`, children: [(0, jsx_runtime_1.jsx)("div", { className: 'gallery-controls', children: (0, jsx_runtime_1.jsx)("div", { style: {
                        position: 'absolute',
                        right: 0,
                        bottom: '6rem',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }, children: (!(0, util_1.isMobile)() || isFullscreen) &&
                        (0, jsx_runtime_1.jsx)(ScrollIndicator_1.default, { length: images.length, orientation: 'horizontal', viewRef: galleryRef, style: {
                                backgroundColor: 'rgba(255,255,255)',
                                boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)'
                            }, extraElement: isFullscreen ? (0, jsx_runtime_1.jsx)(Buttons_1.ShrinkButton, { onClick: () => setIsFullscreen(false) }) : (0, jsx_runtime_1.jsx)(Buttons_1.ExpandButton, { onClick: () => setIsFullscreen(true) }) }) }) }), (0, jsx_runtime_1.jsx)("div", { className: isFullscreen ? 'displaynone' : 'banner-mobile-overlay' }), (0, jsx_runtime_1.jsx)("div", { className: 'images-container', ref: galleryRef, children: images.map((image, index) => (0, jsx_runtime_1.jsx)("img", { loading: 'lazy', src: image, alt: 'gallery-img', className: `gallery-item ${isFullscreen ? 'gallery-item-fullscreen' : ''}` }, index)) })] }));
}
exports.default = Gallery;
