import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

describe("SmoothScrollProvider Component", () => {
  it("renders children wrapped inside provider", () => {
    render(
      <SmoothScrollProvider>
        <div>Smooth Scroll Child Content</div>
      </SmoothScrollProvider>,
    );
    expect(screen.getByText(/Smooth Scroll Child Content/i)).toBeInTheDocument();
  });
});
