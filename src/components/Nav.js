import {BrowserRouter as Router,Link} from "react-router-dom";
function Nav()
{
    return(
      <Router>
        <nav className="navbar" style={{ backgroundColor: "black" }}>
            <Link style={{fontFamily:"Agbalumo"}} to="/" class="navbar-brand mx-3">
              <a style={{ color: "white" }}>
          <a style={{ color: "orangered" }}>PET </a>Lovers
        </a></Link>
        </nav>
        </Router>
    );
}
export default Nav;
