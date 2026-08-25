import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ProjectsList } from "./ProjectsList";

describe("ProjectsList Component", () => {
  it("renders projects list and category filter capsules", () => {
    render(<ProjectsList />);
    expect(screen.getByText(/Selected Works & Case Studies/i)).toBeInTheDocument();
    expect(screen.getByText(/All Works/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Enterprise Web Architecture Kit/i).length).toBeGreaterThan(0);
  });
});
