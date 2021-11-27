### **Installation**

1. Fork and clone the forked version of this respository
2. Open up your cloned local repository and in your terminal type the following command:

- `npm i` to install the required dependencies

3. To run the News Summary App

- cd to the folder containing package.json
- `serve -s build` to run the build

### **Testing**

Use `npm test` to run tests in Test folder.

All tests should pass except for App.test.js. I'm still working on mocking the axios GET request to the Guardian API.

### **Steps taken**

I followed Facebook's recommended approach quite closely.

1. Mock was provided
2. Created a component hierarchy

![UI Components](https://github.com/tangjm/news-summary-challenge/blob/main/images/component-hierarchy.png)
![Component Hierarchy](https://github.com/tangjm/news-summary-challenge/blob/main/images/component-hierarchy2.png)

1. Build a static version

Then I build the static version of the website. I also wrote snapshot tests but later realised that they were redundant as all components had props or state.

4. Identify the minimal representation of UI state

State is needed for the article array as it will need to reflect the latest news articles by the Guardian. 

Boolean state might also be needed to tell the App component whether to render HeadlinesPage or SummaryPage and this would be updated when an ArticleHeadline is clicked by the user. (I had problems implementing this alongside the router so I ended up with a different solution that made use of the router instead of handling the state myself. This involved using the useLocation function from react-router-dom) [^1]

5. Identify where your state should live

Since the child components of the component hierarchy falling under both the HeadlinesPage and SummaryPage needed access to various data from the guardian API, I decided to add state to the App component.

6. Add inverse data flow

Wasn't needed in the end. 

7. Add routing

I added a BrowserRouter to the App component which had two Routes: HeadlinePage and SummmaryPage. 

The SummaryPage's route path was parameterised to ensure that the clicked ArticleHeadline would be the rendered article.


[^1]: [title](https://github.com/tangjm/news-summary-challenge/blob/main/Reflection.md)




