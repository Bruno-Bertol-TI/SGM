import ClientSection from "./Components/ClientSection";
import Header from "./Components/Header";
import HistorySection from "./Components/HistorySection";
import ServiceBanner from "./Components/ServiceBanner";

function App() {
  
  return (
    <div>
      <Header/>
      <main>
        <ClientSection/>
        <ServiceBanner/>
        <HistorySection/>
      </main>
      
    </div>
  )
}

export default App;
