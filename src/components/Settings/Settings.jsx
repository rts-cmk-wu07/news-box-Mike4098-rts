/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Navbar from "../Navbar/Navbar";


const Settings = () => {
  const style={
      settingsContainer: css`
      width: 500px;
      `
  }

    return ( 
        <div css={style.settingsContainer}>
           <Navbar/>
        
        </div>
     );
}
 
export default Settings;