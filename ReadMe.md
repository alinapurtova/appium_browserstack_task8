# Appium + WebdriverIO Automated Tests (Task 8)

## Summary
This repository contains automated UI tests for an Android mobile application (WDIO Demo App), built with **WebdriverIO + Appium** using the **Page Object Model (POM)** pattern.

The test suite covers essential mobile interactions, including:
- Filling and validating forms  
- Login & Sign Up navigation  
- Modal windows  
- Switch toggling  
- Swiping through carousel cards  
- Scrolling to reveal hidden elements  
- Random test data generation using Faker  

---

## Requirements

### Software
Make sure the following tools are installed:

- **Node.js** ≥ 18  
- **Java JDK** ≥ 11  
- **Android Studio** (with SDK + emulator configured)  
- **Appium**  
- **Appium Inspector** (optional)  
- **Git**

### Device Requirements
You can run tests on:

- An **Android Emulator**  
- A **physical Android device** with *USB debugging enabled*
- A **BrowserStack** 

### npm Dependencies
Installed automatically via `npm install`:

- WebdriverIO
- Appium 
- Appium UiAutomator2 Driver  
- Faker.js  
- Allure Reporter  

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/alinapurtova/appium_browserstack_task8.git
cd appium_browserstack_task8
```
### 2. Install all dependencies
```bash
npm install
```
### 3. Start Android Emulator
```bash
emulator -avd Pixel_6_API_34
```
### 4. Verify that the device is detected
```bash
adb devices
```
Expected: emulator-5554 or your real device ID

###  5. Verify Appium installation
```bash
appium -v
```

### 6. Start Appium server
```bash
appium
```

## Running Tests
### Run tests on emulator
```bash
npm run wdio:emulator
```

### Run tests on Pixel device
```bash
npm run wdio:pixel
```

### Run tests on BrowserStack
```bash
npm run wdio:browserstack
```

### Appium Capabilities (Example)
```bash
{
  "appium:app": "C:\\Users\\Alina\\Desktop\\LQtasks\\Appium_task8\\Android-NativeDemoApp.apk",
  "appium:deviceName": "emulator-5554",
  "appium:automationName": "UiAutomator2",
  "platformName": "android",
  "appium:appPackage": "com.wdiodemoapp",
  "appium:appActivity": "com.wdiodemoapp.SplashActivity"
}
```
## Tests Summary

### Forms screen
| Test ID    | Description                         |
| ---------- | ------------------------------------|
| **TC-001** | Verify the form on the Forms screen |

### Login screen
| Test ID    | Description                                                           |
| ---------- | ----------------------------------------------------------------------|
| **TC-002** | Verify navigation between Login and Sign Up forms works correctly     |
| **TC-003** | Verify Sign Up form with mismatched passwords                         |

### Swipe screen
| Test ID    | Description                                                                     |
| ---------- | ------------------------------------------------------------------------------- |
| **TC-004** | Verify user can swipe through carousel cards on the Swipe screen                |
| **TC-005** | Verify user can scroll to the bottom of the Swipe screen and reveal hidden text |

## Report

### Generate report
```bash
npm run allure:generate
```

### Open report
```bash
npm run allure:open
```

## CI/CD
Tests are executed automatically via GitHub Actions with results reported to the branch gh-pages and uploaded to Pages.