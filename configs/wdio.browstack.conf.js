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
                app: process.env.BROWSERSTACK_APP_ID,
                browserstackLocal: true,
                accessibility: false,
                testObservabilityOptions: {
                    buildName: "appium browserstack task8",
                    projectName: "Appium BrowserStack Task8"
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