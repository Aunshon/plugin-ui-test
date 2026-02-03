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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  ToggleGroup,
  ToggleGroupItem, MatricsCard
} from "@wedevs/plugin-ui";
import React, { useState } from "react";
import { wemailDarkTheme, wemailTheme } from "./themes/wemail";

/* ============================================
   Theme Definitions
   ============================================ */

// Dokan Theme (Purple)
const dokanTheme: ThemeTokens = {
  primary: "oklch(0.5410 0.2120 265.7540)",
  primaryForeground: "oklch(1.0000 0 0)",
  ring: "oklch(0.5410 0.2120 265.7540)",
};

const dokanDarkTheme: ThemeTokens = {
  primary: "#000",
  primaryForeground: "#fff",
  background: "#eee",
  foreground: "#fff",
  card: "oklch(0.1800 0.0140 285.7500)",
  cardForeground: "oklch(0.9850 0.0030 264.5000)",
  border: "oklch(0.3690 0.0150 264.5313)",
  muted: "oklch(0.2690 0.0150 264.5419)",
  mutedForeground: "oklch(0.7110 0.0200 264.3637)",
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

      {/* Badges Card */}
      <Card>
        <CardHeader>
          <CardTitle>Tooltip</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div>
              <Tooltip>
                <TooltipTrigger>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="lucide lucide-info-icon lucide-info">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </TooltipTrigger>
                <TooltipContent>
                  <div>
                    Help Text
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div>
              <Tooltip>
                <TooltipTrigger>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="lucide lucide-info-icon lucide-info">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="max-w-46 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div>
              <Tooltip>
                <TooltipTrigger>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="lucide lucide-info-icon lucide-info">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <div>
                    Left Help Text
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <div>
              <Tooltip>
                <TooltipTrigger>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="lucide lucide-info-icon lucide-info">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <div>
                    Right Help Text
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Toggle group */}
      <Card>
        <CardHeader>
          <CardTitle>Toggle group</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div>
              <ToggleGroup orientation="horizontal" variant="outline" Value={["all"]} >
                <ToggleGroupItem value="all" aria-label="Toggle all">
                  All
                </ToggleGroupItem>
                <ToggleGroupItem value="missed" aria-label="Toggle missed">
                  Missed
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics and Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Metrics and Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div>
              <MatricsCard
                tooltip="Total sales in last 30 days"
                title="Total Sales"
                value="$12,345"
                trendType="positive"
              />
            </div>
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
