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
    await act(async () => {
      axios.get.mockResolvedValueOnce(mockArticles);
    });

    await act(async () => {
      /* fire events that update state */
      render(<App />);
    });

    // Guardian API url that we are using in our App
    const developerKey = process.env.REACT_APP_GUARDIAN_API_KEY;
    const baseUrl = `https://content.guardianapis.com`;
    const [section, type, fields] = ["world", "article", "thumbnail,bodyText"];
    const guardianApi = baseUrl.concat(
      "/search?api-key=" + developerKey +
      "&type=" + type +
      "&section=" + section +
      "&show-fields=" + fields
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(guardianApi);
    // expect(getData).resolves.toEqual(mockArticles); This would be ideal to check the value that the axios.get request promise resolved to, but we can't import getData from App.js because its within the App function component's scope.
  })

  test(`it should render a HeadlinesPage`, async () => {
    await act(async () => render(<App />));

    const headlinesPage = screen.getByText(/MockHeadlinesPage/i);
    expect(headlinesPage).toBeInTheDocument();
  })

})


