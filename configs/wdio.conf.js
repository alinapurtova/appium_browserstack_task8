exports.config = {
    runner: 'local',
    specs: ['../test/specs/**/*.js'],
    maxInstances: 1,
    logLevel: 'info',
    framework: 'mocha',
    reporters: [['allure', { outputDir: 'allure-results' }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    services: ['appium'],
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',

    capabilities: [
        {
            'appium:platformName': 'Android',
            'appium:deviceName': 'emulator-5554',
            'appium:automationName': 'UiAutomator2',
            'appium:app': 'C:\\Users\\Alina\\Desktop\\LQtasks\\Appium_task8\\Android-NativeDemoApp.apk',
            'appium:appWaitActivity': '*',
            'appium:newCommandTimeout': 240,
            'appium:fullReset': true,
            'appium:noReset': false
        }
    ]
};