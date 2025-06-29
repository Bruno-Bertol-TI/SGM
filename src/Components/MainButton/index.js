import './MainButton.css'

const MainButton = (props) => {
    return (
        <div className='component-button'>
            <button>{props.buttonName}</button>
        </div>
    )
}

export default MainButton