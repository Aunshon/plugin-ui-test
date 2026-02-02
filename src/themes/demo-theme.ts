import type { ThemeTokens } from "@wedevs/plugin-ui";

export const demoTheme: ThemeTokens ={};
/**
 * Pink theme – all ThemeTokens declared (light).
 * Uses oklch for consistent, accessible colors; hue ~350 for pink/rose.
 */
export const demoTheme1: ThemeTokens = {
  /* Core */
  background: "oklch(0.9920 0.0080 350)",
  foreground: "oklch(0.2200 0.0300 350)",

  /* Card */
  card: "oklch(1.0000 0 0)",
  cardForeground: "oklch(0.2200 0.0300 350)",

  /* Popover */
  popover: "oklch(1.0000 0 0)",
  popoverForeground: "oklch(0.2200 0.0300 350)",

  /* Primary – pink brand */
  primary: "oklch(0.6200 0.2100 350)",
  primaryForeground: "oklch(1.0000 0 0)",

  /* Secondary */
  secondary: "oklch(0.9600 0.0300 350)",
  secondaryForeground: "oklch(0.3500 0.0800 350)",

  /* Muted */
  muted: "oklch(0.9650 0.0150 350)",
  mutedForeground: "oklch(0.5000 0.0400 350)",

  /* Accent */
  accent: "oklch(0.9600 0.0500 350)",
  accentForeground: "oklch(0.3800 0.1000 350)",

  /* Status */
  destructive: "oklch(0.5500 0.2200 25)",
  destructiveForeground: "oklch(1.0000 0 0)",
  success: "oklch(0.5500 0.1800 145)",
  successForeground: "oklch(1.0000 0 0)",
  warning: "oklch(0.7500 0.1500 70)",
  warningForeground: "oklch(0.2200 0.0300 70)",
  info: "oklch(0.6000 0.1800 255)",
  infoForeground: "oklch(1.0000 0 0)",

  /* Border, input, ring */
  border: "oklch(0.9000 0.0250 350)",
  input: "oklch(0.9000 0.0250 350)",
  ring: "oklch(0.6200 0.2100 350)",

  /* Charts */
  chart1: "oklch(0.6200 0.2100 350)",
  chart2: "oklch(0.7000 0.1500 320)",
  chart3: "oklch(0.7500 0.1200 10)",
  chart4: "oklch(0.6500 0.1800 280)",
  chart5: "oklch(0.5500 0.2000 360)",

  /* Sidebar */
  sidebar: "oklch(0.9800 0.0120 350)",
  sidebarForeground: "oklch(0.2200 0.0300 350)",
  sidebarPrimary: "oklch(0.6200 0.2100 350)",
  sidebarPrimaryForeground: "oklch(1.0000 0 0)",
  sidebarAccent: "oklch(0.9600 0.0400 350)",
  sidebarAccentForeground: "oklch(0.3800 0.1000 350)",
  sidebarBorder: "oklch(0.9200 0.0200 350)",
  sidebarRing: "oklch(0.6200 0.2100 350)",

  /* Typography */
  fontSans: "Inter, ui-sans-serif, system-ui, sans-serif",
  fontSerif: "ui-serif, Georgia, serif",
  fontMono: "ui-monospace, monospace",

  /* Radius */
  radius: "0.5rem",
};

export const demoDarkTheme = {};
/**
 * Pink theme – all ThemeTokens declared (dark).
 */
export const demoDarkTheme1: ThemeTokens = {
  /* Core */
  background: "oklch(0.1800 0.0350 350)",
  foreground: "oklch(0.9500 0.0150 350)",

  /* Card */
  card: "oklch(0.2200 0.0400 350)",
  cardForeground: "oklch(0.9500 0.0150 350)",

  /* Popover */
  popover: "oklch(0.2200 0.0400 350)",
  popoverForeground: "oklch(0.9500 0.0150 350)",

  /* Primary */
  primary: "oklch(0.7500 0.1800 350)",
  primaryForeground: "oklch(0.1800 0.0350 350)",

  /* Secondary */
  secondary: "oklch(0.2800 0.0500 350)",
  secondaryForeground: "oklch(0.9200 0.0200 350)",

  /* Muted */
  muted: "oklch(0.2600 0.0400 350)",
  mutedForeground: "oklch(0.7000 0.0300 350)",

  /* Accent */
  accent: "oklch(0.3800 0.1000 350)",
  accentForeground: "oklch(0.9500 0.0200 350)",

  /* Status */
  destructive: "oklch(0.6000 0.2200 25)",
  destructiveForeground: "oklch(1.0000 0 0)",
  success: "oklch(0.6000 0.1800 145)",
  successForeground: "oklch(0.1800 0.0350 350)",
  warning: "oklch(0.7800 0.1500 70)",
  warningForeground: "oklch(0.1800 0.0350 70)",
  info: "oklch(0.6500 0.1800 255)",
  infoForeground: "oklch(0.1800 0.0350 255)",

  /* Border, input, ring */
  border: "oklch(0.3800 0.0500 350)",
  input: "oklch(0.3200 0.0450 350)",
  ring: "oklch(0.7500 0.1800 350)",

  /* Charts */
  chart1: "oklch(0.7500 0.1800 350)",
  chart2: "oklch(0.7000 0.1500 320)",
  chart3: "oklch(0.7500 0.1200 10)",
  chart4: "oklch(0.6500 0.1800 280)",
  chart5: "oklch(0.6000 0.2000 360)",

  /* Sidebar */
  sidebar: "oklch(0.1600 0.0300 350)",
  sidebarForeground: "oklch(0.9500 0.0150 350)",
  sidebarPrimary: "oklch(0.7500 0.1800 350)",
  sidebarPrimaryForeground: "oklch(0.1800 0.0350 350)",
  sidebarAccent: "oklch(0.3200 0.0800 350)",
  sidebarAccentForeground: "oklch(0.9200 0.0200 350)",
  sidebarBorder: "oklch(0.3500 0.0500 350)",
  sidebarRing: "oklch(0.7500 0.1800 350)",

  /* Typography */
  fontSans: "Inter, ui-sans-serif, system-ui, sans-serif",
  fontSerif: "ui-serif, Georgia, serif",
  fontMono: "ui-monospace, monospace",

  /* Radius */
  radius: "0.5rem",
};
