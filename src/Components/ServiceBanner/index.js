import SectionHeader from '../SectionHeader'
import './ServiceBanner.css'

const ServiceBanner = () => {
    return (
        <section className='section-service-banner'>
            <SectionHeader 
                title={'Serviços'} 
                paragraph={'Do planejamento à execução, oferecemos soluções completas e personalizadas para transformar ideias em realidade. Combinamos tecnologia, inovação e expertise para entregar projetos com excelência, eficiência e compromisso com cada detalhe. Descubra tudo o que podemos fazer por você.'}
            />
            <div className='service-banners'>
                <a className='banners' href='#'>
                        <h2>Execução e Adm. de Obras</h2>
                        <img src='/img/service_banners/Execution-banner-and-mgmt.png' alt='' />
                        <div className='overlay'/>
                </a>
                <a className='banners' href='#'>
                        <h2>Design de Interiores</h2>
                        <img src='/img/service_banners/interior-service-banner.png' alt='' />
                        <div className='overlay'/>
                </a>
                <a className='banners' href='#'>
                        <h2>Todos Serviços</h2>
                        <img src='/img/service_banners/banner-of-all-services.jpg' alt='' />
                        <div className='overlay'/>
                </a>
            </div>
        </section>
    )
}

export default ServiceBanner