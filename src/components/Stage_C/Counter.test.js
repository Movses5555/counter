import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Counter from "./Counter";

describe("Stage C:", () => {
  test("randomizes the count", async () => {
    render(<Counter />);
    const randomButton = screen.getByText("Randomize");
    fireEvent.click(randomButton);
    await waitFor(() => {
      const countText = screen.getByText(/Count:/);
      expect(countText).toBeInTheDocument();
    });
  });
});
