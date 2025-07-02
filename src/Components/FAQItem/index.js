import React, {useState} from "react";
import './FAQItem.css';

const FAQItem = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='faq-item'>
            <div className='faq-question' onClick={toggleOpen}>
                <h3>{question}</h3>
                <span className='toggle-icon'>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className='faq-answer'>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}
export default FAQItem;