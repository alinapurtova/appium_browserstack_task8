import { baseConfig } from './wdio.shared.conf.js';

export const config = {
    ...baseConfig,
    hostname: 'hub.browserstack.com',
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    services: [
        [
            'browserstack',
            {
                browserstackLocal: false,
                testObservability: true,
                testObservabilityOptions: {
                    projectName: "Appium BrowserStack Task8",
                    buildName: "Appium BrowserStack Task8 Build",
                },
            },
        ]
    ],
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Google Pixel 9',
        'appium:platformVersion': '16.0',
        'appium:app': process.env.BROWSERSTACK_APP_ID,
        'bstack:options': {
            projectName: 'Appium BrowserStack Task8',
            buildName: 'Appium BrowserStack Task8 Build',
            sessionName: 'Run WDIO tests',
            networkLogs: false,
        },
    }],
};