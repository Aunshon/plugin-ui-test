import { Button } from "@wedevs/plugin-ui";
import React from "react";

/* ============================================
   Simple Icon Components
   ============================================ */

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3.5V12.5M3.5 8H12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4H14M2 8H14M2 12H14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 8L6.5 11L12.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4H13M5 4V3C5 2.44772 5.44772 2 6 2H10C10.5523 2 11 2.44772 11 3V4M6.5 7.5V11.5M9.5 7.5V11.5M4 4H12V13C12 13.5523 11.5523 14 11 14H5C4.44772 14 4 13.5523 4 13V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================
   Button Size Section Component
   ============================================ */

interface ButtonSizeSectionProps {
  title: string;
  size: "l" | "m" | "s";
}

function ButtonSizeSection({ title, size }: ButtonSizeSectionProps) {
  const iconSize =
    size === "l" ? "icon-lg" : size === "m" ? "icon-md" : "icon-sm";

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-muted-foreground">
        {title} /
        <span className="text-muted-foreground font-normal"> Square</span>
      </h3>

      {/* Primary Variant */}
      <div className="space-y-3">
        <div className="grid grid-cols-6 gap-3 items-start">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Default</p>
            <Button variant="primary" size={size}>
              Primary
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Icon left</p>
            <Button variant="primary" size={size} leftIcon={<PlusIcon />}>
              Create Store
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Icon Right</p>
            <Button
              variant="primary"
              size={size}
              rightIcon={<ChevronDownIcon />}
            >
              Create Store
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Two Icons</p>
            <Button
              variant="primary"
              size={size}
              leftIcon={<MenuIcon />}
              rightIcon={<ChevronDownIcon />}
            >
              Button
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Only Icon</p>
            <Button variant="primary" size={iconSize}>
              <MenuIcon />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Disabled</p>
            <Button variant="primary" size={size} disabled>
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
            <Button variant="secondary" size={size} leftIcon={<PlusIcon />}>
              Create Store
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">
              Icon Right
            </p>
            <Button
              variant="secondary"
              size={size}
              rightIcon={<ChevronDownIcon />}
            >
              Create Store
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Two Icons</p>
            <Button
              variant="secondary"
              size={size}
              leftIcon={<MenuIcon />}
              rightIcon={<ChevronDownIcon />}
            >
              Button
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Only Icon</p>
            <Button variant="secondary" size={iconSize}>
              <MenuIcon />
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

      {/* Outlined Variant */}
      <div className="space-y-3">
        <div className="grid grid-cols-6 gap-3 items-start">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Outlined</p>
            <Button variant="outlined" size={size}>
              Outlined
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Icon left</p>
            <Button variant="outlined" size={size} leftIcon={<PlusIcon />}>
              Create Store
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">
              Icon Right
            </p>
            <Button
              variant="outlined"
              size={size}
              rightIcon={<ChevronDownIcon />}
            >
              Create Store
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Two Icons</p>
            <Button
              variant="outlined"
              size={size}
              leftIcon={<MenuIcon />}
              rightIcon={<ChevronDownIcon />}
            >
              Button
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Only Icon</p>
            <Button variant="outlined" size={iconSize}>
              <MenuIcon />
            </Button>
          </div>

          <div className="space-y-2">
            <p className="text-xs text-muted-foreground invisible">Disabled</p>
            <Button variant="outlined" size={size} disabled>
              Outlined
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Progressive Buttons Section
   ============================================ */

function ProgressiveButtonsSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Progressive</h3>

      <div className="grid grid-cols-2 gap-6 max-w-md">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Progress Bar Button</p>
          <Button variant="primary" size="m" progress={45}>
            Loading
          </Button>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Loader Button</p>
          <Button variant="primary" size="m" loading>
            Saving
          </Button>
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
        Button Guideline
      </h3>

      <div className="space-y-8">
        {/* States Header */}
        <div className="grid grid-cols-5 gap-6">
          <div className="text-xs text-muted-foreground">Normal</div>
          <div className="text-xs text-muted-foreground">Hover</div>
          <div className="text-xs text-muted-foreground">Pressed</div>
          <div className="text-xs text-muted-foreground">Focus</div>
          <div /> {/* Empty for alignment */}
        </div>

        {/* Primary States */}
        <div className="space-y-3">
          <div className="grid grid-cols-5 gap-6 items-center">
            <Button variant="primary" size="m">
              Button
            </Button>
            <Button variant="primary" size="m" className="hover:bg-primary/90">
              Button
            </Button>
            <Button variant="primary" size="m" className="active:bg-primary/80">
              Button
            </Button>
            <Button
              variant="primary"
              size="m"
              className="ring-2 ring-ring ring-offset-2"
            >
              Button
            </Button>
            <p className="text-sm text-foreground">Primary</p>
          </div>
        </div>

        {/* Secondary States */}
        <div className="space-y-3">
          <div className="grid grid-cols-5 gap-6 items-center">
            <Button variant="secondary" size="m">
              Button
            </Button>
            <Button
              variant="secondary"
              size="m"
              className="hover:bg-secondary/80"
            >
              Button
            </Button>
            <Button
              variant="secondary"
              size="m"
              className="active:bg-secondary/70"
            >
              Button
            </Button>
            <Button
              variant="secondary"
              size="m"
              className="ring-2 ring-ring ring-offset-2"
            >
              Button
            </Button>
            <p className="text-sm text-foreground">Secondary</p>
          </div>
        </div>

        {/* Outlined States */}
        <div className="space-y-3">
          <div className="grid grid-cols-5 gap-6 items-center">
            <Button variant="outlined" size="m">
              Button
            </Button>
            <Button variant="outlined" size="m" className="hover:bg-primary/10">
              Button
            </Button>
            <Button
              variant="outlined"
              size="m"
              className="active:bg-primary/20"
            >
              Button
            </Button>
            <Button
              variant="outlined"
              size="m"
              className="ring-2 ring-ring ring-offset-2"
            >
              Button
            </Button>
            <p className="text-sm text-foreground">Outlined</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Alternative/Negative Section
   ============================================ */

function AlternativeNegativeSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-12">
        {/* Alternative (Success) */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-foreground">Alternative</h4>
          <div className="space-y-3">
            <Button variant="success" size="m" fullWidth>
              Apply Now
            </Button>
            <Button variant="outline-success" size="m" fullWidth>
              Apply Now
            </Button>
            <Button variant="success" size="m" disabled fullWidth>
              Applied
            </Button>
          </div>
        </div>

        {/* Negative (Destructive) */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-foreground">Negative</h4>
          <div className="space-y-3">
            <Button variant="destructive" size="m" fullWidth>
              Delete
            </Button>
            <Button variant="outline-destructive" size="m" fullWidth>
              Delete
            </Button>
            <Button variant="destructive" size="m" disabled fullWidth>
              Deleted
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================
   Mobile Size Example Section
   ============================================ */

function MobileSizeSection() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">
        Mobile Size Example{" "}
        <span className="text-muted-foreground font-normal">(Touch)</span>
      </h3>

      <div className="max-w-xs space-y-3">
        <Button variant="primary" size="l" fullWidth>
          Mobile Button
        </Button>
        <p className="text-xs text-muted-foreground">
          Buttons for screen width
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
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Buttons</h1>
          <p className="text-muted-foreground">
            Comprehensive button component showcase with all variants, sizes,
            and states.
          </p>
        </div>

        {/* Size Sections */}
        <ButtonSizeSection title="L-Size" size="l" />
        <ButtonSizeSection title="M-Size" size="m" />
        <ButtonSizeSection title="S-Size" size="s" />

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Save Order Button with Dropdown */}
        <div className="space-y-4">
          <Button variant="primary" size="m" rightIcon={<ChevronDownIcon />}>
            Save Order
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Progressive Buttons */}
        <ProgressiveButtonsSection />

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Button Guideline */}
        <ButtonGuidelineSection />

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Alternative/Negative */}
        <AlternativeNegativeSection />

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Mobile Size */}
        <MobileSizeSection />

        {/* Divider */}
        <div className="border-t border-border" />
      </div>
    </div>
  );
}

export default ButtonShowcase;
