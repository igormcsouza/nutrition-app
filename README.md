# Nutrition app

Upload the picture of the dish and take a look at what kind of food is there an get tips to eat better!

#artificial-inteligence #react-native #mobile-app #nutrition

## Tecnologies

- [Nativewind](https://www.nativewind.dev/overview/)
- [Expo](https://expo.dev/)
- [ReactNative](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)

## Styles

Using [Nativewind](https://www.nativewind.dev/overview/) to build the application styles. This framework wraps [Tailwindcss](https://tailwindcss.com/) to be used on React Native components.

Even though this project was done at [rocketseat](https://youtu.be/BYWHyKXhAn8) first, the entire application was done by me, I only took the style guide as inspiration.

## Issues Found

### Initiate the project and run it with Expo Go

First Install Expo CLI into the system and create a new expo project with typescript template [npx create-expo-app -t expo-template-blank-typescript](https://docs.expo.dev/guides/typescript/), then start the app with [npx expo start --tunnel](https://docs.expo.dev/more/expo-cli/#tunneling) to run the app thru tunneling! Follow the link for preparation for tunneling. That might be all, the QRCode will appear in the terminal ready to be read by the Expo GO App on the phone.

### Typescript problems with className

This attribute is not inherited on View or other components, so follow [this guide](https://www.nativewind.dev/getting-started/typescript) to understand how to fix this issue. It's preatty simple tho.