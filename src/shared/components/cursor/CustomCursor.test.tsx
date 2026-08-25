import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { CustomCursor } from "./CustomCursor";

describe("CustomCursor Component", () => {
  it("renders without crashing in DOM environment", () => {
    const { container } = render(<CustomCursor />);
    expect(container).toBeInTheDocument();
  });
});
