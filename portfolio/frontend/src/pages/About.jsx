import AboutList from "../components/AboutList"
import {useEffect} from "react"
import "../components/Home.css"


export default function AboutListPage() {
  useEffect(() => {
    document.title = "About | Yuto-A"
  }, []);
  return(
    <main id="main">
      <h2 className="aboutTitle">About</h2>
      <AboutList />
    </main>
  )
}