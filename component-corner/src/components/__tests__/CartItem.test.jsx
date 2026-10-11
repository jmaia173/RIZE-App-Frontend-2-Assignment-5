import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "../CartItem";

const item = { id: 1, name: "Elden Ring", price: 59.99 };

describe("CartItem", () => {
  it("renders without crashing", () => {
    render(<CartItem item={item} onRemove={vi.fn()} />);
    expect(screen.getByText("Elden Ring")).toBeInTheDocument();
  });

  it("displays the item name and price", () => {
    render(<CartItem item={item} onRemove={vi.fn()} />);
    expect(screen.getByText("Elden Ring")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
  });

  it("calls onRemove when the Remove button is clicked", async () => {
    const onRemove = vi.fn();
    render(<CartItem item={item} onRemove={onRemove} />);

    await userEvent.click(screen.getByRole("button", { name: /remove/i }));

    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});