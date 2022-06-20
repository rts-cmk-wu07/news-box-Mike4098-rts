/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";




const Fetchfunction = ({isloading, articles}) => {
   
    const style= {
        article:css`
            background-color: var(--snow);
            border-bottom: 1px solid var(--onyx);
            margin-top: 0em;
            text-align: center;
        `,
        h2:css`
        font-size: var(--seconday-heading-text);
        font-weight: var(--bold-text);
        text-align: left;
        `,
        abstract:css`
        text-align: left;
        font-size: var(--card-title);
        width: 80%;
        `,
        h1:css`
        text-align: center;
        font-size: var(--primary-heading-text);
        `
    }
   
    return ( 
        <div>
           {isloading ? <h1 css={style.h1}>loading...</h1>: 
            <section>
            {articles.map((article) => {
                const {abstract, headline:{main},web_url, _id} = article
                return (
                    
                    <article key={_id} css={style.article}>
                        <h2 css={style.h2}>{main}</h2>
                        <h4 css={style.abstract}>{abstract}</h4>
                        <a href={web_url} target="_blank" rel="noreferrer">Click to read article</a>
                    </article>
                    
                    
                )
            })}
            </section> }
        </div>
     );
}
 
export default Fetchfunction;