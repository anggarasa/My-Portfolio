export const ROUTES = {
  HOME: "/",
  PROJECTS: "/#projects",
  ABOUT: "/#about",
  SKILLS: "/#skills",
  CONTACT: "/#contact",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
