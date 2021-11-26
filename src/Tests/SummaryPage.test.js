import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SummaryPage from '../Components/SummaryPage';
import sampleArticles from '../utils/sampleArticles.json';

xtest(`Article Block matches snapshot`, () => {
	const summaryPage = render(<SummaryPage />);
	expect(summaryPage).toMatchSnapshot();
})

jest.mock(`../Components/ArticleBlock`, () => {
	return function MockArticleBlock() {
		return <div>Mock ArticleBlock Component</div>;
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
	})

	xtest(`it should render ArticleText`, () => {
	})
})