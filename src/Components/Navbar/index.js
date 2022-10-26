import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Welcome</Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to={"/signin"}>Sign in</Link>
      </li>
      <li>
        <Link to={"/admin"}>Admin</Link>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

export default Navbar