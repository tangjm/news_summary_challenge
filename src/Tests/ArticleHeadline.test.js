import ArticleHeadline from '../Components/ArticleHeadline';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe(`ArticleHeadline test suite`, () => {

	test(`it should render a h2`, () => {
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

	describe(`if displaySummary is true or supplied as prop`, () => {

		test(`it renders a h1`, () => {
			const testHeadline = "Mock Article Headline";
			const testId = "Mock id";
			const testUrl = "Mock URL";
			const displaySummary = true;

			render(<ArticleHeadline headline={testHeadline} id={testId} url={testUrl} displaySummary={displaySummary} />);

			const testTitle = screen.getByText(testHeadline);

			expect(testTitle).toBeInTheDocument();
		})

		test(`it renders a link with the correct href`, () => {
			const testHeadline = "Mock Article Headline";
			const testId = "Mock id";
			const testUrl = "Mock URL";
			const displaySummary = true;

			render(<ArticleHeadline headline={testHeadline} id={testId} url={testUrl} displaySummary={displaySummary} />);

			const testLink = screen.getByRole("link");

			expect(testLink).toHaveAttribute("href", testUrl);
		})
	})
})
