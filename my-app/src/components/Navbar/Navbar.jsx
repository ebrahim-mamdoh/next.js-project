import Link from "next/link"
import style from './navbar.module.css'
import ToggleSwitch from "@/app/ToggleSwitch/Toggle"

export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div className="navbar-nav">
            <Link className="nav-item nav-link active" href="/">Home</Link>
             <Link className="nav-item nav-link" href="/portfolio">category</Link>
             <Link  className="nav-item nav-link" href="/about">About</Link>
            <Link className="nav-item nav-link" href="/contact">Contact</Link>
            <ToggleSwitch/>
          </div>
        </div>
      </nav>
    </>
  )
}
