import FAQItem from '../FAQItem';
import './FAQSection.css';

const FAQSection = () => {
    const faqs = [
        { 
            question: "What is the purpose of this FAQ section?",
            answer: "This section provides answers to frequently asked questions about our application." 
        },
        { 
            question: "How do I use this component?", 
            answer: "You can use this component by importing it and passing the question and answer as props." 
        },
        { 
            question: "Can I customize the styles?", 
            answer: "Yes, you can customize the styles by modifying the CSS file." 
        }
    ];

    return (
        <div className='faq-section'>
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
}

export default FAQSection;