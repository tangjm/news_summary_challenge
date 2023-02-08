# Guardian News Summary App 

A front-end app displaying news headlines from the Guardian news website. This was a project for learning about React Hooks, especially the 'useEffect' hook and how we can use it to make asynchronous API calls. It was also a good opportunity to practice creating custom hooks.

This project is currently deployed on Vercel.

### **Installation steps**

1. Fork and clone the forked version of this respository
2. Open your cloned local repository and ensure you are on the main branch
3. In your terminal, type the following command:

- `npm i` to install the required dependencies

3. To run the News Summary App

- Apply for a Guardian API key here: https://open-platform.theguardian.com/access/
- Create a .env file and add your API key to the file as follows.

```bash
REACT_APP_GUARDIAN_API_KEY=<your-API-key>
```

- Open your terminal and `cd` to or make sure you're in the folder containing package.json
- `serve -s build` to run the build

### **Testing guide**

Use `npm test` to run tests in Test folder.

All tests should pass except for App.test.js. 
I had trouble mocking the axios GET request to the Guardian API.

### **Steps taken**

I followed Facebook's recommended approach quite closely.

1. Mock was provided
2. Creating the component hierarchy

![UI Components](https://github.com/tangjm/news-summary-challenge/blob/main/images/component-hierarchy.png)
![Component Hierarchy](https://github.com/tangjm/news-summary-challenge/blob/main/images/component-hierarchy2.png)

3. Building the static version

Then I built the static version of the website. I also wrote snapshot tests but later realised they were redundant as all components had props or state.

4. Identifing what states are needed

The article array that gets fetched from the API will need to be a state as it will need to stay up to date with the latest Guardian news articles.

Boolean state might also be needed to tell the App component whether to render HeadlinesPage or SummaryPage and this would be updated when an ArticleHeadline is clicked by the user. 

I had problems implementing this alongside the router so I ended up with a different solution that made use of the router instead of handling the state myself. This involved using the useLocation function from react-router-dom. See footnote for more on this. [^1]

5. Identifying where those states should live

Since the child components of the component hierarchy falling under both the HeadlinesPage and SummaryPage needed access to various data from the Guardian API, I decided to add the state for the GET response data to the App component.

6. Inverse data flow

Wasn't needed in the end.

7. Routing

I added a BrowserRouter to the App component which had two Routes: HeadlinePage and SummmaryPage. 

The SummaryPage's route path was parameterised to ensure that the clicked ArticleHeadline would be the rendered article.

8. Refactoring, testing, optimisation

Removed ArticleTitle component so that we are reusing the ArticleHeadline component which also takes care of conditional rendering. 

[^1]: [Further reflections](https://github.com/tangjm/news-summary-challenge/blob/main/Reflection.md)




