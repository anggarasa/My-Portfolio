import { create } from "zustand";
import { Project } from "@/shared/types/portfolio";

interface PortfolioStoreState {
  // Active hovered project for floating preview
  hoveredProject: Project | null;
  setHoveredProject: (project: Project | null) => void;

  // Selected project for modal dialog
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;

  // Contact modal state
  isContactModalOpen: boolean;
  setContactModalOpen: (isOpen: boolean) => void;

  // Toast notification for email copy
  toastMessage: string | null;
  setToastMessage: (msg: string | null) => void;
}

export const usePortfolioStore = create<PortfolioStoreState>((set) => ({
  hoveredProject: null,
  setHoveredProject: (project) => set({ hoveredProject: project }),

  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),

  isContactModalOpen: false,
  setContactModalOpen: (isOpen) => set({ isContactModalOpen: isOpen }),

  toastMessage: null,
  setToastMessage: (msg) => {
    set({ toastMessage: msg });
    if (msg) {
      setTimeout(() => {
        set((state) => (state.toastMessage === msg ? { toastMessage: null } : state));
      }, 3000);
    }
  },
}));
