import { render } from '@testing-library/react';
import SummaryPage from '../Components/SummaryPage';

test(`Article Block matches snapshot`, () => {
	const summaryPage = render(<SummaryPage />);
	expect(summaryPage).toMatchSnapshot();
})