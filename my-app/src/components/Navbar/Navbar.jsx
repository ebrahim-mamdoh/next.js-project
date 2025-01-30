import Link from "next/link"
import style from './navbar.module.css'; // Correct import
import ToggleSwitch from "@/app/ToggleSwitch/ToggleSwitch"
import Btn from "../BTN/Btn"

export default function Navbar() {
  return (
    <>
      <div className={style.nav}>
        <nav className="navbar navbar-expand-lg navbar-dark  ">
          <a className="navbar-brand" href="/">Navbar</a>


          <div className="collapse navbar-collapse display-flex   justify-content-between " id="navbarNavAltMarkup">

            <div className="navbar-nav">

              <Link className="nav-item nav-link active" href="/">Home</Link>
              <Link className="nav-item nav-link" href="/portfolio">category</Link>
              <Link className="nav-item nav-link" href="/about">About</Link>
              <Link className="nav-item nav-link" href="/contact">Contact</Link>

            </div>


           
              <div className="display-flex">
                <ToggleSwitch />
                 <Btn text="Log out"></Btn>
            </div>



          </div>
        </nav>

      </div>


    </>
  )
}
