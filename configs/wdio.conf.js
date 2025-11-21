import { baseConfig } from './wdio.shared.conf.js';

export const config = {
    ...baseConfig,
    services: ['appium'],
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    capabilities: [
        {
            'appium:platformName': 'Android',
            'appium:deviceName': 'emulator-5554',
            'appium:automationName': 'UiAutomator2',
            'appium:app': './Android-NativeDemoApp.apk',
            'appium:appWaitActivity': '*',
            'appium:newCommandTimeout': 240,
            'appium:fullReset': true,
            'appium:noReset': false
        }
    ]
};