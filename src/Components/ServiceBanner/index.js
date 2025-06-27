import './ServiceBanner.css'

const ServiceBanner = () => {
    return (
        <section className='section-service-banner'>
            <header>
                <h1>Serviços</h1>
                <p>
                    Do planejamento à execução, oferecemos soluções completas e personalizadas
                     para transformar ideias em realidade. <strong> Combinamos tecnologia, inovação e 
                     expertise para entregar projetos com excelência, eficiência e compromisso 
                     com cada detalhe.</strong> Descubra tudo o que podemos fazer por você.
                </p>
            </header>
            <div className='service-banners'>
                <a className='banners' href='#'>
                        <h2>Execução e Adm. de Obras</h2>
                        <img src='/img/service_banners/Execution-banner-and-mgmt.png' alt='' />
                </a>
                <a className='banners' href='#'>
                        <h2>Design de Interiores</h2>
                        <img src='/img/service_banners/interior-service-banner.png' alt='' />
                </a>
                <a className='banners' href='#'>
                        <h2>Todos Serviços</h2>
                        <img src='/img/service_banners/banner-of-all-services.jpg' alt='' />
                </a>
            </div>
        </section>
    )
}

export default ServiceBanner