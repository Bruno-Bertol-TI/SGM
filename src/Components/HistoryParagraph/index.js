import './HistoryParagraph.css'

const HistoryParagraph = (props) => {
    return (
        <div className='container-paragraph'>
            <p>
                {props.history}
            </p>
        </div>
    )
}

export default HistoryParagraph