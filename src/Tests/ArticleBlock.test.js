import { render, screen } from '@testing-library/react';
import ArticleBlock from '../Components/ArticleBlock';
import ArticleModel from '../utils/ArticleModel';

jest.mock(`../Components/ArticleTitle`, () => {
	return function MockArticleTitle() {
		return <h1>Mock ArticleTitle Component</h1>
	}
})

jest.mock(`../Components/ArticleHeadline`, () => {
	return function MockArticleHeadline() {
		return <h1>Mock ArticleHeadline Component</h1>
	}
})

describe(`ArticleBlock test suite`, () => {

	describe(`Tests for when displaySummary is true`, () => {
		test(`it should render ArticleTitle`, () => {
			const testArticle = new ArticleModel("Mock id", "Mock title", "Mock url", "Mock img", "Mock text");
			const displaySummary = true;

			render(<ArticleBlock article={testArticle} displaySummary={displaySummary} />);

			const testArticleTitle = screen.getByText("Mock ArticleTitle Component");

			expect(testArticleTitle).toBeInTheDocument();
		});

		test(`it should render a thumbnail image`, () => {
			const testArticle = new ArticleModel("Mock id", "Mock title", "Mock url", "Mock img", "Mock text");
			const displaySummary = true;

			render(<ArticleBlock article={testArticle} displaySummary={displaySummary} />);

			const testThumbnail = screen.getByRole("img");

			expect(testThumbnail).toBeInTheDocument();
		})

		test(`it should render a thumbnail image with the correct src`, () => {
			const testArticle = new ArticleModel("Mock id", "Mock title", "Mock url", "Mock img", "Mock text");
			const displaySummary = true;

			render(<ArticleBlock article={testArticle} displaySummary={displaySummary} />);

			const testThumbnail = screen.getByRole("img");

			expect(testThumbnail).toHaveAttribute("src", testArticle.thumbnail)
		})
	})
	describe(`Tests for when displaySummary is false`, () => {

		test(`it should render ArticleHeadline`, () => {
			const testArticle = new ArticleModel("Mock id", "Mock title", "Mock url", "Mock img", "Mock text");
			const displaySummary = false;

			render(<ArticleBlock article={testArticle} displaySummary={displaySummary} />);

			const testArticleHeadline = screen.getByText("Mock ArticleHeadline Component");

			expect(testArticleHeadline).toBeInTheDocument();
		});

		test(`it should render a thumbnail image`, () => {
			const testArticle = new ArticleModel("Mock id", "Mock title", "Mock url", "Mock img", "Mock text");
			const displaySummary = false;

			render(<ArticleBlock article={testArticle} displaySummary={displaySummary} />);

			const testThumbnail = screen.getByRole("img");

			expect(testThumbnail).toBeInTheDocument();
		})

		test(`it should render a thumbnail image with the correct src`, () => {
			const testArticle = new ArticleModel("Mock id", "Mock title", "Mock url", "Mock img", "Mock text");
			const displaySummary = false;

			render(<ArticleBlock article={testArticle} displaySummary={displaySummary} />);

			const testThumbnail = screen.getByRole("img");

			expect(testThumbnail).toHaveAttribute("src", testArticle.thumbnail)
		})
	})
})