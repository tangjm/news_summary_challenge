import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SummaryPage from '../Components/SummaryPage';
import sampleArticles from '../utils/sampleArticles.json';

jest.mock(`../Components/ArticleBlock`, () => {
	return function MockArticleBlock() {
		return <div>Mock ArticleBlock Component</div>;
	};
});

jest.mock(`../Components/ArticleText`, () => {
	return function MockArticleText() {
		return <div>Mock ArticleText Component</div>;
	};
});

describe(`SummaryPage test suite`, () => {
	test(`it should render an ArticleBlock`, () => {
		const testArticleId = "testId";
		const articles = sampleArticles.data.response.results;
		articles[0].id = testArticleId;

		render(
			<BrowserRouter>
				<SummaryPage articleArr={articles} />
			</BrowserRouter>
		);

		const testArticleBlock = screen.getByText(/mock articleblock component/i);

		expect(testArticleBlock).toBeInTheDocument();
	});

	test(`it should render ArticleText`, () => {
		const testArticleId = "testId";
		const articles = sampleArticles.data.response.results;
		articles[0].id = testArticleId;

		render(
			<BrowserRouter>
				<SummaryPage articleArr={articles} />
			</BrowserRouter>
		);

		const testArticleText = screen.getByText(/mock articletext component/i);

		expect(testArticleText).toBeInTheDocument();
	})
})