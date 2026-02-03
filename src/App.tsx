import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CurrencyInput,
  Input,
  InputGroup,
  Label,
  Switch,
  ThemeProvider,
  useTheme,
  type ThemeTokens,
} from "@wedevs/plugin-ui";
import React, { useState } from "react";
import { wemailDarkTheme, wemailTheme } from "./themes/wemail";
import { ButtonShowcase } from "./ButtonShowcase";

/* ============================================
   Theme Definitions
   ============================================ */

// Dokan Theme (Purple)
const dokanTheme: ThemeTokens = {
  primary: "oklch(0.5410 0.2120 265.7540)",
  primaryForeground: "oklch(1.0000 0 0)",
  secondary: "oklch(0.9690 0.0030 264.5313)",
  secondaryForeground: "oklch(0.1391 0.0090 285.8820)",
  muted: "oklch(0.9690 0.0030 264.5313)",
  mutedForeground: "oklch(0.5890 0.0110 258.3381)",
  border: "oklch(0.9079 0.0079 264.3637)",
  foreground: "oklch(0.1391 0.0090 285.8820)",
  ring: "oklch(0.5410 0.2120 265.7540)",
};

const dokanDarkTheme: ThemeTokens = {
  primary: "oklch(0.5410 0.2120 265.7540)",
  primaryForeground: "oklch(1.0000 0 0)",
  secondary: "oklch(0.2690 0.0150 264.5419)",
  secondaryForeground: "oklch(0.9850 0.0030 264.5000)",
  background: "oklch(0.1391 0.0090 285.8820)",
  foreground: "oklch(0.9850 0.0030 264.5000)",
  card: "oklch(0.1800 0.0140 285.7500)",
  cardForeground: "oklch(0.9850 0.0030 264.5000)",
  border: "oklch(0.3690 0.0150 264.5313)",
  muted: "oklch(0.2690 0.0150 264.5419)",
  mutedForeground: "oklch(0.7110 0.0200 264.3637)",
  ring: "oklch(0.5410 0.2120 265.7540)",
};

/* ============================================
   Theme Switcher
   ============================================ */

function ThemeSwitcher() {
  const { mode, setMode } = useTheme();
  return (
    <Switch
      label="Dark Mode"
      checked={mode === "dark"}
      onCheckedChange={(checked) => setMode(checked ? "dark" : "light")}
    />
  );
}

/* ============================================
   Plugin Demo Component
   ============================================ */

function PluginDemo({ title, color }: { title: string; color: string }) {
  const [count, setCount] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");

  return (
    <div className="min-h-screen bg-background p-6 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        <ThemeSwitcher />
      </div>

      {/* Buttons Card */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => setCount(count + 1)}>
              Clicked: {count}
            </Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="destructive">Delete</Button>
            <Button variant="success">Save</Button>
            <Button variant="warning">Warning</Button>
          </div>
        </CardContent>
      </Card>

      {/* Form Card */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`${color}-name`}>Name</Label>
            <Input id={`${color}-name`} placeholder="Enter name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${color}-email`}>Email</Label>
            <Input
              id={`${color}-email`}
              type="email"
              placeholder="Enter email"
            />
          </div>
        </CardContent>
      </Card>

      {/* InputGroup & CurrencyInput Card */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Input with addons</CardTitle>
          <p className="text-sm text-muted-foreground">
            InputGroup (left/right addons) and CurrencyInput
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">InputGroup</h4>
            <p className="text-sm text-muted-foreground">
              Generic input with optional left and right addons (ShadCN Input
              inside).
            </p>
            <div className="flex flex-wrap gap-6 items-end">
              <div className="space-y-2 min-w-[200px]">
                <Label className="text-xs uppercase text-muted-foreground">
                  Left addon (prefix)
                </Label>
                <InputGroup
                  leftAddon={
                    <span className="px-3 text-muted-foreground">$</span>
                  }
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2 min-w-[200px]">
                <Label className="text-xs uppercase text-muted-foreground">
                  Right addon (suffix)
                </Label>
                <InputGroup
                  rightAddon={
                    <span className="px-3 text-muted-foreground">.00</span>
                  }
                  placeholder="Amount"
                />
              </div>
              <div className="space-y-2 min-w-[240px]">
                <Label className="text-xs uppercase text-muted-foreground">
                  Both addons
                </Label>
                <InputGroup
                  leftAddon={
                    <span className="px-3 text-muted-foreground">
                      https://
                    </span>
                  }
                  rightAddon={
                    <span className="px-3 text-muted-foreground">.com</span>
                  }
                  placeholder="domain"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">
              CurrencyInput
            </h4>
            <p className="text-sm text-muted-foreground">
              Input with currency dropdown (built with InputGroup + rightAddon).
            </p>
            <div className="max-w-[280px] space-y-2">
              <Label className="text-xs uppercase text-muted-foreground">
                Amount + currency
              </Label>
              <CurrencyInput
                placeholder="0.00"
                currency={currency}
                onCurrencyChange={setCurrency}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badges Card */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Error</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ============================================
   Plugin A: Dokan (Purple Theme)
   ============================================ */

export function DokanPluginDemo() {
  return (
    <ThemeProvider
      pluginId="dokan"
      tokens={dokanTheme}
      darkTokens={dokanDarkTheme}
    >
      <PluginDemo title="🟣 Dokan Plugin" color="purple" />
    </ThemeProvider>
  );
}

/* ============================================
   Plugin B: WeMail (Blue Theme)
   ============================================ */

export function WeMailPluginDemo() {
  return (
    <ThemeProvider
      pluginId="wemail"
      tokens={wemailTheme}
      darkTokens={wemailDarkTheme}
    >
      <PluginDemo title="🔵 WeMail Plugin" color="blue" />
    </ThemeProvider>
  );
}

/* ============================================
   Button Showcase Demo (Full Width)
   ============================================ */

export function ButtonShowcaseDemo() {
  return (
    <ThemeProvider
      pluginId="button-showcase"
      tokens={dokanTheme}
      darkTokens={dokanDarkTheme}
    >
      <ButtonShowcase />
    </ThemeProvider>
  );
}

/* ============================================
   Default Export
   ============================================ */

export default function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <DokanPluginDemo />
      <WeMailPluginDemo />
    </div>
  );
}
