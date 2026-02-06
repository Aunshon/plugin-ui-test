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
  ToggleGroupItem,
  MatricsCard,
  MatricsGroup,
  MatricsGroupItem, MatricsPill, FileUpload,
  FileView,
} from "@wedevs/plugin-ui";
import React, { useState } from "react";
import { wemailDarkTheme, wemailTheme } from "./themes/wemail";
import { Handbag, CirclePlay, BadgeCheck } from "lucide-react";

/* ============================================
   Theme Definitions
   ============================================ */

// Dokan Theme (Purple)
const dokanTheme: ThemeTokens = {
  background: "oklch(1.0000 0 0)",
  foreground: "oklch(0.2686 0 0)",
  card: "oklch(1.0000 0 0)",
  cardForeground: "oklch(0.2686 0 0)",
  popover: "oklch(1.0000 0 0)",
  popoverForeground: "oklch(0.2686 0 0)",
  primary: "oklch(0.7686 0.1647 70.0804)",
  primaryForeground: "oklch(0 0 0)",
  secondary: "oklch(0.9670 0.0029 264.5419)",
  secondaryForeground: "oklch(0.4461 0.0263 256.8018)",
  muted: "oklch(0.9846 0.0017 247.8389)",
  mutedForeground: "oklch(0.5510 0.0234 264.3637)",
  accent: "oklch(0.9869 0.0214 95.2774)",
  accentForeground: "oklch(0.4732 0.1247 46.2007)",
  destructive: "oklch(0.6368 0.2078 25.3313)",
  destructiveForeground: "oklch(1.0000 0 0)",
  border: "oklch(0.9276 0.0058 264.5313)",
  input: "oklch(0.9276 0.0058 264.5313)",
  ring: "oklch(0.7686 0.1647 70.0804)",
};

const dokanDarkTheme: ThemeTokens = {
  background: "oklch(0.2046 0 0)",
  foreground: "oklch(0.9219 0 0)",
  card: "oklch(0.2686 0 0)",
  cardForeground: "oklch(0.9219 0 0)",
  popover: "oklch(0.2686 0 0)",
  popoverForeground: "oklch(0.9219 0 0)",
  primary: "oklch(0.7686 0.1647 70.0804)",
  primaryForeground: "oklch(0 0 0)",
  secondary: "oklch(0.2686 0 0)",
  secondaryForeground: "oklch(0.9219 0 0)",
  muted: "oklch(0.2393 0 0)",
  mutedForeground: "oklch(0.7155 0 0)",
  accent: "oklch(0.4732 0.1247 46.2007)",
  accentForeground: "oklch(0.9243 0.1151 95.7459)",
  destructive: "oklch(0.6368 0.2078 25.3313)",
  destructiveForeground: "oklch(1.0000 0 0)",
  border: "oklch(0.3715 0 0)",
  input: "oklch(0.3715 0 0)",
  ring: "oklch(0.7686 0.1647 70.0804)",
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

      <div className="flex flex-col gap-6">
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
              <Badge variant="secondary">
                <BadgeCheck data-icon="inline-start" />
                Verified Secondary
              </Badge>
              <Badge variant="outline" className="bg-[#DCFCE7] text-[#166534]">Success with outline</Badge>
              <Badge variant="ghost">Ghost</Badge>
              <Badge variant="destructive">Error</Badge>
              <Badge variant="link">Link</Badge>
              <Badge className="bg-[#FEFCE8] text-[#8A610F]">Warning</Badge>
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
                  tooltip="Total sales in last 30 days asdf"
                  value="$12,345"
                  count="+10%"
                  countDirection="up"
                  shortDescription="from last month dd"
                  Icon={ Handbag }
                  ToolTipIcon={ CirclePlay }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metrics and Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Metrics group</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div>
                <MatricsGroup>
                  <MatricsGroupItem
                    tooltip="Total sales in last 30 days asdf"
                    value="$12,345"
                    change="+10%"
                    changeDirection="up"
                    label="from last month dd"
                    Icon={ Handbag }
                    ToolTipIcon={ CirclePlay }
                  />
                  <MatricsGroupItem
                    tooltip="Total sales in last 30 days asdf"
                    value="$12,345"
                    change="+10%"
                    changeDirection="up"
                    label="from last month dd"
                    Icon={ Handbag }
                    ToolTipIcon={ CirclePlay }
                  />
                  <MatricsGroupItem
                    tooltip="Total sales in last 30 days asdf"
                    value="$12,345"
                    change="+10%"
                    changeDirection="down"
                    label="from last month dd"
                    Icon={ Handbag }
                    ToolTipIcon={ CirclePlay }
                  />
                </MatricsGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metrics and Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Metrics pill</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div>
                <MatricsPill
                  Icon={Handbag}
                  text={'Vendor Approval'}
                  count={10}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* File Upload */}
        <Card>
          <CardHeader>
            <CardTitle>File upload</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <FileUpload btnText='Upload file' description={'Accept file: jpg, png, img. Up to 25 Mb'} onUpload={(file) => {console.log(file)}}/>
              <FileUpload variant="button-text" btnText={'Upload'} text='Click to upload' description={'Accept file: jpg, png, img. Up to 25 Mb'} onUpload={(file) => {console.log(file)}}/>
            </div>
          </CardContent>
        </Card>

        {/* File View */}
        <Card>
          <CardHeader>
            <CardTitle>File view</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <FileView
                fileName={'file_name05.png'}
                fileSize={'25.5 MB'}
                fileType="file"
                close={()=>{}}
              />
              <FileView
                fileName={'file_name05.png'}
                fileSize={'5 MB'}
                fileType="image"
                imageUrl="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
                close={()=>{}}
              />
            </div>
          </CardContent>
        </Card>
      </div>
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
