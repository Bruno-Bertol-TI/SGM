import ContactForm from '../ContactForm'
import './SiteInfo.css'

const SiteInfo = () => {
    return (
        <section className='section-site-info'>
            <div className='container-rights-privacy-contact'>
                <div className='rights-privacy'>
                    {/* Links */}
                </div>
                <div className='contact'>
                    <ContactForm/>
                </div>
            </div>
            <div className='container-faq'>
                {/* elaborar FAQs */}
            </div>
        </section>
    )
}

export default SiteInfo