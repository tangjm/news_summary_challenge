import { render } from '@testing-library/react';
import HeadlinesPage from '../Components/HeadlinesPage';

test(`Article Block matches snapshot`, () => {
	const headlinesPage = render(<HeadlinesPage />);
	expect(headlinesPage).toMatchSnapshot();
})