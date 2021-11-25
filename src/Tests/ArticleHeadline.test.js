import ArticleHeadline from '../Components/ArticleHeadline';
import { render } from '@testing-library/react';

test(`Article Headline matches snapshot`, () => {
	const headline = render(<ArticleHeadline />);
	expect(headline).toMatchSnapshot();
})

