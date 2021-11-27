import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import { mockArticles } from '../utils/sampleArticles.json';

jest.mock('axios', () => jest.fn(() => Promise.resolve(mockArticles)));


describe(`App.js test suite`, () => {
  beforeEach(() => {
  })
  afterEach(() => {
  })

  test('renders HeadlinesPage', () => {
    act(() => {
      render(<App />);
    })

    const testApp = screen.getByText(/‘A bit pushed’: Enid Blyton letters reveal strain of work and motherhood/i);

    expect(testApp).toBeInTheDocument();
    expect(testApp).toContainElement("h2");
  });
})


