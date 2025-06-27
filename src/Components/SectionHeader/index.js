import './SectionHeader.css'

const SectionHeader = (props) => {
    return (
        <header className='section-header'>
            <h1>{props.title}</h1>
            <p>{props.paragraph}</p>
        </header>
    )
}

export default SectionHeader