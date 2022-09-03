


# react-native-atom-template

A starter kit for initializing a new React-Native project with some commonly used preconfigured libraries and the folder structure.



## Key features:
- Pre-configured folder structure
- Basic Authentication screens(Login, Signup, Forgot Password) and flow
- Reusable common components, utility functions and constants
- [Logger](./template//src/utilities/logger.js) to log data more clearly using coloured logs in Chrome Debugger
- Navigation using [react-navigation](https://reactnavigation.org/) (v6)
- State management using [zustand](https://www.npmjs.com/package/zustand/)
- Staging and Production environment configurations using [react-native-config](https://github.com/luggit/react-native-config)
- TDD(Test-Driven Development) using [jest](https://jestjs.io/)
- (Unsecured) local data storage using [axios](https://axios-http.com/docs/intro)


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

Generate a new React Native(**v0.69.5**) app using the **react-native-atom-template**:

```shell
npx react-native init MyApp --template @ajaysidhu/react-native-template --skip-install
```

You might also be prompted to confirm the installation for the packages `react-native` and `husky`. Simply hit `enter` to proceed.

The template will automatically install the `npm` dependencies and the `pods` (if you are on the MacOS).

## Digging Deeper

Check out the [documentation website](https://github.com/abhi3691/react-native-atom-template/) to learn more about the template.

## Configure Bundle Ids, App Name and Google Service Files




