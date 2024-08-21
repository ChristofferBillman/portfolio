"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function DualColumnPage({ leftContent, rightContent, id, style }) {
    const [loaded] = (0, react_1.useState)(true);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: loaded ? ((0, jsx_runtime_1.jsxs)("div", { id: id, style: style, className: 'layout-grid-both', children: [(0, jsx_runtime_1.jsx)("div", { className: 'layout-content', children: leftContent }), (0, jsx_runtime_1.jsx)("div", { className: 'layout-content-both', children: rightContent })] })) : ((0, jsx_runtime_1.jsx)("div", { className: 'layout-grid', children: (0, jsx_runtime_1.jsx)("div", { className: 'layout-content', children: (0, jsx_runtime_1.jsx)("p", { children: "Laddar..." }) }) })) }));
}
exports.default = DualColumnPage;
