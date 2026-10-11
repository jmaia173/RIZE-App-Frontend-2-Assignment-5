import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const savedCart = [
  {
    id: 1,
    name: "Elden Ring",
    price: 59.99,
    image: "https://placehold.co/600x400?text=Elden+Ring",
    description: "An open-world action RPG set in the Lands Between.",
  },
];

let getItemSpy;
let setItemSpy;

beforeEach(() => {
  localStorage.clear();
  getItemSpy = vi.spyOn(Storage.prototype, "getItem");
  setItemSpy = vi.spyOn(Storage.prototype, "setItem");
});

afterEach(() => {
  vi.restoreAllMocks();
  window.history.pushState({}, "", "/");
});

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText("Level Up Your Game Library")).toBeInTheDocument();
  });

  it("loads cart data from localStorage on startup", () => {
    getItemSpy.mockImplementation((key) =>
      key === "cart" ? JSON.stringify(savedCart) : null
    );
    window.history.pushState({}, "", "/cart");

    render(<App />);

    expect(getItemSpy).toHaveBeenCalledWith("cart");
    expect(screen.getByText("Elden Ring")).toBeInTheDocument();
  });

  it("falls back to an empty cart when stored JSON is invalid", () => {
    getItemSpy.mockImplementation(() => "not valid json");
    render(<App />);
    expect(setItemSpy).toHaveBeenCalledWith("cart", "[]");
  });

  it("falls back to an empty cart when stored value is not an array", () => {
    getItemSpy.mockImplementation(() => "{}");
    render(<App />);
    expect(setItemSpy).toHaveBeenCalledWith("cart", "[]");
  });

  it("saves the cart to localStorage when it changes", async () => {
    window.history.pushState({}, "", "/products");
    render(<App />);

    await userEvent.click(
      screen.getAllByRole("button", { name: /add to cart/i })[0]
    );

    const lastCall = setItemSpy.mock.calls.at(-1);
    expect(lastCall[0]).toBe("cart");
    expect(JSON.parse(lastCall[1])).toHaveLength(1);
    expect(JSON.parse(lastCall[1])[0].name).toBe("Elden Ring");
  });

  it("removes an item from the cart and updates localStorage", async () => {
    getItemSpy.mockImplementation((key) =>
      key === "cart" ? JSON.stringify(savedCart) : null
    );
    window.history.pushState({}, "", "/cart");
    render(<App />);

    await userEvent.click(screen.getByRole("button", { name: /remove/i }));

    expect(JSON.parse(setItemSpy.mock.calls.at(-1)[1])).toEqual([]);
  });
});