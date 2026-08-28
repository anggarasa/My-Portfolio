import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProjectsSection } from "./ProjectsSection";

describe("ProjectsSection Component", () => {
  it("renders the section header and title correctly", () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/PROYEK TERVERIFIKASI/i)).toBeInTheDocument();
    expect(screen.getByText(/Diehard Escape/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyek Smartdigi/i)).toBeInTheDocument();
    expect(screen.getByText(/YM Wedding Studio/i)).toBeInTheDocument();
  });

  it("filters projects when category chips are clicked", () => {
    render(<ProjectsSection />);

    // Click Web App filter
    const webFilter = screen.getByRole("button", { name: /WEB APP/i });
    fireEvent.click(webFilter);
    expect(screen.getByText(/Diehard Escape/i)).toBeInTheDocument();
    expect(screen.getByText(/YM Wedding Studio/i)).toBeInTheDocument();
    expect(screen.queryByText(/Proyek Smartdigi/i)).not.toBeInTheDocument();

    // Click Mobile App filter
    const mobileFilter = screen.getByRole("button", { name: /MOBILE APP/i });
    fireEvent.click(mobileFilter);
    expect(screen.getByText(/Proyek Smartdigi/i)).toBeInTheDocument();
    expect(screen.queryByText(/Diehard Escape/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/YM Wedding Studio/i)).not.toBeInTheDocument();
  });

  it("opens project specification modal when button is clicked with data-lenis-prevent", () => {
    render(<ProjectsSection />);
    const buttons = screen.getAllByRole("button", { name: /BEDAH SPESIFIKASI/i });
    fireEvent.click(buttons[0]);

    expect(screen.getByText(/ARSITEKTUR & IMPLEMENTASI TEKNIS/i)).toBeInTheDocument();
    const dialogContent = screen.getByRole("dialog");
    expect(dialogContent).toHaveAttribute("data-lenis-prevent");
    expect(dialogContent).toHaveClass("overflow-y-auto");
    expect(dialogContent).toHaveClass("overscroll-contain");
  });

  it("renders updated project years correctly", () => {
    render(<ProjectsSection />);
    expect(screen.getAllByText("2026").length).toBeGreaterThanOrEqual(2); // Diehard & YM Wedding
    expect(screen.getByText("2025")).toBeInTheDocument(); // Smartdigi
  });
});
