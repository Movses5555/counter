import { render, screen, fireEvent, act } from '@testing-library/react';
import Counter from './Counter';
import { fetchInitialCount } from './fetchInitialCount';


jest.mock('./fetchInitialCount', () => ({
  fetchInitialCount: jest.fn(),
}));


describe('Stage B:', () => {
  test('renders Counter and fetches initial count', async () => {
    fetchInitialCount.mockResolvedValue(10);

    await act(async () => {
      render(<Counter />);
    });
    expect(await screen.findByText('Count: 10')).toBeInTheDocument();
  });


  test('increments the count when the Increment button is clicked', async () => {
    await act(async () => {
      render(<Counter />);
    });
    
    const incrementButton = screen.getByText('Increment');
    
    act(() => {
      fireEvent.click(incrementButton);
    });

    expect(await screen.findByText('Count: 11')).toBeInTheDocument();
  });

  test('decrements the count when the Decrement button is clicked', async () => {
    await act(async () => {
      render(<Counter />);
    });
    
    const decrementButton = screen.getByText('Decrement');
    
    act(() => {
      fireEvent.click(decrementButton);
    });

    expect(await screen.findByText('Count: 9')).toBeInTheDocument();
  });
});
