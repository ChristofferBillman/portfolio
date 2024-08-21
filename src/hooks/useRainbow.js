"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useCheatCode_1 = __importDefault(require("./useCheatCode"));
/**
 * Enables the rainbow cheat code on the site. Should only ever be used once.
 */
function useRainbow() {
    const isRainbow = (0, useCheatCode_1.default)(['p', 'o']);
    if (isRainbow) {
        document.body.classList.add('rainbowAnimation');
        // @ts-ignore
        const footer = document.getElementById('footer');
        if (footer)
            footer.style.background = 'none';
        document.documentElement.style.setProperty('--black', '#fff');
        document.documentElement.style.setProperty('--light-black', 'rgba(255,255,255,0.6)');
        document.documentElement.style.setProperty('--lightest-black', 'rgba(255,255,255,0.4)');
    }
    else {
        document.body.classList.remove('rainbowAnimation');
        //document.body.style.background = '#F9F9F9'
        const footer = document.getElementById('footer');
        if (footer)
            footer.style.background = '#373737';
        document.documentElement.style.setProperty('--black', '#373737');
        document.documentElement.style.setProperty('--light-black', '#626262');
        document.documentElement.style.setProperty('--lightest-black', '#858585');
    }
}
exports.default = useRainbow;
