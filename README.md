# code-push-ready

| code-push-ready       | official                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code-push-ready run` | [`CodePush Introduction`](https://learn.microsoft.com/en-us/appcenter/distribution/codepush/) [`Releasing CodePush updates using the App Center CLI`](https://learn.microsoft.com/en-us/appcenter/distribution/codepush/cli) [`React Native Client SDK`](https://learn.microsoft.com/en-us/appcenter/distribution/codepush/rn-overview) [`Get Started with the React Native Client SDK`](https://learn.microsoft.com/en-us/appcenter/distribution/codepush/rn-get-started) and so on... |

commands automatically update file settings for code push in your react-native project

## Guide

> [!WARNING]  
> The guide below has deprecated, it will be updated.

1. install react-native-codepush-autoset

   ```
   npm i react-native-codepush-autoset
   ```

2. go to your react-native project

   ```
   cd YOUR_PROJECT/
   ```

3. run command below
   ```
   react-native-codepush-autoset run
   ```

Done!

## To-do list

- [ ] ios
  - [ ] appcenter
  - [ ] codepush
- [ ] android
  - [ ] appcetner
  - [ ] codepush
    - [ ] considering in case of code exist
    - [x] build.gradle
    - [x] settings.gradle
    - [x] MainApplication.java
