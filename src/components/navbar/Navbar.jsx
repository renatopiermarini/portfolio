import './navbar.css'
import logo from '../pictures/logo.jpeg'

export const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-div">
          <img src={logo} className="logo" />
          <a className="say-hello">Say Hello</a>
        </div>
      </nav>
  )
}
