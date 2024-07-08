import useCheatCode from "./useCheatCode";

/**
 * Enables the rainbow cheat code on the site. Should only ever be used once.
 */
export default function useRainbow() {
    const isRainbow = useCheatCode(['p','o'])

    if(isRainbow) {
        document.body.classList.add('rainbowAnimation')
        // @ts-ignore
        const footer = document.getElementById('footer')
        if(footer) footer.style.background = 'none'
        document.documentElement.style.setProperty('--black', '#fff')
        document.documentElement.style.setProperty('--light-black', 'rgba(255,255,255,0.6)')
        document.documentElement.style.setProperty('--lightest-black', 'rgba(255,255,255,0.4)')
    }
    else {
        document.body.classList.remove('rainbowAnimation')
        //document.body.style.background = '#F9F9F9'
        const footer = document.getElementById('footer')
        if(footer) footer.style.background = '#373737'
        document.documentElement.style.setProperty('--black', '#373737')
        document.documentElement.style.setProperty('--light-black', '#626262')
        document.documentElement.style.setProperty('--lightest-black', '#858585')
    }
}