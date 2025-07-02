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
    <div className="App">
      <Header />
      <ClientSection />
      <ServiceBanner />
      <SiteInfo />
      <HistorySection />
      <Footer />
    </div>
  )
}

export default App;
