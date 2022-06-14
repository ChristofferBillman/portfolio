import DualColumnPage from "./DualColumnPage";

const description  = 'Jag har en bred erfarenhet, har arbetat med allt från idéutveckling, ' +
    'till programmering. Illustrator, Figma och Photoshop är verktyg där jag känner mig hemma. ' +
    'Jag har god erfarenhet med webbutveckling för frontend såväl som backend.'

const tags = [
    'Web',
    'JavaScript',
    'TypeScript',
    'React',    
    'Node.js',
    'Express',
    'MongoDB',
    'C/C++',
    'C#',
    'ASP.NET',
    'SQL',
    'Entity Framework',
    'Java',
    'Git',
]

export default function About() {
    return (
        <DualColumnPage>
            <div className='inner-content-container'>
                <h1>Designer.<br/>Utvecklare.</h1>
                <p>{description}</p>
                <h4>Har erfarenhet med:</h4>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between'}}>
                    {tags ? tags.map(tag => <p className='attention-text nomargin'>{tag}</p>) : ''}
                </div>
            </div>

            <div className='inner-content-container' style={{height: '100%'}}>
                <ExperiencesPanel/>
            </div>
        </DualColumnPage>
    );
}