import { render, screen } from '@testing-library/react';
import HeadlinesPage from '../Components/HeadlinesPage';
import mockArticles from '../utils/mockArticles.json';

jest.mock(`../Components/ArticleBlock`, () => {
	return function MockArticleBlock() {
		return <div>Mock ArticleBLock Component</div>
	}
})

describe(`HeadlinesPage test suite`, () => {
	test(`it renders the correct number of articles`, () => {
		const testArticles = mockArticles.data.response.results;
		const testArticlesLength = testArticles.length;

		render(<HeadlinesPage articleArr={testArticles} />);

		const testArticleBlocksRendered = screen.getAllByText(/Mock ArticleBlock Component/i).length;

		expect(testArticleBlocksRendered).toBe(testArticlesLength);
	})
})