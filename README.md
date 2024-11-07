## Custom properties in PlaywrightTestConfig are not recognized by TypeScript

### Describe the bug

I am trying to extend Playwright's configuration to include custom properties. The code runs without issues, but TypeScript shows an error: `Property 'myCustomArg' does not exist on type 'PlaywrightTestConfig<ExtendedPlaywrightTestConfig, {}>'`.

### To Reproduce

Here's a minimal example:

```typescript
import { defineConfig, PlaywrightTestConfig } from '@playwright/test';

type CustomProperties = {
  enviorement: string;
  myCustomArg: number;
};

interface ExtendedPlaywrightTestConfig extends PlaywrightTestConfig {
  enviorement: string;
  myCustomArg: number;
}

const customConfig: CustomProperties = {
  enviorement: 'production',
  myCustomArg: 42,
};

export default defineConfig<ExtendedPlaywrightTestConfig>({
  ...customConfig,
});
```

### Expected behavior

TypeScript should recognize custom properties in the imported config object.

### Versions

- Playwright version: 1.48.2
- TypeScript version: 5.6.3
