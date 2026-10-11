import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../HomePage";

const renderHome = () =>
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

describe("HomePage", () => {
  it("renders without crashing", () => {
    renderHome();
    expect(
      screen.getByText("Level Up Your Game Library")
    ).toBeInTheDocument();
  });

  it("displays the hero subtitle and call-to-action", () => {
    renderHome();
    expect(
      screen.getByText("Discover top-rated games at prices you'll love.")
    ).toBeInTheDocument();
    expect(screen.getByText("Shop Now")).toBeInTheDocument();
  });

  it("displays the 'Why Shop with Us?' section", () => {
    renderHome();
    expect(screen.getByText("Why Shop with Us?")).toBeInTheDocument();
    expect(screen.getByText(/Top Titles/)).toBeInTheDocument();
    expect(screen.getByText(/Great Prices/)).toBeInTheDocument();
    expect(screen.getByText(/Fast Checkout/)).toBeInTheDocument();
  });
});