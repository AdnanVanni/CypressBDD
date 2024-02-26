import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries:0,
  testDir: './tests/DonateTest',
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    screenshot: 'off'
  },
  projects:[
    {
    name:'webkit',
    use: {browserName: 'webkit'}
    },
    {
      name:'chrome',
      use: {browserName: 'chromium'}
      }
  ]
};
export default config;