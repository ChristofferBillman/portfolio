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
		LandingText: 'Precis tagit examen från Civingenjör Interaktion och Design vid Umeå Universitet. Grafisk design, programmering och webbutveckling är saker som intresserar!',
		DownloadCV: 'Hämta CV',
		Scroll: 'Scrolla',
		FooterHeader: 'Nu börjar det!',
		Contact: 'Kontakta mig:',
		Email: 'Mejl',
		Phone: 'Telefon',
		ReturnToTop: 'Till toppen',
		VisitWebsite: 'Besök webbplats',
		SourceCode: 'Källkod',
		InOppositeLang: 'In English'
	},
	{
		Name: 'EN',
		EngineeringStudent: 'Engineer',
		LandingText: 'Just graduated from M.Sc. Interaction Technology and Design at Umeå University. Graphic design, programming and web development are things that interest!',
		DownloadCV: 'Download CV',
		Scroll: 'Scroll',
		FooterHeader: 'It begins here and now!',
		Contact: 'Contact me:',
		Email: 'Email',
		Phone: 'Phone',
		ReturnToTop: 'Return to the top',
		VisitWebsite: 'Visit Site',
		SourceCode: 'Source Code',
		InOppositeLang: 'På svenska'
	},
]