import { render } from '@testing-library/react';
import ArticleText from '../Components/ArticleText';

test(`Article Text matches snapshot`, () => {
	const text = render(<ArticleText />);
	expect(text).toMatchSnapshot();
})