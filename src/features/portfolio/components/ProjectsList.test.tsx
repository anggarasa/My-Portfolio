import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ProjectsList } from "./ProjectsList";

describe("ProjectsList Component", () => {
  it("renders projects list and category filter capsules", () => {
    render(<ProjectsList />);
    expect(screen.getByText(/Proyek Nyata & Studi Kasus/i)).toBeInTheDocument();
    expect(screen.getByText(/Semua Proyek/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Proyek Kopdes/i).length).toBeGreaterThan(0);
  });
});
