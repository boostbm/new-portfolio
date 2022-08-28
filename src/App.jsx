import "./App.css"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import { Nav } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default App
