import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutSection } from "./AboutSection";

describe("AboutSection Component", () => {
  it("renders the about section header and editorial title", () => {
    render(<AboutSection />);
    expect(screen.getByText(/FILOSOFI & PERJALANAN/i)).toBeInTheDocument();
    expect(screen.getByText(/LINIMASA REKAM JEJAK/i)).toBeInTheDocument();
    expect(screen.getByText("2025 - SEKARANG")).toBeInTheDocument();
  });

  it("renders all updated career timeline entries accurately", () => {
    render(<AboutSection />);

    // Item 1: Kelulusan SMK (Mei 2025)
    expect(screen.getByText("Mei 2025")).toBeInTheDocument();
    expect(screen.getByText(/Kelulusan Rekayasa Perangkat Lunak \(RPL\)/i)).toBeInTheDocument();
    expect(screen.getAllByText(/SMK Al-Intisab Patokbeusi/i).length).toBeGreaterThanOrEqual(1);

    // Item 2: PT Zen Multimedia Indonesia (Jun - Des 2025)
    expect(screen.getByText("Jun - Des 2025")).toBeInTheDocument();
    expect(screen.getByText("FullStack Engineer")).toBeInTheDocument();
    expect(screen.getByText(/PT Zen Multimedia Indonesia/i)).toBeInTheDocument();

    // Item 3: Freelance Web & Mobile Developer (2026 - Sekarang)
    expect(screen.getByText("2026 - Sekarang")).toBeInTheDocument();
    expect(screen.getByText(/Freelance Web & Mobile Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Independent Contractor \/ Digital Solutions/i)).toBeInTheDocument();
  });
});
