# react-native-atom-template


[![npm version](https://img.shields.io/npm/v/react-native-atom-template.svg)](https://www.npmjs.com/package/react-native-atom-template)
[![License](https://img.shields.io/badge/License-Apache%202.0-brightgreen.svg)](https://opensource.org/licenses/Apache-2.0)


A starter kit for initializing a new React-Native project with some commonly used preconfigured libraries and the folder structure.

## Key features:

- Pre-configured folder structure
- Reusable common components, utility functions and constants
- Navigation using [react-navigation](https://reactnavigation.org/) (v6)
- State management using [zustand](https://www.npmjs.com/package/zustand/)
- Staging and Production environment configurations using [react-native-config](https://github.com/luggit/react-native-config)
- axios is a promised-based HTTP client for JavaScript. [axios](https://axios-http.com/docs/intro)

<img width="166" alt="Screenshot 2022-11-08 224833" src="https://user-images.githubusercontent.com/54738565/200633118-e2839b3e-d7f4-452d-a72a-05e55ef40e15.png">

<img width="374" alt="Screenshot 2022-11-08 225011" src="https://user-images.githubusercontent.com/54738565/200633181-d4441dd5-9010-4ff6-9feb-79a599dd5afe.png">

## Prerequisite

1. Make sure that you have followed the environment setup instructions properly from the official [React Native docs](https://reactnative.dev/docs/environment-setup).

2. The installation command will fail if you have the global legacy `react-native-cli` installed in your machine. Make sure you uninstall it first:

```shell
yarn global remove react-native-cli
```

or if using `npm`

```shell
npm uninstall -g react-native-cli
```

## Quick start

Generate a new React Native(**v0.72.7**) app using the **react-native-atom-template**:

```shell
npx react-native init MyApp --template react-native-atom-template --skip-install
```

You might also be prompted to confirm the installation for the packages `react-native` and `husky`. Simply hit `enter` to proceed.

The template will automatically install the `npm` dependencies and the `pods` (if you are on the MacOS).

## Link Assets

```shell
npx react-native-asset
```

## Error Fixing (MAC| LINUX)

error Failed to install the app. Make sure you have the Android development environment set up: https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment.
Error: spawnSync ./gradlew EACCES

```shell
chmod 755 android/gradlew
```

## Digging Deeper

Check out the [documentation website](https://github.com/abhi3691/react-native-atom-template/) to learn more about the template.

### Adopting at scale

<a href="https://github.com/sponsors/abhi3691">
  <img align="right" width="160" alt="This library helped you? Consider sponsoring!" src=".github/funding-octocat.svg">
</a>

react-native-atom-template is provided _as is_, I work on it in my free time.

If you're integrating react-native-atom-template , consider [funding this project](https://github.com/sponsors/abhi3691) and <a href="mailto:abhinandvk41@gmail.com?subject=Adopting VisionCamera at scale">contact me</a> to receive premium enterprise support, help with issues, prioritize bugfixes, request features, help at integrating VisionCamera and/or Frame Processors, and more.
