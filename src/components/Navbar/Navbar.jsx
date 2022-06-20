/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
        background-color: var(--snow);
        width: 100%;
        height: 2em;
        margin: 0px;
        padding: 0;
        border-bottom: 1px solid #1b1c205f;
        `,
        h1:css`
        font-size: var(--primary-heading-text);
        font-weight: var(--bold-text);
        `,
        button:css`
        border: none;
        font-size: var(--button-text);
        `
    }
    return ( 
        <div className="navDiv" css={style.navDiv}>
            <nav className="navbar" css={style.nav}>
                <button css={style.button}>Archive</button>
                <h1 css={style.h1}>News box</h1>
                <button css={style.button} type="submit">Settings</button>
            </nav>
        </div>
     );
}
 
export default Navbar;