import { render } from '@testing-library/react';
import ArticleBlock from '../Components/ArticleBlock';

test(`Article Block matches snapshot`, () => {
	const block = render(<ArticleBlock />);
	expect(block).toMatchSnapshot();
})