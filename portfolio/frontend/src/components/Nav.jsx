import {NavLink} from "react-router-dom"
export default function Nav() {
  return(
    <nav id="main-navigation">
      <ul>
        <li className="nav1"><NavLink to="/">Home</NavLink></li>
        <li className="nav2"><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}