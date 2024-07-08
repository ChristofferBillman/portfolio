import React, {createContext, useContext, useState} from "react"

interface languageContextProps {
	children: React.ReactNode
}

export type Language = {
	Name: string
	EngineeringStudent: string
	LandingText: string
	DownloadCV: string
	Scroll: string
	FooterHeader: string
	ReturnToTop: string
	Contact: string
	Email: string
	Phone: string
	VisitWebsite: string
	SourceCode: string
	InOppositeLang: string
	AboutTitle: string
	AboutP1: string
	AboutP2: string
	AboutP3: string
	AboutBold: string
	AboutP5: string
	AboutP6: string
}

const LangContext = createContext({} as Language)
const LangSetterContext = createContext({} as Function)

export const useLanguageContext = () => {
	const context = useContext(LangContext)

	if (context === undefined) {
		throw new Error("LangContext must be used within a LanguageContextProvider")
	}

	return context
}
export const useLanguageContextSetter = () => {
	const context = useContext(LangSetterContext)

	if(context === undefined) {
		throw new Error('LanguageContextSetter must be used within a LanguageContextProvider')
	}
	return context
}

export default function LanguageContextProvider({ children }: languageContextProps): any {

	const [lang, setLang] = useState(translations.find(lang => lang.Name === getLocale()))

	const langSetter = (language: 'EN' | 'SE') => {
		setLang(translations.find(lang => lang.Name === language))
	}

	if (lang === undefined) {
		throw new Error(`Language ${getLocale()} not found`);
	}

	return (
		<LangSetterContext.Provider value={langSetter}>
			<LangContext.Provider value={lang}>
				{children}
			</LangContext.Provider>
		</LangSetterContext.Provider>
	)
}

function getLocale() {
	const locale = navigator.language

	if (locale === 'en-US') return 'EN'
	if (locale === 'sv-SE') return 'SE'
	return 'EN'
}

const translations: Language[] = [
	{
		Name: 'SE',
		EngineeringStudent: 'Civilingenjör',
		LandingText: 'Precis tagit examen från Civilingenjörsprogrammet Interaktion och Design vid Umeå Universitet. UI/UX, webb och programmering är sådant som intresserar!',
		DownloadCV: 'Hämta CV',
		Scroll: 'Scrolla',
		FooterHeader: 'Nu börjar det!',
		Contact: 'Kontakta mig:',
		Email: 'Mejl',
		Phone: 'Telefon',
		ReturnToTop: 'Till toppen',
		VisitWebsite: 'Besök webbplats',
		SourceCode: 'Källkod',
		InOppositeLang: 'In English',
		AboutTitle: 'Vem är jag då?',
		AboutP1: 'Jag är Christoffer! Kul att du besöker min portfolio!',
		AboutP2: 'I våras tog jag examen från civilingenjörsprogrammet interaktion och design vid Umeå universitet. Under mina år på programmet har jag studerat allt från programmering och matematik, till UX och psykologi. Programmet har gett mig en bred och unik kompetensprofil. Jag har god förståelse för hela designprocessen från idé till implementation. Verktyg och processer så som double diamond, design thinking och UX honeycomb är välbekanta.',
		AboutP3: 'Jag har även god förståelse för det tekniska, och har praktisk erfarenhet av backend såväl som frontend, men har även kunskap om de teoretiska grunderna inom datavetenskapen.',
		AboutBold: 'Med andra ord, så är jag expert på mötet mellan människa och maskin - en kombination som är både unik och oerhört värdefull.',
		AboutP5: 'På en mer personlig not, så är jag uppvuxen i norrlandsfjällen ungefär 3 mil utanför skidorten Hemavan. Med jämna mellanrum så hälsar jag på min familj där uppe, kanske tar en dag i skidbacken eller en dagstur upp på fjället med skotern. När jag väl är hemma i Umeå, så brukar jag på min fritid umgås med vänner, spela datorspel (särskilt minecraft ⛏) och löpträna.',
		AboutP6: 'Fortsätter du skrolla ned så får du se ett axplock av de projekt som jag arbetat med. Har du frågor eller funderingar, hör gärna av dig!'
	},
	{
		Name: 'EN',
		EngineeringStudent: 'Engineer',
		LandingText: 'Just graduated from M.Sc. Interaction Technology & Design at Umeå University. UI/UX, web dev and programming are things of interest!',
		DownloadCV: 'Download CV',
		Scroll: 'Scroll',
		FooterHeader: 'It begins here and now!',
		Contact: 'Contact me:',
		Email: 'Email',
		Phone: 'Phone',
		ReturnToTop: 'Return to the top',
		VisitWebsite: 'Visit Site',
		SourceCode: 'Source Code',
		InOppositeLang: 'På svenska',
		AboutTitle: 'Who am I then?',
		AboutP1: 'I am Christoffer! How fun that you are visiting my portfolio!',
		AboutP2: 'This spring, I graduated from the program M.Sc in Interaction and Design at Umeå University. During my years in the program I have studied everything from programming and mathematics, to UX and psychology. My education has given me a broad and unique competence profile. I have a good understanding of the whole design process, from idea to implementation. Tools and processes like Double Diamond, Design Thinking and UX honeycomb are very familiar.',
		AboutP3: 'I also have a good understanding of the technical side of things, where I have practical experience of backend as well as frontend development, but also the theoretical foundations of computer science.',
		AboutBold: 'In other words, I am an expert of the intersection between human and machine - a combination that is both unique and incredibly valuable.',
		AboutP5: 'On a more personal note, I grew up in the sparsely populated mountain region in northern Sweden. Every now and then I pay a visit to my family who live there, and go downhill skiing or go on a snowmobile ride up on the mountains. When I am at home in Umeå, I usually hang out with friends, play videogames (especially Minecraft ⛏) and run.',
		AboutP6: 'If you keep scrolling, an assortment of projects I have worked with are showcased. If you have any questions, feel free to contact me!'
	},
]