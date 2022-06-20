
import Fetchfunction from "./components/Fetch";
import Navbar from "./components/Navbar/Navbar";
import SearchForm from "./components/SearchForm";
import Settings from "./components/Settings/Settings";
import React, {useState, useEffect} from "react";

function App() {
  const [ articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isloading, setIsloading] = useState(true)
  useEffect(() =>{
    const fetchArticles = async() =>  {
    try {
        
            const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`)
            const articles = await res.json()
            setArticles(articles.response.docs)
            setIsloading(false);
    } catch (error) {
        console.error(error);
    }
}
    fetchArticles()
}, [term])
  return (
    <div className="App">
      <Navbar/>
      <div className="settings__menu">
      <Settings/>
      </div>
      <div className="searchForm">
          <SearchForm  searchText={(text) => setTerm(text)}/>
      </div>
      <Fetchfunction isloading={isloading} articles={articles}/>
    </div>
  );
}

export default App;
