import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// Start Server before running tests
beforeAll(() => {
  console.log("Starting Server before running tests");
  server.listen({
    onUnhandledRequest: "Warning: unhandled request",
  });
});

// Reset Server after each test
afterEach(() => server.resetHandlers());

// Close Server after all test are completed
afterAll(() => server.close());
