import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import { useState, useEffect } from 'react';

import HeadlinesPage from './Components/HeadlinesPage';
import SummaryPage from './Components/SummaryPage';

function App() {
  const [articles, setArticles] = useState([]);
  const [displaySummary, setDisplaySummary] = useState(false);


  const jsonServerUrl = `http://localhost:4000/data`;
  // console.log(articles[0].id);
  const developerKey = process.env.REACT_APP_GUARDIAN_API_KEY;

  const guardianApiUrl = `https://content.guardianapis.com/search?api-key=${developerKey}&type=article&show-fields=thumbnail,bodyText`;
  console.log(guardianApiUrl);
  // const guardianUrlSingle = guardianUrl.concat("ids:id");
  const apiUrl = jsonServerUrl;
  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then(jsonObj => {
        const articleObjArr = jsonObj.response.results.map(articleObj => {
          const newId = articleObj.id.replace(/\//g, "");
          return { ...articleObj, id: newId };
        });
        setArticles(articleObjArr);
      })
      .catch(e => console.log(e));

  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HeadlinesPage articleArr={articles} displaySummary={displaySummary} setDisplaySummary={setDisplaySummary} />
          </Route>
          <Route path="/summary/:id">
            <SummaryPage articleArr={articles} displaySummary={displaySummary} setDisplaySummary={setDisplaySummary} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
