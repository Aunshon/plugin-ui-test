import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Switch,
  useTheme,
} from "@wedevs/plugin-ui";
import React, { useState } from "react";

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

export default function App() {
  const [count, setCount] = useState(0);

  return (
    // <ThemeProvider
    //   pluginId="plugin-ui-demo"
    //   tokens={demoTheme}
    //   darkTokens={demoDarkTheme}
    // >
    <div className="pui-root">
      <div className="min-h-screen bg-background p-6 rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            Plugin UI Demo (standalone repo)
          </h1>
          {/* <ThemeSwitcher /> */}
        </div>

        <p className="text-muted-foreground mb-6">
          This plugin consumes @wedevs/plugin-ui from Git/npm. Each product
          plugin can live in its own repository and depend on plugin-ui
          remotely.
        </p>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle className="text-primary">Buttons jhghkjghjkg</CardTitle>
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

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="demo-name">Name</Label>
              <Input id="demo-name" placeholder="Enter name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-email">Email</Label>
              <Input id="demo-email" type="email" placeholder="Enter email" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">Badges</CardTitle>
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
    </div>
    // </ThemeProvider>
  );
}
