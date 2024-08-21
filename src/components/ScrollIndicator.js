"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../utils/util");
const UPDATE_INTERVAL = 1;
function ScrollIndicator({ length, orientation, viewRef, offset = 0, style, extraElement }) {
    if (offset === undefined)
        offset = 0;
    const [currentPage, setCurrentPage] = (0, react_1.useState)(0);
    // Runs on first render.
    (0, react_1.useEffect)(() => {
        let lastKnownScrollPosition = 0;
        let ticking = false;
        let widthOrHeight = 0;
        viewRef.current.addEventListener('scroll', () => {
            // since the scroll event fires very often, we need to debounce it.
            if (!ticking) {
                window.setTimeout(() => {
                    if (orientation === 'vertical') {
                        lastKnownScrollPosition = viewRef.current.scrollTop;
                        widthOrHeight = viewRef.current.clientHeight + offset;
                    }
                    else {
                        lastKnownScrollPosition = viewRef.current.scrollLeft;
                        widthOrHeight = viewRef.current.clientWidth + offset;
                    }
                    setCurrentPage(Math.round(lastKnownScrollPosition / widthOrHeight));
                    ticking = false;
                }, UPDATE_INTERVAL);
                ticking = true;
            }
        });
    }, [orientation, viewRef, offset, setCurrentPage]);
    const handlePageChange = nextPage => {
        let scrollDistance = 0;
        if (orientation === 'vertical') {
            scrollDistance = (viewRef.current.clientHeight + offset) * nextPage;
        }
        else {
            scrollDistance = (viewRef.current.clientWidth + offset) * nextPage;
        }
        (0, util_1.scrollTo)(scrollDistance, viewRef, orientation);
    };
    const getScrollIndicators = () => {
        const scrollIndicators = [];
        for (let i = 0; i < length; i++) {
            scrollIndicators.push((0, jsx_runtime_1.jsx)("div", { style: {
                    padding: '1rem 1rem 1rem 1rem',
                    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
                }, onClick: () => handlePageChange(i), children: (0, jsx_runtime_1.jsx)("div", { className: `scroll-indicator ${Number(currentPage) === i ?
                        orientation === 'vertical' ?
                            'scroll-indicator-current-vertical' :
                            'scroll-indicator-current-horizontal'
                        :
                            ''}` }) }, i));
        }
        return scrollIndicators;
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: orientation === 'vertical' ?
            'scroll-indicator-container' :
            'scroll-indicator-container row', style: style, children: [getScrollIndicators(), extraElement] }));
}
exports.default = ScrollIndicator;
