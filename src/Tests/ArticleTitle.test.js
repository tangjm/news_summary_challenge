import ArticleTitle from '../Components/ArticleTitle';
import { render } from '@testing-library/react';

test(`Article Title matches snapshot`, () => {
	const title = render(<ArticleTitle />);
	expect(title).toMatchSnapshot();
})

