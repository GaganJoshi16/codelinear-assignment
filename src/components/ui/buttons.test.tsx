import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OutlinedButton, PrimaryGradientButton } from "./buttons";

describe("button primitives", () => {
  it("renders primary gradient button", () => {
    render(<PrimaryGradientButton label="REQUEST DEMO" />);
    expect(screen.getByRole("button", { name: /request demo/i })).toBeInTheDocument();
  });

  it("renders outlined button", () => {
    render(<OutlinedButton label="Contact Us" />);
    expect(screen.getByRole("button", { name: /contact us/i })).toBeInTheDocument();
  });
});
