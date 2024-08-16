import {useEffect} from "react"
import "../components/Home.css"
import Service from "../components/Service"
import Skills from "../components/Skills"
import Works from "../components/Works"
import AboutComponent from "../components/AboutComponent"
import Contact from "../components/Contact"
import Banar from "../components/Banar"
// homepage get components
export default function Home() {
  useEffect(() => {
    document.title = "Home | Yuto-A"
  }, []);
  return(
    <main id="main">
      <Banar />
      <Service />
      <Skills />
      <Works />
      <AboutComponent/>
      <Contact />
    </main>
  )
}