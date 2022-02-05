import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo, useReducer } from 'react';
import './App.css';
import HeadlinesPage from './Components/HeadlinesPage';
import SummaryPage from './Components/SummaryPage';


// custom fetch hook
// -> articles and setQuery to update the query params

// API request
const useFetch = (defaultUrl) => {
  const [apiUrl, setApiUrl] = useState(defaultUrl);
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getArticles = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const res = await axios.get(apiUrl);
      const articlesFound = res.data.response.results;
      return filterArticleKeys(replaceArticleIds(articlesFound));
    } catch (e) {
      setIsError(true);
      return [];
    }
  }, [apiUrl, filterArticleKeys])

  useEffect(() => {
    const getData = async () => {
      setArticles(await getArticles());
      setIsLoading(false);
    }
    getData();
  }, [getArticles]);

  return [{ articles, isError, isLoading }, setApiUrl];
}

function App() {
  const [articleTypeQuery, setArticleTypeQuery] = useState(``);
  const [query, setQuery] = useState(["world", "article", "thumbnail,bodyText"]);

  // Guardian API
  const jsonServer = `http://localhost:4000/`;
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

  const [state, setApiUrl] = useFetch(selectServer[1]);

  const newsSections = ["world", "politics", "sport", "business",
    "media", "culture", "education", "music"];
  const generateOptions = stringArr => {
    return stringArr.map((string, index) => {
      return <option key={index}
        value={string}>
        {capitaliseFirstLetter(string)}
      </option>
    })
  }

  const submitHandler = () => {
    // const newQuery = [...query];
    // newQuery[0] = articleTypeQuery;
    setQuery(query => {
      const newQuery = [...query];
      newQuery[0] = articleTypeQuery;
      return newQuery;
    });
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Search for articles: </h1>
            <form onSubmit={e => {
              e.preventDefault();
              submitHandler();
              setApiUrl(() => guardianApi);
            }}>
              <label htmlFor="news-select">Search for news:</label>
              &nbsp;
              <select name="news-section" id="news-select" value={articleTypeQuery} onChange={e => setArticleTypeQuery(e.target.value)}>
                <option value="" selected>--Please choose an option--</option>
                {generateOptions(newsSections)}
              </select>
              &nbsp;
              <input type="submit" value="Search" />
            </form>
            <br />
            {state.isError && <div>Something went wrong...</div>}
            {state.isLoading ? <div>Loading...</div> :
              <HeadlinesPage articleArr={state.articles} />}
          </Route>
          <Route path="/summary/:id">
            <SummaryPage articleArr={state.articles} />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

const keysNeeded = ["id", "webTitle", "webUrl", "fields"];

const filterArticleKeys = articleArr => {
  return articleArr.map(articleObj => {
    Object.keys(articleObj).forEach(key => {
      if (!keysNeeded.includes(key)) delete articleObj[key];
    })
    return articleObj;
  });
};

// Formatting functions

// Formatting fetched data
const replaceArticleIds = articleArr => {
  return articleArr.map(articleObj => {
    const newId = articleObj.id.replace(/\//g, "");
    return { ...articleObj, id: newId };
  });
}

const capitaliseFirstLetter = string => {
  return string[0].toUpperCase() + string.slice(1);
}

export default App;
