import Account from "./Account";
import classes from "../styles/Nav.module.css"
import {Link} from "react-router-dom"


function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            {/* <img src=".././images/logo-bg.png" alt="Quiz Game" /> */}
            <h3>Quiz Game</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}

export default Nav;
