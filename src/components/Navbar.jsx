/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {Link} from "react-router-dom"
const Navbar = () => {
    const style = {
        navDiv: css`
        width: 100%;
        margin: 0px;
       
        `,
        nav:css`
         display: flex;
       align-items:center;
       justify-content: space-evenly;
       position: fixed;
       top: 0;
        background-color: #ffffff;
        width: 100%;
        height: 2em;
        margin: 0px;
        padding: 0;
        border-bottom: 1px solid #1b1c205f;
        `,
        h1:css`
        font-size: 30px;
        font-weight: bold;
        `
    }
    return ( 
        <div className="navDiv" css={style.navDiv}>
            <nav className="navbar" css={style.nav}>
                <Link to="/">Home</Link>
                <h1 css={style.h1}>News box</h1>
            <Link to="/Settings">Settings</Link>
            </nav>
        </div>
     );
}
 
export default Navbar;