import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../ProductCard";

const product = {
  id: 1,
  name: "Elden Ring",
  price: 59.99,
  image: "https://placehold.co/600x400?text=Elden+Ring",
  description: "An open-world action RPG set in the Lands Between.",
};

const renderCard = (onAddToCart = vi.fn()) =>
  render(
    <MemoryRouter>
      <ProductCard product={product} onAddToCart={onAddToCart} />
    </MemoryRouter>
  );

describe("ProductCard", () => {
  it("renders without crashing", () => {
    renderCard();
    expect(screen.getByText("Elden Ring")).toBeInTheDocument();
  });

  it("displays product name, price, and description from props", () => {
    renderCard();
    expect(screen.getByText("Elden Ring")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
    expect(
      screen.getByText("An open-world action RPG set in the Lands Between.")
    ).toBeInTheDocument();
  });

  it("contains an Add to Cart button", () => {
    renderCard();
    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
  });

  it("calls onAddToCart with the product when the button is clicked", async () => {
    const onAddToCart = vi.fn();
    renderCard(onAddToCart);

    await userEvent.click(screen.getByRole("button", { name: /add to cart/i }));

    expect(onAddToCart).toHaveBeenCalledTimes(1);
    expect(onAddToCart).toHaveBeenCalledWith(product);
  });
});