import ClientSection from "./Components/ClientSection";
import Header from "./Components/Header";
import ServiceBanner from "./Components/ServiceBanner";
import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <main>
        <ClientSection/>
        <ServiceBanner/>
      </main>
      
    </div>
  )
}

export default App;
