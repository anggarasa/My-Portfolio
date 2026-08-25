"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { usePortfolioStore } from "../hooks/usePortfolioStore";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/shared/components/ui/Dialog";
import { Button } from "@/shared/components/ui/Button";
import { Input } from "@/shared/components/ui/Input";
import { Label } from "@/shared/components/ui/Label";
import { CheckCircle2, Send, Sparkles } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactModal() {
  const { isContactModalOpen, setContactModalOpen } = usePortfolioStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: "Fullstack Web App",
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API network submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const handleClose = () => {
    setContactModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <Dialog open={isContactModalOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl bg-card border border-border text-foreground p-6 sm:p-8 shadow-2xl">
        <DialogHeader className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Let&apos;s build something bold together.
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Have a project in mind or looking for technical leadership? Send a message and I&apos;ll get back within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-12 h-12 rounded-full bg-secondary text-primary mx-auto flex items-center justify-center border border-border">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-foreground">Message Sent Successfully!</h4>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Thank you for reaching out. I&apos;ll review your project details and reply promptly.
            </p>
            <Button
              onClick={handleClose}
              className="rounded-full px-6 bg-primary text-primary-foreground text-xs font-mono"
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-xs font-mono text-foreground">
                Your Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register("name")}
                className="bg-background border-border text-foreground text-sm"
              />
              {errors.name && (
                <p className="text-xs text-destructive font-mono">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-mono text-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className="bg-background border-border text-foreground text-sm"
              />
              {errors.email && (
                <p className="text-xs text-destructive font-mono">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="projectType" className="text-xs font-mono text-foreground">
                Project Scope / Subject
              </Label>
              <select
                id="projectType"
                {...register("projectType")}
                className="w-full h-9 rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              >
                <option value="Fullstack Web App">Fullstack Web App</option>
                <option value="Next.js Frontend Architecture">Next.js Frontend Architecture</option>
                <option value="Design System & UI Kit">Design System & UI Kit</option>
                <option value="Consulting & Audit">Technical Consulting & Audit</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-xs font-mono text-foreground">
                Project Details
              </Label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your goals, timelines, and technical requirements..."
                {...register("message")}
                className="w-full rounded-md border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
              />
              {errors.message && (
                <p className="text-xs text-destructive font-mono">{errors.message.message}</p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={handleClose}
                className="text-xs font-mono text-muted-foreground hover:text-foreground"
              >
                Cancel
              </button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs font-mono inline-flex items-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
