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

window.scrollTo = jest.fn();

describe(`SummaryPage test suite`, () => {

	beforeEach(() => {
		const testArticleId = "testId";
		const articles = sampleArticles.data.response.results;
		articles[0].id = testArticleId;

		render(
			<BrowserRouter>
				<SummaryPage articleArr={articles} />
			</BrowserRouter>
		);
	})

	afterEach(() => {
		testArticleId = null;
		articles = null;
	})

	test(`it should render an ArticleBlock`, () => {
		const testArticleBlock = screen.getByText(/mock articleblock component/i);

		expect(testArticleBlock).toBeInTheDocument();
	});

	test(`it should render ArticleText`, () => {
		const testArticleText = screen.getByText(/mock articletext component/i);

		expect(testArticleText).toBeInTheDocument();
	})

	test(`scrolls to top of new page after render`, () => {
		expect(window.scrollTo).toHaveBeenCalled();
	})
})

