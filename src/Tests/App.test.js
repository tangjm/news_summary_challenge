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

    const testApp = screen.getByText(/Power of the Dog to Parasite seven best films to watch on TV this week/i);

    expect(testApp).toBeInTheDocument();
    expect(testApp).toContainElement("h2");
  });
})


