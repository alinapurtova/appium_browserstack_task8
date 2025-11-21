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
        'bstack:options': {
            deviceName: 'Google Pixel 9',
            platformVersion: '16.0',
            platformName: 'android',
        }
    },
    {
        'bstack:options': {
            deviceName: 'OnePlus 9',
            platformVersion: '11.0',
            platformName: 'android',
        }
    }],
    commonCapabilities: {
        'bstack:options': {
            debug: true,
            networkLogs: false,
            percy: false,
            percyCaptureMode: 'auto'
        }
    },
    maxInstances: 10
};