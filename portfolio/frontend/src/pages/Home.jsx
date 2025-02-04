import {useEffect} from "react"
import "../components/Home.css"
import Works from "../components/Works"
import AboutComponent from "../components/AboutComponent"
import Contact from "../components/Contact"
import Banar from "../components/Banar"
import Studied from "../components/Studied/Studied"
import Skills from "../components/Skills"

// homepage get components
export default function Home() {
  useEffect(() => {
    document.title = "Home | Yuto-A"
  }, []);
  return(
    <main id="main">
      <Banar />
      <Skills />
      <Studied />
      <Works />
      <AboutComponent/>
      <Contact />
    </main>
  )
}