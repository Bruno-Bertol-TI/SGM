import './FAQSection.css';

const FAQSection = () => {
    return (
        <div className='faq-section'>
            <h2 className='faq-title'>Perguntas Frequentes</h2>
            <div className='faq-item'>
                <h3 className='faq-question'>Qual o proposito desse site?</h3>
                <p className='faq-answer'>Este site contem varios topicos com foco em construção civil</p>
            </div>
            <div className='faq-item'>
                <h3 className='faq-question'>Como entrar em contato com o suporte?</h3>
                <p className='faq-answer'>Você pode entrar em contato com o suporte por meio do formulario de contato.</p>
            </div>
        </div>
    );
}

export default FAQSection;
// This component can be imported and used in the SiteInfo component to display FAQs.