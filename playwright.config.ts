import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

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
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'dot',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  ...customConfig,
});
