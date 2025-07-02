import ClientSection from "./Components/ClientSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HistorySection from "./Components/HistorySection";
import ServiceBanner from "./Components/ServiceBanner";
import SiteInfo from "./Components/SiteInfo";

function App() {
  
    // primary: '#A67244', 
    // secondary: '#8C3B0D', 
    // tertiary: '#A66844',
    // quarternery: '#732002', 
    // fontDecorated: '#F2EEE9'

  
  return (
    <div>
      <Header/>
      <main>
        <ClientSection/>
        <ServiceBanner/>
        <HistorySection/>
      </main>
      <footer>
        <SiteInfo/>
        <Footer 
          footerDescription={
            '© 2025 Silvana Bertol Arquiteta ·\
             Projetos personalizados com criatividade e técnica ·\
              Todos os direitos reservados ·\
               Site desenvolvido por ' 
          }
          developerLink={`https://github.com/bruno-bertol-ti`}
          developerName={`Bruno Bertol ·`}
        /> 
      </footer>     
    </div>
  )
}

export default App;
