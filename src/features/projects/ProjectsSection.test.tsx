import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProjectsSection } from "./ProjectsSection";

describe("ProjectsSection Component", () => {
  it("renders the section header and title correctly", () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/PROYEK TERVERIFIKASI/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyek Kopdes/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyek Smartdigi/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyek E-Rapet/i)).toBeInTheDocument();
  });

  it("filters projects when category chips are clicked", () => {
    render(<ProjectsSection />);

    // Click Web App filter
    const webFilter = screen.getByRole("button", { name: /WEB APP/i });
    fireEvent.click(webFilter);
    expect(screen.getByText(/Proyek Kopdes/i)).toBeInTheDocument();
    expect(screen.queryByText(/Proyek Smartdigi/i)).not.toBeInTheDocument();

    // Click Mobile App filter
    const mobileFilter = screen.getByRole("button", { name: /MOBILE APP/i });
    fireEvent.click(mobileFilter);
    expect(screen.getByText(/Proyek Smartdigi/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyek E-Rapet/i)).toBeInTheDocument();
    expect(screen.queryByText(/Proyek Kopdes/i)).not.toBeInTheDocument();
  });

  it("opens project specification modal when button is clicked", () => {
    render(<ProjectsSection />);
    const buttons = screen.getAllByRole("button", { name: /BEDAH SPESIFIKASI/i });
    fireEvent.click(buttons[0]);

    expect(screen.getByText(/ARSITEKTUR & IMPLEMENTASI TEKNIS/i)).toBeInTheDocument();
  });
});
