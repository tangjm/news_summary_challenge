import ArticleTitle from '../Components/ArticleTitle';
import { render, screen } from '@testing-library/react';


describe(`Article Title test suite`, () => {
	test(`it renders article title`, () => {
		const testHeadline = "Mock Article Headline";

		render(<ArticleTitle headline={testHeadline} />);

		const testTitle = screen.getByText(testHeadline);

		expect(testTitle).toBeInTheDocument();
	})

	test(`it renders a link with the correct href`, () => {
		const testUrl = "Mock URL";

		render(<ArticleTitle url={testUrl} />);

		const testLink = screen.getByRole("link");

		expect(testLink).toHaveAttribute("href", testUrl);
	})
})

