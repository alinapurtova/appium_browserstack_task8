exports.config = {
    specs: [
        '../test/specs/**/*.js'
    ],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [['allure', { outputDir: 'allure-results' }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
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
}