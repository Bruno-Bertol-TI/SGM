import MainButton from '../MainButton'
import './BannerContent.css'

const BannerContent = ({title, text, buttonText}) => {
    return (
        <div className='carousel-content'>
            <h2>{title}</h2>
            <p>{text}</p>
            <MainButton buttonName={buttonText} />
        </div>
    )
}

export default BannerContent