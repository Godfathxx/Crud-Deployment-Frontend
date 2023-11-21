import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav className="navbar" style={{ backgroundColor: "black" }}>
            <Link style={{fontFamily:"Agbalumo"}} to="/" class="navbar-brand mx-3"><a>
          <a style={{ Color: "orange" }}>PET </a>Lovers
        </a></Link>
        </nav>
    )
}
export default Nav;
