import { screen, fireEvent, act, waitFor } from '@testing-library/react';
import Counters from "./Counters";
import { renderWithProviders } from "../../redux/testUtils";


describe("Stage D: Counter App with Redux", () => {

  test("renders initial counter", async () => {
    renderWithProviders(<Counters />, {
      preloadedState: {
        counter: {
          counters: [{ id: 1, value: 42 }],
        },
      },
    });

    const counter = await screen.findByText("Count: 42");
    expect(counter).toBeInTheDocument();
  });

  test('increments the counter', async () => {
    renderWithProviders(<Counters />);

    const incrementButton = await screen.findByText('Increment');
    const counter = await screen.findByText(/Count: \d+/);
    const initialCount = parseInt(counter.textContent.split(': ')[1]);
    await act(async () => {
      fireEvent.click(incrementButton);
    });
    expect(counter).toHaveTextContent(`Count: ${initialCount + 1}`);
  });

  test('decrements the counter', async () => {
    renderWithProviders(<Counters />);

    const decrementButton = await screen.findByText('Decrement');
    const counter = await screen.findByText(/Count: \d+/);
    const initialCount = parseInt(counter.textContent.split(': ')[1]);
    await act(async () => {
      fireEvent.click(decrementButton);
    });
    expect(counter).toHaveTextContent(`Count: ${initialCount - 1}`);
  });

  test('randomizes the counter', async () => {
    renderWithProviders(<Counters />);

    const randomizeButton = await screen.findByText('Randomize');
    const counter = await screen.findByText(/Count: \d+/);
    const initialCount = counter.textContent.split(': ')[1];
    await act(async () => {
      fireEvent.click(randomizeButton);
    });
    expect(counter).not.toHaveTextContent(initialCount);
  });

  test('adds a new counter', async () => {
    renderWithProviders(<Counters />, {
      preloadedState: {
        counter: {
          counters: [{ id: 1, value: 45 }],
          status: 'idle',
          error: null,
        },
      },
    });
    const addCounterButton = screen.getByTestId('add');
    fireEvent.click(addCounterButton);
    await waitFor(async() => {
      const counters = await screen.findAllByText(/Count: \d+/);
      const newCounter = counters[counters.length - 1];
      expect(newCounter).toBeInTheDocument();
      expect(newCounter).toHaveTextContent(/Count: \d+/);
    });
  });
});
