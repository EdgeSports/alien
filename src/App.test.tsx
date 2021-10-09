import { render, screen } from "@testing-library/react";
import { ListCard } from "components/Cards";

// TODO build better tests
test("renders card", () => {
  render(<ListCard title="This is a card" items={[]} />);
  const cardElement = screen.getByText("This is a card");
  expect(cardElement).toBeInTheDocument();
});
