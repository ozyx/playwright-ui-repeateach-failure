/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    repeatEach: 5,
    testDir: 'e2e',
    timeout: 30 * 1000,
    webServer: {
        command: 'npm run start',
        url: 'http://localhost:8080/#',
        timeout: 120 * 1000,
        reuseExistingServer: true
    },
    workers: 1,
    use: {
        browserName: "chromium",
        baseURL: 'http://localhost:8080/',
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'off'
    },
    projects: [
        {
            name: 'chrome',
            use: {
                browserName: 'chromium'
            }
          }
    ],
    reporter: [
        ['list'],
        ['html', {
            open: 'on-failure',
            outputFolder: 'html-test-results'
        }]
    ]
};

module.exports = config;
