import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Interactive3DView } from "./Interactive3DView";

describe("Interactive3DView Component", () => {
  it("renders 3D WebGL showcase header and technical metrics", () => {
    render(<Interactive3DView />);
    expect(screen.getByText(/Arsitektur WebGL & Interaksi Spasial/i)).toBeInTheDocument();
    expect(screen.getByText(/THREE.JS/i)).toBeInTheDocument();
    expect(screen.getByText(/GSAP 3.12/i)).toBeInTheDocument();
    expect(screen.getByText(/BANGUN PROYEK INTERAKTIF/i)).toBeInTheDocument();
  });
});
