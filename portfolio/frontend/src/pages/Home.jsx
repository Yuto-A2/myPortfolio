import {useEffect} from "react"
import "../components/Home.css"
import Service from "../components/Service"
import Works from "../components/Works"
import AboutComponent from "../components/AboutComponent"
import Contact from "../components/Contact"
import Banar from "../components/Banar"
import Studied from "../components/Studied/Studied"

// homepage get components
export default function Home() {
  useEffect(() => {
    document.title = "Home | Yuto-A"
  }, []);
  return(
    <main id="main">
      <Banar />
      <Service />
      <Studied />
      <Works />
      <AboutComponent/>
      <Contact />
    </main>
  )
}