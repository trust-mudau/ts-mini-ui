import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../src/components/Button/Button";
import { vi } from "vitest";

test("renders with text and handles click", () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Click</Button>);
  fireEvent.click(screen.getByText("Click"));
  expect(onClick).toHaveBeenCalled();
});
