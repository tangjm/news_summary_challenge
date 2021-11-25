import './App.css';
import { useState, useEffect } from 'react';
import sampleArticles from './utils/sampleArticles.json';

import HeadlinesPage from './Components/HeadlinesPage';
import SummaryPage from './Components/SummaryPage';

function App() {
  const [articles, setArticles] = useState([]);
  const [articleId, setArticleId] = useState("");

  const selectArticle = id => setArticleId(id);

  useEffect(() => {
    fetch("http://localhost:4000/response")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then(jsonObj => setArticles(jsonObj.results))
      .catch(e => console.log(e));

  }, []);


  return (
    <div className="App">
      <HeadlinesPage articleArr={articles} selectArticle={selectArticle} />
      <SummaryPage articleArr={articles} selectArticle={selectArticle} articleId={articleId} />
    </div>
  );
}

export default App;
