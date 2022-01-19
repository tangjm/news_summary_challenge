
### Reflections on handling article headline user clicks 

I initially had SummaryPage call different function components to HeadlinesPage. 

Then I refactored the component hierarchy to reuse ArticleBlock instead of creating further components. So both HeadlinesPage and SummaryPage would call the ArticleBlock function component.

This initially involved having a boolean state in App.js that would be passed as a prop to ArticleBlock via SummaryPage, telling ArticleBlock to conditionally render either the ArticleTitle or ArticleHeadline component depending on the truth value of the boolean state.

This would be done by passing the boolean state's setter function down to ArticleHeadline, which would be called with 'true' when the user clicks the ArticleHeadline NavLink.
This would cause App.js to first rerender and then by using useParams, we can effectively send the article id of the clicked article headline back to App.js and then to SummaryPage, allowing SummaryPage to render the appropriate article with that id.

This didn't work out as the NavLink in ArticleHeadline meant that I was unable to get the inverse data flow working for the boolean state. It ignored any function props and just jumped to the SummaryPage.

But since it worked for passing the id back to SummaryPage due to the use of parameterised routes and the useParams function, this led me to think about whether there would be a similar function to useParams that would enable me to do something similar to what I initially envisioned. Luckily, I stumbled across useLocation on the react-router-dom documentation page. This enabled me to set any state in the ArticleHeadlines component and have it available as a prop to whichever component that it routes to.


### Guardian API

Took some time learning how to use the Guardian API and url parameters to search for specific items

### Some new things learnt

### PropTypes

Realised you can't assign a string value to keys of an object that you want to use Proptypes.exact with.

```
PropTypes.oneOfType([
    PropTypes.exact({ key: "string"})
    ])
```

This will result in a `checker is not a function` error because the value is a string, namely, `"string"` rather than a PropTypes function such as `PropTypes.string`

### CSS

@media provides a nice of way of adapting the UI to different screen sizes

### Technologies

- React
- Axios
- Jest
- React Testing Library
- React Router
- HTML
- CSS
- JSON
- Javascript
- Dotenv