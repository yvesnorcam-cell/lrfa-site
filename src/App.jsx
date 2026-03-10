import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Players from "./pages/Players"
import PlayerProfile from "./pages/PlayerProfile"
import Staff from "./pages/Staff"
import Recruitment from "./pages/Recruitment"
import News from "./pages/News"
import Scouts from "./pages/Scouts"
import Donate from "./pages/Donate"
import Contact from "./pages/Contact"

export default function App() {

  return (

    <Router>

      <nav style={{
        background:"#111",
        padding:"15px"
      }}>

        <Link to="/" style={{color:"white", marginRight:"20px"}}>Accueil</Link>

        <Link to="/players" style={{color:"white", marginRight:"20px"}}>Joueurs</Link>

        <Link to="/staff" style={{color:"white", marginRight:"20px"}}>Staff</Link>

        <Link to="/recruitment" style={{color:"white", marginRight:"20px"}}>Recrutement</Link>

        <Link to="/news" style={{color:"white", marginRight:"20px"}}>Actualités</Link>

        <Link to="/scouts" style={{color:"white", marginRight:"20px"}}>Recruteurs</Link>

        <Link to="/contact" style={{color:"white", marginRight:"20px"}}>Contact</Link>

        <Link to="/donate" style={{color:"white"}}>Soutenir</Link>

      </nav>

      <div style={{padding:"20px"}}>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/players" element={<Players />} />

          <Route path="/players/:id" element={<PlayerProfile />} />

          <Route path="/staff" element={<Staff />} />

          <Route path="/recruitment" element={<Recruitment />} />

          <Route path="/news" element={<News />} />

          <Route path="/scouts" element={<Scouts />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/donate" element={<Donate />} />

        </Routes>

      </div>

    </Router>

  )

}