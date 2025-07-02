import ContactForm from '../ContactForm'
import PrivacyLinks from '../PrivacyLinks'
import './SiteInfo.css'

const SiteInfo = () => {
    return (
        <section className='section-site-info'>
            <div className='container-rights-privacy-contact'>
                <div className='privacy'>
                    <PrivacyLinks/>
                </div>
                <div className='contact'>
                    <ContactForm/>
                </div>
            </div>
            <div className='container-faq'>
                
            </div>
        </section>
    )
}

export default SiteInfo