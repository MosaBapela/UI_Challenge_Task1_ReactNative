# UI Challenge Task 1 React Native

This project is a React Native application built using Expo. This guide will help you run the project locally for development and also how to install the built APK on an Android device.

## Getting Started

### Prerequisites
- Node.js and npm installed
- Expo CLI installed globally (`npm install -g expo-cli`)
- EAS CLI installed globally (`npm install -g eas-cli`)
- An Android or iOS device/emulator for testing

### Running the Project Locally

1. Clone the repository and navigate into the project directory:
   ```bash
   git clone <repository-url>
   cd UI_Challenge_Task1_ReactNative
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   # or
   expo start
   ```

4. Run on your preferred platform:
   - For Android device/emulator:
     ```bash
     npm run android
     # or
     expo start --android
     ```
   
   - For iOS device/simulator (macOS only):
     ```bash
     npm run ios
     # or
     expo start --ios
     ```

   - For Web:
     ```bash
     npm run web
     # or
     expo start --web
     ```

You can also scan the QR code shown in the terminal with the Expo Go app on your phone to run the app.

### Installing the Built APK on Android

You can download the latest built APK for this project from the following link:

[Download APK](https://expo.dev/accounts/mossman2/projects/UI_Challenge_Task1_ReactNative/builds/18892440-f71c-4541-a1d3-df040776e0ef)

Instructions:
1. Download the APK file to your Android device.
2. If prompted, enable installation from unknown sources in your device settings.
3. Open the downloaded APK file to install the app.
4. Once installed, you can launch the app like any other Android application.

## Additional Notes

- The project uses EAS Build with a custom profile configured to produce APK files that can be installed directly.
- For more details on EAS Build, visit: https://docs.expo.dev/build/introduction/

## Troubleshooting

If you encounter any issues running or building the app, consider the following:
- Confirm you have the correct versions of Node.js, Expo CLI, and EAS CLI installed.
- Check your internet connection for uploading builds.
- Make sure your device/emulator has proper settings to run the app.

## Contact

For further support, contact the project maintainer.
