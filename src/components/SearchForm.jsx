/** @jsxImportSource @emotion/react */
import React, {useState} from 'react'
import { css } from "@emotion/react";
const SearchForm = ({searchText}) => {
    const [text,setText] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }
    const style = {
        form: css`
        display: flex;
        justify-content: center;
        margin-top: 3em;
        `,
        input: css`
        background-color: var(--fossil);
        border:none;
        height: 2em;
        padding-left: 1em;
        border-radius:  25px 0px 0px 25px;
        color: var(--slate);
        `,
        btn: css`
        background-color: var(--fossil);
        border: none;
        border-radius:  0px 25px 25px 0px;
        font-size: var(--button-text);
        color: var(--slate);
        padding-right: 1em;
        `
    }
    return ( 
        <div>
            <form css={style.form} onSubmit={handleSubmit}>
                <input 
                type="text" 
                css={style.input} 
                aria-label='searchbar' 
                placeholder='e.g politics' 
                onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" css={style.btn}>Search</button>
            </form>
        </div>
     );
}
 
export default SearchForm;