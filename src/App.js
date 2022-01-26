import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';

import HeadlinesPage from './Components/HeadlinesPage';
import SummaryPage from './Components/SummaryPage';

function App() {
  const [articleTypeQuery, setArticleTypeQuery] = useState(``)
  const [query, setQuery] = useState(["world", "article", "thumbnail,bodyText"]);
  const [articles, setArticles] = useState([]);

  const jsonServer = `http://localhost:4000/data`;

  // Guardian API
  const developerKey = process.env.REACT_APP_GUARDIAN_API_KEY;
  const baseUrl = `https://content.guardianapis.com`;
  const [section, type, fields] = query;
  const guardianApi = baseUrl.concat(
    "/search?api-key=" + developerKey +
    "&type=" + type +
    "&section=" + section +
    "&show-fields=" + fields
  );

  const selectServer = [jsonServer, guardianApi];
  const apiUrl = selectServer[1];

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
      if (res?.data) {
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
      <h1>Search for articles: </h1>
      <form onSubmit={e => {
        const newQuery = [...query];
        newQuery[0] = articleTypeQuery;
        setQuery(newQuery);
        e.preventDefault();
      }}>
        <label for="news-select">Search for news:</label>
        &nbsp;
        <select name="news-section" id="news-select" onChange={e => setArticleTypeQuery(e.target.value)}>
          <option value="" selected>--Please choose an option--</option>
          <option value="world" onSelectk={e => setArticleTypeQuery(e.target.value)}>World</option>
          <option value="politics" onSelect={e => setArticleTypeQuery(e.target.value)}>Politics</option>
          <option value="sport" onSelect={e => setArticleTypeQuery(e.target.value)}>Sport</option>
          <option value="business" onSelect={e => setArticleTypeQuery(e.target.value)}>Business</option>
          <option value="media" onSelect={e => setArticleTypeQuery(e.target.value)}>Media</option>
          <option value="culture" onSelect={e => setArticleTypeQuery(e.target.value)}>Culture</option>
          <option value="education" onSelect={e => setArticleTypeQuery(e.target.value)}>Education</option>
          <option value="music" onSelect={e => setArticleTypeQuery(e.target.value)}>Music</option>
        </select>
        &nbsp;
        <input type="submit" value="Search" />
      </form>
      <br />
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
    </div >
  );
}

// Formatting fetched data
const replaceArticleIds = articleArr => {
  return articleArr.map(articleObj => {
    const newId = articleObj.id.replace(/\//g, "");
    return { ...articleObj, id: newId };
  });
}

export default App;
