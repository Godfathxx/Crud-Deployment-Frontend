import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav class="navbar bg-warning">
            <Link style={{fontFamily:"Agbalumo"}} to="/" class="navbar-brand mx-3">PET LOVERS</Link>
            <div class="nav">
            </div>
        </nav>
    )
}
export default Nav;
