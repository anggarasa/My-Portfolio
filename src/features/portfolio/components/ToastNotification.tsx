"use client";

import React from "react";
import { usePortfolioStore } from "../hooks/usePortfolioStore";
import { Check } from "lucide-react";

export function ToastNotification() {
  const { toastMessage } = usePortfolioStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-card border border-border text-foreground text-xs font-mono shadow-2xl glow-card">
        <span className="w-5 h-5 rounded-full bg-secondary text-primary flex items-center justify-center border border-border">
          <Check className="w-3 h-3" />
        </span>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
