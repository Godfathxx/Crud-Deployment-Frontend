import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav class="navbar bg-warning">
            <Link style={{fontFamily:"Agbalumo"}} to="/" class="navbar-brand mx-3">CRUD operation</Link>
            <div class="nav">
                <Link to="/create-Pet" class="nav-link">Create Pet</Link>
                <Link to="/Pet-list" class="nav-link">Pet List</Link>
            </div>
        </nav>
    )
}
export default Nav;

