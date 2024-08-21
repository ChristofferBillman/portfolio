"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* Portfolio 4
 * Copyright (c) 2022 Christoffer Billman. All rights reserved.
*/
const react_1 = require("react");
const Landing_1 = __importDefault(require("./components/Landing"));
const ScrollIndicator_1 = __importDefault(require("./components/ScrollIndicator"));
const Footer_1 = __importDefault(require("./components/Footer"));
const Post_1 = __importDefault(require("./components/Post"));
const About_1 = __importDefault(require("./components/About"));
require("./styles/App.css");
require("./styles/Mobile.css");
require("./styles/Type.css");
const postsSE_1 = require("./data/postsSE");
const postsEN_1 = require("./data/postsEN");
const util_1 = require("./utils/util");
const LanguageContext_1 = require("./contexts/LanguageContext");
const useRainbow_1 = __importDefault(require("./hooks/useRainbow"));
function App() {
    const appRef = (0, react_1.useRef)(null);
    const locale = (0, LanguageContext_1.useLanguageContext)();
    const posts = locale.Name === 'SE' ? postsSE_1.postsSE : postsEN_1.postsEN;
    (0, useRainbow_1.default)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'App', ref: appRef, children: [(0, jsx_runtime_1.jsx)(Landing_1.default, {}), (0, jsx_runtime_1.jsx)(About_1.default, {}), posts.map((post, index) => (0, jsx_runtime_1.jsx)(Post_1.default, { ...post }, index)), (0, jsx_runtime_1.jsx)(Footer_1.default, {}), !(0, util_1.isMobile)() &&
                (0, jsx_runtime_1.jsx)(ScrollIndicator_1.default, { length: posts.length + 2, orientation: 'vertical', viewRef: appRef, offset: 6 * 16, style: {
                        position: 'fixed',
                        top: '50vh',
                        transform: 'translateY(-50%)',
                        left: '1rem',
                        padding: '1rem'
                    } })] }));
}
exports.default = App;
