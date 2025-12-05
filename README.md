# @vlad/ui

Theme system, core components, and goober setup for React applications.

## Installation

```bash
npm install @vlad/ui
# or
bun add @vlad/ui
```

**Peer Dependencies:**

- `react` ^18 || ^19
- `react-dom` ^18 || ^19

## Quick Start

### 1. Setup Goober

Initialize goober with theme integration:

```tsx
import { setupGoober } from "@vlad/ui";

setupGoober();
```

### 2. Import Styles

Import the global CSS file in your app entry point:

```tsx
import "@vlad/ui/styles";
```

### 3. Wrap with ThemeProvider

```tsx
import { ThemeProvider } from "@vlad/ui";

function App() {
  return <ThemeProvider>{/* Your app */}</ThemeProvider>;
}
```

### 4. Use Components

```tsx
import { Page, Title, Body, Chip } from "@vlad/ui";

function MyPage() {
  return (
    <Page>
      <Title>Hello World</Title>
      <Body>Welcome to vlad-ui</Body>
      <Chip label="New" />
    </Page>
  );
}
```

## Features

- **Theme System**: Light and dark themes with automatic persistence
- **Styled Components**: Goober integration with TypeScript support
- **Core Components**: Reusable UI components with theme-aware styling
- **TypeScript**: Full type definitions included

## API

### Theme System

#### `ThemeProvider`

Provides theme context to your application.

```tsx
<ThemeProvider>{children}</ThemeProvider>
```

#### `useTheme()`

Hook to access the current theme.

```tsx
import { useTheme } from "@vlad/ui";

function MyComponent() {
  const theme = useTheme();
  return <div style={{ color: theme.palette.text }}>Text</div>;
}
```

#### `useToggleTheme()`

Hook to toggle between light and dark themes.

```tsx
import { useToggleTheme } from "@vlad/ui";

function ThemeToggle() {
  const toggleTheme = useToggleTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
```

#### Theme Constants

```tsx
import { LIGHT_THEME, DARK_THEME, THEMES, DEFAULT_THEME } from "@vlad/ui";
```

### Components

#### Typography

- `Title` - Large heading
- `Heading` - Section heading
- `Subtitle` - Subtitle text
- `Body` - Body text

#### UI Components

- `Chip` - Label/tag component
- `Collapsible` - Expandable content section
- `EdgeBlur` - Edge blur effect
- `EmojiButton` - Button with emoji
- `Link` - Styled link component
- `MobileCallout` - Mobile-specific callout
- `Page` - Page container with padding

### Utilities

#### `getInitialTheme()`

Gets the initial theme from localStorage or browser preference.

```tsx
import { getInitialTheme } from "@vlad/ui";

const theme = getInitialTheme();
```

#### `getImageInvertFilter(theme)`

Returns CSS filter for inverting images based on theme.

```tsx
import { getImageInvertFilter, useTheme } from "@vlad/ui";

function Image() {
  const theme = useTheme();
  const filter = getImageInvertFilter(theme);
  return <img src="..." style={{ filter }} />;
}
```

#### LocalStorage Utilities

```tsx
import { getFromLocalStorage, setToLocalStorage } from "@vlad/ui";

const value = getFromLocalStorage<string>("key");
setToLocalStorage("key", value);
```

## Styling

The package includes global styles with custom fonts (Karrik). Import the styles:

```tsx
import "@vlad/ui/styles";
```

Font files are automatically included and referenced via relative paths.

## TypeScript

Full TypeScript support is included. The package exports all types:

```tsx
import type { Theme, ThemeKey } from "@vlad/ui";
```

## License

MIT
