import React, {useState, useEffect} from "react";

const Fetchfunction = () => {
    const [ articles, setArticles] = useState([])
    const [term, setTerm] = useState('everything')
    const [isloading, setIsloading] = useState(true)

    useEffect(() =>{
        const fetchArticles = async() =>  {
        try {
            
                const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`)
                const articles = await res.json()
                console.log(articles);
                setArticles(articles.response.docs)
        } catch (error) {
            console.error(error);
        }
    }
        fetchArticles()
    }, [])
    return ( 
        <div>
            <section>
            {articles.map((article) => {
                const {abstract, headline:{main}, byline:{original}, lead_paragraph, news_desk, section_name, web_url, _id, word_count} = article
                return (
                    <article key={_id}>
                        <h2>{main}</h2>
                        <h4>{abstract}</h4>
                        <a href={web_url} target="_blank">Click to read article</a>
                        <p>{lead_paragraph}</p>
                        <ul>
                            <li>{original}</li>
                            <li>{news_desk}</li>
                            <li>{section_name}</li>
                            <li>{word_count}</li>
                        </ul>
                    </article>
                )
            })}
            </section>
        </div>
     );
}
 
export default Fetchfunction;