import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';

import HeadlinesPage from './Components/HeadlinesPage';
import SummaryPage from './Components/SummaryPage';

function App() {
  const [articles, setArticles] = useState([]);

  const jsonServer = `http://localhost:4000/data`;

  // Guardian API
  const developerKey = process.env.REACT_APP_GUARDIAN_API_KEY;
  const baseUrl = `https://content.guardianapis.com`;
  const [section, type, fields] = ["world", "article", "thumbnail,bodyText"];
  const guardianApi = baseUrl.concat(
    "/search?api-key=" + developerKey +
    "&type=" + type +
    "&section=" + section +
    "&show-fields=" + fields
  );

  const selectServer = [jsonServer, guardianApi];
  const apiUrl = selectServer[1];

  // Formatting fetched data
  const replaceArticleIds = articleArr => {
    return articleArr.map(articleObj => {
      const newId = articleObj.id.replace(/\//g, "");
      return { ...articleObj, id: newId };
    });
  }

  const keysNeeded = useMemo(() => ["id", "webTitle", "webUrl", "fields"], []);

  const filterArticleKeys = useCallback(articleArr => {
    return articleArr.map(articleObj => {
      Object.keys(articleObj).forEach(key => {
        if (!keysNeeded.includes(key)) delete articleObj[key];
      })
      return articleObj;
    });
  }, [keysNeeded]);

  // API request
  const getArticles = useCallback(async () => {
    try {
      const res = await axios.get(apiUrl);
      if (res.data) {
        const articlesFound = res.data.response.results;
        return filterArticleKeys(replaceArticleIds(articlesFound));
      }
      return new Error("Something went wrong!");
    } catch (e) {
      console.log(e.message);
      return [];
    }
  }, [apiUrl, filterArticleKeys])

  useEffect(() => {
    const getData = async () => {
      setArticles(await getArticles());
    }
    getData();
  }, [getArticles]);

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
