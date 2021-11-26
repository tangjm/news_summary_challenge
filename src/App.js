import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import HeadlinesPage from './Components/HeadlinesPage';
import SummaryPage from './Components/SummaryPage';

function App() {
  const [articles, setArticles] = useState([]);

  const developerKey = process.env.REACT_APP_GUARDIAN_API_KEY;

  // const jsonServerUrl = `http://localhost:4000/data`;
  const guardianApiUrl = `https://content.guardianapis.com/search?api-key=${developerKey}&type=article&show-fields=thumbnail,bodyText`;
  const apiUrl = guardianApiUrl;

  const replaceArticleIds = articleArr => {
    return articleArr.map(articleObj => {
      const newId = articleObj.id.replace(/\//g, "");
      return { ...articleObj, id: newId };
    });
  }

  const getArticles = async () => {
    try {
      const response = await axios.get(apiUrl);
      if (response.data) {
        const articlesFound = response.data.response.results;
        return replaceArticleIds(articlesFound);
      }
      return new Error("Something went wrong!");
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  useEffect(() => {
    const getData = async () => {
      setArticles(await getArticles());
    }
    getData();
    // Fetch API
    // fetch(apiUrl)
    //   .then(response => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error("Something went wrong!");
    //   })
    //   .then(jsonObj => {
    //     const articleObjArr = jsonObj.response.results.map(articleObj => {
    //       const newId = articleObj.id.replace(/\//g, "");
    //       return { ...articleObj, id: newId };
    //     });
    //     setArticles(articleObjArr);
    //   })
    //   .catch(e => console.log(e));

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
