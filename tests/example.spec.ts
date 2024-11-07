import { test, expect } from '@playwright/test';
import playwrightConfig from '../playwright.config';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('MyCustomArg: ', playwrightConfig.myCustomArg);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
