import { Button, Switch, useTheme } from "@wedevs/plugin-ui";
import { Check, ChevronDown, Menu, Plus, Trash2 } from "lucide-react";
import React from "react";

/* ============================================
   Theme Switcher Component
   ============================================ */

function ThemeSwitcher() {
  const { mode, setMode } = useTheme();
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Light</span>
      <Switch
        checked={mode === "dark"}
        onCheckedChange={(checked) => setMode(checked ? "dark" : "light")}
      />
      <span className="text-sm text-muted-foreground">Dark</span>
    </div>
  );
}

/* ============================================
   Button Size Section Component
   ============================================ */

interface ButtonSizeSectionProps {
  title: string;
  size: "lg" | "default" | "sm" | "xs";
  iconSize: "icon-lg" | "icon" | "icon-sm" | "icon-xs";
}

function ButtonSizeSection({ title, size, iconSize }: ButtonSizeSectionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-foreground">
        {title}
      </h3>

      {/* Default Variant */}
      <div className="space-y-3">
        <div className="grid grid-cols-6 gap-3 items-start">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Default</p>
            <Button variant="default" size={size}>
              Primary
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Icon left</p>
            <Button variant="default" size={size}>
              <Plus />
              Create Store
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Icon Right</p>
            <Button variant="default" size={size}>
              Create Store
              <ChevronDown />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Two Icons</p>
            <Button variant="default" size={size}>
              <Menu />
              Button
              <ChevronDown />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Only Icon</p>
            <Button variant="default" size={iconSize}>
              <Menu />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Disabled</p>
            <Button variant="default" size={size} disabled>
              Primary
            </Button>
          </div>
        </div>
      </div>

      {/* Secondary Variant */}
      <div className="space-y-3">
        <div className="grid grid-cols-6 gap-3 items-start">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Secondary</p>
            <Button variant="secondary" size={size}>
              Secondary
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Icon left</p>
            <Button variant="secondary" size={size}>
              <Plus />
              Create Store
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">
              Icon Right
            </p>
            <Button variant="secondary" size={size}>
              Create Store
              <ChevronDown />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Two Icons</p>
            <Button variant="secondary" size={size}>
              <Menu />
              Button
              <ChevronDown />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Only Icon</p>
            <Button variant="secondary" size={iconSize}>
              <Menu />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Disabled</p>
            <Button variant="secondary" size={size} disabled>
              Secondary
            </Button>
          </div>
        </div>
      </div>

      {/* Outline Variant */}
      <div className="space-y-3">
        <div className="grid grid-cols-6 gap-3 items-start">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Outline</p>
            <Button variant="outline" size={size}>
              Outline
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Icon left</p>
            <Button variant="outline" size={size}>
              <Plus />
              Create Store
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">
              Icon Right
            </p>
            <Button variant="outline" size={size}>
              Create Store
              <ChevronDown />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Two Icons</p>
            <Button variant="outline" size={size}>
              <Menu />
              Button
              <ChevronDown />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Only Icon</p>
            <Button variant="outline" size={iconSize}>
              <Menu />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Disabled</p>
            <Button variant="outline" size={size} disabled>
              Outline
            </Button>
          </div>
        </div>
      </div>

      {/* Ghost Variant */}
      <div className="space-y-3">
        <div className="grid grid-cols-6 gap-3 items-start">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Ghost</p>
            <Button variant="ghost" size={size}>
              Ghost
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Icon left</p>
            <Button variant="ghost" size={size}>
              <Plus />
              Create Store
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">
              Icon Right
            </p>
            <Button variant="ghost" size={size}>
              Create Store
              <ChevronDown />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Two Icons</p>
            <Button variant="ghost" size={size}>
              <Menu />
              Button
              <ChevronDown />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Only Icon</p>
            <Button variant="ghost" size={iconSize}>
              <Menu />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Disabled</p>
            <Button variant="ghost" size={size} disabled>
              Ghost
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Button Guideline Section
   ============================================ */

function ButtonGuidelineSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">
        Button States
      </h3>

      <div className="space-y-8">
        {/* States Header */}
        <div className="grid grid-cols-4 gap-6">
          <div className="text-xs text-muted-foreground">Normal</div>
          <div className="text-xs text-muted-foreground">Hover</div>
          <div className="text-xs text-muted-foreground">Focus</div>
          <div className="text-xs text-muted-foreground">Disabled</div>
        </div>

        {/* Default States */}
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-6 items-center">
            <Button variant="default" size="default">
              Button
            </Button>
            <div className="group">
              <Button variant="default" size="default" className="group-hover:bg-primary/80">
                Button
              </Button>
            </div>
            <Button variant="default" size="default" className="ring-2 ring-ring ring-offset-2">
              Button
            </Button>
            <Button variant="default" size="default" disabled>
              Button
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Default</p>
        </div>

        {/* Secondary States */}
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-6 items-center">
            <Button variant="secondary" size="default">
              Button
            </Button>
            <div className="group">
              <Button variant="secondary" size="default" className="group-hover:bg-secondary/80">
                Button
              </Button>
            </div>
            <Button variant="secondary" size="default" className="ring-2 ring-ring ring-offset-2">
              Button
            </Button>
            <Button variant="secondary" size="default" disabled>
              Button
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Secondary</p>
        </div>

        {/* Outline States */}
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-6 items-center">
            <Button variant="outline" size="default">
              Button
            </Button>
            <div className="group">
              <Button variant="outline" size="default" className="group-hover:bg-muted">
                Button
              </Button>
            </div>
            <Button variant="outline" size="default" className="ring-2 ring-ring ring-offset-2">
              Button
            </Button>
            <Button variant="outline" size="default" disabled>
              Button
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Outline</p>
        </div>

        {/* Ghost States */}
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-6 items-center">
            <Button variant="ghost" size="default">
              Button
            </Button>
            <div className="group">
              <Button variant="ghost" size="default" className="group-hover:bg-muted">
                Button
              </Button>
            </div>
            <Button variant="ghost" size="default" className="ring-2 ring-ring ring-offset-2">
              Button
            </Button>
            <Button variant="ghost" size="default" disabled>
              Button
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Ghost</p>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Affirmative/Negative Buttons Section
   ============================================ */

function AffirmativeNegativeSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Affirmative & Negative</h3>

      <div className="flex gap-12">
        {/* Affirmative */}
        <div className="space-y-4 min-w-[200px]">
          <h4 className="text-sm font-semibold text-muted-foreground">Affirmative</h4>
          <div className="space-y-3 p-6">
            <Button variant="success" size="default" className="w-full">
              Apply Now
            </Button>
            <Button variant="outline-success" size="default" className="w-full">
              Apply Now
            </Button>
            <Button variant="success" size="default" className="w-full" disabled>
              Applied
            </Button>
          </div>
        </div>

        {/* Negative */}
        <div className="space-y-4 min-w-[200px]">
          <h4 className="text-sm font-semibold text-muted-foreground">Negative</h4>
          <div className="space-y-3 p-6">
            <Button variant="destructive" size="default" className="w-full">
              Delete
            </Button>
            <Button variant="outline-destructive" size="default" className="w-full">
              Delete
            </Button>
            <Button variant="destructive" size="default" className="w-full" disabled>
              Deleted
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Link Button Section
   ============================================ */

function LinkSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Link Button</h3>

      <div className="flex gap-6">
        <Button variant="link" size="default">
          Learn More
        </Button>
        <Button variant="link" size="default">
          <Check />
          View Details
        </Button>
        <Button variant="link" size="default" disabled>
          Disabled Link
        </Button>
      </div>
    </div>
  );
}

