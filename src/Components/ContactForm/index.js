import MainButton from '../MainButton'
import './ContactForm.css'

const ContactForm = () => {
    return (
        <section className='contact-form'>
            <h2>
                Fale Conosco
            </h2>
            <form>
                <label>Nome: </label>
                <input type='text' name='name' />
                <label>E-mail: </label>
                <input type='email' name='email' />
                <label>Mensagem: </label>
                <textarea minLength={15} name='message'></textarea>
                <MainButton buttonName={'Enviar'} />
            </form>
        </section>
    )
}

export default ContactForm