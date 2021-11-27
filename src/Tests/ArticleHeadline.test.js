import ArticleHeadline from '../Components/ArticleHeadline';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe(`ArticleHeadline test suite`, () => {

	test(`it should render the article headline`, () => {
		const testId = "Mock id";
		const testHeadline = "Mock Article Headline";

		render(
			<BrowserRouter>
				<ArticleHeadline headline={testHeadline} id={testId} />
			</BrowserRouter>)

		const textElement = screen.getByText(testHeadline);

		expect(textElement).toBeInTheDocument();
	})
})
