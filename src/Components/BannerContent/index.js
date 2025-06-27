import './BannerContent.css'

const BannerContent = ({title, text, buttonText}) => {
    return (
        <div className='carousel-content'>
            <h2>{title}</h2>
            <p>{text}</p>
            {/* Create the button component */}
        </div>
    )
}

export default BannerContent