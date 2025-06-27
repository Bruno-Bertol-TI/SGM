import './ServiceBanner.css'

const ServiceBanner = () => {
    return (
        <section className='section-service-banner'>
            <header>
                <h1>Serviços</h1>
                <p>
                    Da concepção à execução, oferecemos soluções completas e personalizadas
                     para transformar ideias em realidade. Combinamos tecnologia, inovação e 
                     expertise para entregar projetos com excelência, eficiência e compromisso 
                     com cada detalhe. Descubra tudo o que podemos fazer por você.
                </p>
            </header>
            <div className='service-banners'>
                <div className='banners'>
                    <h2>Execução e Adm. de Obras</h2>
                    <img src='/img/service_banners/Execution-banner-and-mgmt.jpg' alt='' />
                </div>
                <div className='banners'>
                    <h2>Design de Interiores</h2>
                    <img src='/img/service_banners/interior-service-banner.png' alt='' />
                </div>
                <div className='banners'>
                    <h2>Todos Serviços</h2>
                    <img src='/img/service_banners/banner-of-all-services.jpg' alt='' />
                </div>
            </div>
        </section>
    )
}

export default ServiceBanner