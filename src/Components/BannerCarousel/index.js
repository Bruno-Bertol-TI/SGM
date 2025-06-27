import { useEffect, useState } from 'react'
import './BannerCarousel.css'
import BannerContent from '../BannerContent';

const banners = [
    {
    image: '/img/client-section-banners/R4.png',
    title: 'Transformamos ideias em realidade',
    text: 'Do planejamento à execução, oferecemos soluções completas e personalizadas.',
    buttonText: 'Saiba mais'
    },
    {
    image: '/img/client-section-banners/R8.png',
    title: 'Excelência em cada detalhe',
    text: 'Combinamos tecnologia, inovação e expertise para entregar com eficiência.',
    buttonText: 'Nossos projetos'
    },
    {
    image: '/img/client-section-banners/R11.png',
    title: 'Seu projeto começa aqui',
    text: 'Descubra tudo o que podemos fazer por você.',
    buttonText: 'Fale conosco'
    } 
]

const BannerCarousel = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % banners.length)
        }, 4000);

        return () => clearInterval(interval);        
    }, []);


    return (
        <div className='carousel-container'>
            {banners.map((banner, index) => (
                <div className={`carousel-slide ${index === current ? 'active' : ''}`} key={index}>
                    <img src={banner.image} alt={`Banner ${index + 1}`}/>
                    {index === current && ( <BannerContent 
                        title={banner.title}
                        text={banner.text}
                        buttonText={banner.buttonText}
                    /> )}
                </div>
            ))}
        </div>
    )
}

export default BannerCarousel;