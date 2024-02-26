import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries:0,
  testDir: './tests/visual',
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'off',
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

