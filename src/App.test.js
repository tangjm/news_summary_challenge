import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
// import { sampleArticles as mockArticles } from './utils/sampleArticles.json';
const mockArticles = require(`./utils/sampleArticles.json`);


// jest.mock("axios", () => {
//   return {
//     __esModule: true,
//     default: jest.fn().mockResolvedvalue(mockArticles)
//   }
// })
jest.mock('axios', () => jest.fn(() => Promise.resolve(mockArticles)));


describe(`App.js test suite`, () => {
  beforeEach(() => {

  })

  test('renders HeadlinesPage', async () => {
    act(() => {
      render(<App />);
    })

    const testApp = screen.getByText(/B\.1\.1\.529 Covid variant ‘most worrying we’ve seen’, says top UK medical adviser/i);


    await waitFor(() => {
      expect(testApp).toBeInTheDocument();
      expect(appComponent).toContainElement("p");

    })
  });
})


