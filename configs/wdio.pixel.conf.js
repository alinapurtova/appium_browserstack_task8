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