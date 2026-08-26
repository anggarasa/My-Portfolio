import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ContactSection } from "./ContactSection";

describe("ContactSection Component", () => {
  it("renders contact info and direct channels", () => {
    render(<ContactSection />);
    expect(screen.getByText(/HUBUNGI SAYA/i)).toBeInTheDocument();
    expect(screen.getByText(/anggarasaputra273@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+62 858-6123-5561/i)).toBeInTheDocument();
  });

  it("validates empty form inputs on submit", () => {
    render(<ContactSection />);
    const submitBtn = screen.getByRole("button", { name: /KIRIM PESAN SEKARANG/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/Nama wajib diisi/i)).toBeInTheDocument();
    expect(screen.getByText(/Email wajib diisi/i)).toBeInTheDocument();
    expect(screen.getByText(/Pesan tidak boleh kosong/i)).toBeInTheDocument();
  });
});
