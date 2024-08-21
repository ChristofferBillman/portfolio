"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function TransitionLifecycle({ children, transition, willRender }) {
    const [childrenMounted, setChildrenMounted] = (0, react_1.useState)(false);
    const [transitioning, setTransitioning] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (transitioning)
            return;
        if (willRender) {
            setChildrenMounted(true);
            setTransitioning(true);
            setTimeout(() => {
                setTransitioning(false);
            }, transition.duration);
        }
        else {
            setTransitioning(true);
            setTimeout(() => {
                setChildrenMounted(false);
                setTransitioning(false);
            }, transition.duration);
        }
    }, [willRender, transition.duration, transitioning]);
    const getCurrentStyle = () => {
        const transitionDuration = { transitionDuration: transition.duration + 'ms' };
        if (!childrenMounted)
            return { ...transition.initial, ...transitionDuration };
        if (willRender)
            return { ...(transition.transition), ...transitionDuration };
        else
            return { ...(transition.exit), ...transitionDuration };
    };
    return ((0, jsx_runtime_1.jsx)("div", { style: getCurrentStyle(), children: childrenMounted ? children : null }));
}
exports.default = TransitionLifecycle;
