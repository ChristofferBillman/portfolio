"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function CrossButton({ onClick, style }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'cross-button', onClick: onClick, style: style, children: (0, jsx_runtime_1.jsx)("img", { src: 'icons/cross.svg', alt: 'X' }) }));
}
exports.default = CrossButton;
