import './PrivacyLinks.css';

const PrivacyLinks = () => {
    return (
        <div className='privacy-links'>
            <ul className='privacy-links-list link-group'>
                <li>
                    <a href="https://www.example.com/privacy-policy" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="https://www.example.com/terms-of-service" target="_blank" rel="noopener noreferrer">
                        Terms of Service
                    </a>
                </li>
                <li>
                    <a href="https://www.example.com/cookie-policy" target="_blank" rel="noopener noreferrer">
                        Cookie Policy
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default PrivacyLinks;