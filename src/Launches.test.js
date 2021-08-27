import { rest } from "msw";
import Launches from "./pages/Launches";
import renderer from "react-test-renderer";
import {
  render,
  findAllByText,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import App from "./App";
// import renderer  from 'react-test-renderer'

describe("Launches", () => {
  beforeEach(async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/i));
  });

  it("displays launches", () => {
    expect(screen.getByText(/Test Launch 1/i)).toBeInTheDocument();
  });
});

it("Test test", () => {});
