import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { EditorialWireframe3D } from "./EditorialWireframe3D";

describe("EditorialWireframe3D Component", () => {
  it("renders the 3D canvas and header banner", () => {
    const { unmount } = render(<EditorialWireframe3D />);
    expect(screen.getByText(/3D SCULPTURE \/\/ WIREFRAME/i)).toBeInTheDocument();
    expect(screen.getByText(/INTERACTIVE THREE\.JS/i)).toBeInTheDocument();
    expect(screen.getByText(/60 FPS/i)).toBeInTheDocument();

    // Verify unmount cleans up without throwing error
    expect(() => unmount()).not.toThrow();
  });
});
