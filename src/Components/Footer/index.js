import './Footer.css'

const Footer = (props) => {
    return (
         <footer className='footer-section'>
            <p> {props.footerDescription} <a href={props.developerLink}>{props.developerName}</a> </p>
            
         </footer>
    )
}

export default Footer