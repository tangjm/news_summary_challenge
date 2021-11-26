import { render, screen } from '@testing-library/react';
import ArticleText from '../Components/ArticleText';

describe(`ArticleText test suite`, () => {
	test(`Article Text renders article text`, () => {
		const testText = "Mock Article Text";

		render(<ArticleText bodyText={testText} />);
		const testParagraph = screen.getByText(testText);

		expect(testParagraph).toBeInTheDocument();
	})
})
