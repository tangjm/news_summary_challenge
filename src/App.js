import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import HeadlinesPage from './Components/HeadlinesPage';
import SummaryPage from './Components/SummaryPage';

function App() {
  const [articles, setArticles] = useState([]);

  const jsonServer = `http://localhost:4000/data`;
  const developerKey = process.env.REACT_APP_GUARDIAN_API_KEY;
  const guardianApi = `https://content.guardianapis.com/search?api-key=${developerKey}&type=article&show-fields=thumbnail,bodyText`;
  const apiUrl = jsonServer;

  const replaceArticleIds = articleArr => {
    return articleArr.map(articleObj => {
      const newId = articleObj.id.replace(/\//g, "");
      return { ...articleObj, id: newId };
    });
  }

  const getArticles = async () => {
    try {
      const res = await axios.get(apiUrl);
      if (res.data) {
        const articlesFound = res.data.response.results;
        return replaceArticleIds(articlesFound);
      }
      return new Error("Something went wrong!");
    } catch (e) {
      console.log(e.message);
      return [];
    }
  }

  useEffect(() => {
    const getData = async () => {
      setArticles(await getArticles());
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HeadlinesPage articleArr={articles} />
          </Route>
          <Route path="/summary/:id">
            <SummaryPage articleArr={articles} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
