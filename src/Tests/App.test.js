import { render, screen } from '@testing-library/react';
import { mockArticles } from '../utils/sampleArticles.json';
import { act } from 'react-dom/test-utils';
import App from '../App';
import axios from 'axios';

jest.mock('axios');
jest.mock('../Components/HeadlinesPage', () => {
  return () => {
    return <span>MockHeadlinesPage</span>;
  }
})
jest.mock('../Components/SummaryPage', () => {
  return () => {
    return <span>MockSummaryPage</span>;
  }
})


describe(`App.js test suite`, () => {
  beforeEach(() => {
  })
  afterEach(() => {
  })

  test(`it should make a get request`, async () => {
    const resolve = "successfully resolved";

    await act(async () => {
      axios.get.mockResolvedValueOnce(resolve);
    });

    await act(async () => {
      /* fire events that update state */
      render(<App />);
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
  })

})


