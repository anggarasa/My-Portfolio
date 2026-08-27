import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { OpeningAnimation } from "./OpeningAnimation";

describe("OpeningAnimation Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders preloader stage with editorial elements and skip button on load", () => {
    const { unmount } = render(<OpeningAnimation />);

    expect(screen.getByRole("dialog", { name: /opening animation/i })).toBeInTheDocument();
    expect(screen.getByText(/ANGGARA SAPUTRA/i)).toBeInTheDocument();
    expect(screen.getByText(/FULLSTACK WEB & MOBILE DEVELOPER/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /skip opening animation/i })).toBeInTheDocument();

    expect(() => unmount()).not.toThrow();
  });

  it("clicking skip button dismisses preloader and calls onFinished", () => {
    const onFinishedMock = vi.fn();
    render(<OpeningAnimation onFinished={onFinishedMock} />);

    const skipBtn = screen.getByRole("button", { name: /skip opening animation/i });
    fireEvent.click(skipBtn);

    expect(onFinishedMock).toHaveBeenCalled();
  });

  it("pressing Escape key dismisses preloader", () => {
    const onFinishedMock = vi.fn();
    render(<OpeningAnimation onFinished={onFinishedMock} />);

    fireEvent.keyDown(window, { key: "Escape" });

    expect(onFinishedMock).toHaveBeenCalled();
  });

  it("always renders immediately on subsequent renders/mounts", () => {
    const { unmount } = render(<OpeningAnimation />);
    expect(screen.getByRole("dialog", { name: /opening animation/i })).toBeInTheDocument();
    unmount();

    render(<OpeningAnimation />);
    expect(screen.getByRole("dialog", { name: /opening animation/i })).toBeInTheDocument();
  });
});