/* ============================================
   Size Comparison Section
   ============================================ */

function SizeComparisonSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Size Comparison</h3>

      <div className="flex items-end gap-4">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Extra Small</p>
          <Button variant="default" size="xs">
            Button
          </Button>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Small</p>
          <Button variant="default" size="sm">
            Button
          </Button>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Default</p>
          <Button variant="default" size="default">
            Button
          </Button>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Large</p>
          <Button variant="default" size="lg">
            Button
          </Button>
        </div>
      </div>

      <div className="flex items-end gap-4 mt-8">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Icon XS</p>
          <Button variant="default" size="icon-xs">
            <Menu />
          </Button>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Icon SM</p>
          <Button variant="default" size="icon-sm">
            <Menu />
          </Button>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Icon Default</p>
          <Button variant="default" size="icon">
            <Menu />
          </Button>
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Icon LG</p>
          <Button variant="default" size="icon-lg">
            <Menu />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Full Width Example Section
   ============================================ */

function FullWidthSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">
        Full Width Example
      </h3>

      <div className="max-w-xs space-y-3">
        <Button variant="default" size="lg" className="w-full">
          Continue
        </Button>
        <Button variant="outline" size="lg" className="w-full">
          Cancel
        </Button>
        <p className="text-xs text-muted-foreground">
          Full width buttons for mobile or form layouts
        </p>
      </div>
    </div>
  );
}

/* ============================================
   Main ButtonShowcase Component
   ============================================ */

export function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Button Component</h1>
            <p className="text-muted-foreground">
              Comprehensive button component showcase following ShadCN design patterns with all variants, sizes,
              and states.
            </p>
          </div>
          <ThemeSwitcher />
        </div>

        {/* Size Sections */}
        <ButtonSizeSection title="Large Size" size="lg" iconSize="icon-lg" />
        <div className="border-t border-border" />

        <ButtonSizeSection title="Default Size" size="default" iconSize="icon" />
        <div className="border-t border-border" />

        <ButtonSizeSection title="Small Size" size="sm" iconSize="icon-sm" />
        <div className="border-t border-border" />

        <ButtonSizeSection title="Extra Small Size" size="xs" iconSize="icon-xs" />
        <div className="border-t border-border" />

        {/* Button States */}
        <ButtonGuidelineSection />
        <div className="border-t border-border" />

        {/* Affirmative & Negative */}
        <AffirmativeNegativeSection />
        <div className="border-t border-border" />

        {/* Link */}
        <LinkSection />
        <div className="border-t border-border" />

        {/* Size Comparison */}
        <SizeComparisonSection />
        <div className="border-t border-border" />

        {/* Full Width */}
        <FullWidthSection />
      </div>
    </div>
  );
}

export default ButtonShowcase;
