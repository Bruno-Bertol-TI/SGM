import HistoryParagraph from '../HistoryParagraph'
import SectionHeader from '../SectionHeader'
import './HistorySection.css'

const HistorySection = () => {

    const paragraph = {
        first: 'A trajetória da arquiteta Silvana Bertol é marcada por sensibilidade, técnica e uma paixão genuína por transformar espaços em experiências únicas. Desde os primeiros projetos, ela buscou unir estética, funcionalidade e identidade em cada detalhe, conquistando reconhecimento pela sua dedicação e visão criativa.' ,
        second: 'Com o passar do tempo, a jornada profissional se fortaleceu ainda mais com a parceria de Closvaldir Bertol, engenheiro e marido de Silvana. Juntos, formam uma equipe complementar, que alia a precisão da engenharia com a delicadeza e o olhar artístico da arquitetura. Essa união deu origem a projetos ainda mais completos, que refletem equilíbrio, confiança e excelência.',
        third: 'Ao longo dos anos, Silvana e Closvaldir construíram não apenas obras, mas também relações sólidas com seus clientes. Cada novo trabalho é resultado de uma história vivida, de desafios superados e de um compromisso mútuo com a qualidade. Essa é a essência da sua história: uma caminhada feita em parceria, guiada por propósito e paixão pelo que fazem.'
    }
    
    return (
        <section className='history-section'>
            <SectionHeader 
                title='História'
                paragraph='Conheça um pouco da nossa trajetória, dos primeiros passos até as conquistas que marcaram nosso caminho.'
            />
            <div className='container-bio'>
                <div>
                    <div className='main-paragraph'>
                        <img src='#'/>
                        <HistoryParagraph history={paragraph.first} />
                    </div>
                    <HistoryParagraph history={paragraph.second} />
                    <HistoryParagraph history={paragraph.third} />
                </div>
            </div>
        </section>
    )
}

export default HistorySection