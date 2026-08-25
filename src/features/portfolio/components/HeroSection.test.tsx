import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { HeroSection } from "./HeroSection";

describe("HeroSection Component", () => {
  it("renders the developer name, role, and CTA button", () => {
    render(<HeroSection />);
    expect(screen.getByText(/START THE PROJECT/i)).toBeInTheDocument();
    expect(screen.getByText(/About me/i)).toBeInTheDocument();
    expect(screen.getByText(/Anggara/i)).toBeInTheDocument();
  });
});
