"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShrinkButton = exports.ExpandButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function ExpandButton({ onClick }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'expand-button', onClick: onClick, children: (0, jsx_runtime_1.jsx)("img", { className: 'expand-icon', src: 'icons/expand.svg', alt: 'Expand' }) }));
}
exports.ExpandButton = ExpandButton;
function ShrinkButton({ onClick }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'expand-button', onClick: onClick, children: (0, jsx_runtime_1.jsx)("img", { className: 'expand-icon', src: 'icons/shrink.svg', alt: 'Close' }) }));
}
exports.ShrinkButton = ShrinkButton;
