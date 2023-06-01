import Page from './Page'

export default function About() {

	return (
        <Page
            img='./about.png'
            useGallery={false}
            contentSide="left"
        >
            <h1>Vem är jag då?</h1>
            <p> Jag är Christoffer! Kul att du besöker min portfolio!<br/><br/>
Idag så studerar jag fjärde året civilingenjör interaktion och design vid Umeå universitet, och tar examen nästa vår. Under mina år på programmet har jag studerat allt från programmering och matematik, till UX och psykologi. Programmet har gett mig en väldigt bred och unik kompetensprofil. Jag har god förståelse för hela designprocessen från idé till implementation, verktyg och ramverk så som double diamond, design thinking och UX honeycomb är välbekanta.<br/><br/>
Jag har även god förståelse för det tekniska, och har praktisk erfarenhet av backend såväl som frontend, men har även kunskap om de teoretiska grunderna inom datavetenskapen.<br/><br/>
<b>Med andra ord, så är jag expert på mötet mellan människa och maskin - en kombination som är både unik och oerhört värdefull.</b><br/><br/>

På en mer personligt not, så är jag uppvuxen i norrlandsfjällen ungefär 3 mil utanför skidorten Hemavan. Med jämna mellanrum så hälsar jag på min familj där uppe, kanske tar en dag i skidbacken eller en dagstur upp på fjället med skotern. När jag väl är hemma i Umeå, så brukar jag på min fritid umgås med vänner, spela datorspel (särskilt minecraft ⛏) och löpträna.<br/><br/>

Fortsätter du skrolla ned så får du se ett axplock av de projekt som jag arbetat med. Har du frågor eller funderingar, hör gärna av dig! </p>
        </Page>
	)
}