import {Link} from "react-router-dom"
import styles from "./Header.module.css";
import logo from "../img/logo.png";

function Header() {
    return (
        <div className={styles.wrap}>
            <Link to="./"><img src={logo} alt="yts" /></Link>
        </div>
    );
}

export default Header