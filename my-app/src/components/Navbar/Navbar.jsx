import Link from "next/link"
import style from './navbar.module.css'
import ToggleSwitch from "@/app/ToggleSwitch/ToggleSwitch"

export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark container">
        <a className="navbar-brand" href="/">Navbar</a>


        <div className="collapse navbar-collapse display-flex   justify-content-between " id="navbarNavAltMarkup">

          <div className="navbar-nav">

            <Link className="nav-item nav-link active" href="/">Home</Link>
            <Link className="nav-item nav-link" href="/portfolio">category</Link>
            <Link className="nav-item nav-link" href="/about">About</Link>
            <Link className="nav-item nav-link" href="/contact">Contact</Link>

          

          </div>
          
          <ToggleSwitch />
        </div>
      </nav>
    </>
  )
}
