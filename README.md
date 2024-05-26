# 📱 How to Run Abshaar Mobile App

Welcome to the guide on how to run Abshhar's mobile app! Follow these steps to get your app up and running on your local machine.

# 🚀 Step-by-Step Guide

1. Clone the Repository
   First, clone the repository to your local machine using Git:

```sh
git clone https://github.com/abdullah-03/abshaar_app
cd your-react-native-app
```

2. Install Dependencies
   Make sure you have Node.js installed. Then, install the required dependencies:

```sh
yarn install
```

# Setting up the development environment

4. [Easiest Method] Use Expo Go for a Quick Start

```sh
npm start
```

Download the Expo Go app from the App Store (iOS) or Google Play Store (Android).
Scan the QR code displayed in your terminal or browser with the Expo Go app.

4. Run on iOS Simulator or Android Emulator

### iOS Simulator

Install Xcode from the App Store.
Open the project in Xcode using:

```sh
npx react-native run-ios
```

Alternatively, open the .xcworkspace file in the ios directory using Xcode and press the Run button.

### Android Emulator

Install Android Studio.
Set up an Android Virtual Device (AVD).
Run the emulator:

```sh
npx react-native run-android
```

5. Run on a Physical Device

### iOS Device

Connect your iOS device via USB.
Open the project in Xcode.
Select your device as the build target and press the Run button.

### Android Device

Enable USB debugging on your Android device.
Connect your device via USB.
Run the app:

```sh
npx react-native run-android
```

# 🎉 You're All Set!

Congratulations! Your React Native app should now be running. Here are some additional tips and resources to help you along the way:
