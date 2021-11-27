import ArticleHeadline from '../Components/ArticleHeadline';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe(`ArticleHeadline test suite`, () => {

	test(`it should render a h2 if no displaySummary is supplied`, () => {
		const testHeadline = "Mock Article Headline";
		const testId = "Mock id";
		const testUrl = "Mock URL";

		render(
			<BrowserRouter>
				<ArticleHeadline headline={testHeadline} id={testId} url={testUrl} />);
			</BrowserRouter>)

		const textElement = screen.getByText(testHeadline);

		expect(textElement).toBeInTheDocument();
	})

	test(`it renders a h1 if displaySummary is true`, () => {
		const testHeadline = "Mock Article Headline";
		const testId = "Mock id";
		const testUrl = "Mock URL";
		const displaySummary = true;

		render(<ArticleHeadline headline={testHeadline} id={testId} url={testUrl} displaySummary={displaySummary} />);

		const testTitle = screen.getByText(testHeadline);

		expect(testTitle).toBeInTheDocument();
	})

	test(`it renders a link with the correct href if displaySummary is "true"`, () => {
		const testHeadline = "Mock Article Headline";
		const testId = "Mock id";
		const testUrl = "Mock URL";
		const displaySummary = true;

		render(<ArticleHeadline headline={testHeadline} id={testId} url={testUrl} displaySummary={displaySummary} />);

		const testLink = screen.getByRole("link");

		expect(testLink).toHaveAttribute("href", testUrl);
	})
})
