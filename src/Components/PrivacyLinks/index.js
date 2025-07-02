import './PrivacyLinks.css';

const PrivacyLinks = () => {
    return (
        <div className='privacy-links'>
            <a href='/privacy-policy' className='privacy-link'>Privacy Policy</a>
            <a href='/terms-of-service' className='privacy-link'>Terms of Service</a>
            <a href='/cookie-policy' className='privacy-link'>Cookie Policy</a>
            <a href='/data-protection' className='privacy-link'>Data Protection</a>
        </div>
    );
}

export default PrivacyLinks;