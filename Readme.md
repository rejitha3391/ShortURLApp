# Short URL App

## Overview

Simple react native application helping staff shortening their long URL links.
It has following features:

1. User is able to input their url into an input box and submit for further processing
2. On submission, the data input is passed to an API endpoint, and on the successful response, the shortened link is added to the ‘recently shortened URLs list’
3. The ‘shortened URLs list’ shows last 5 processed links
4. Upon app reload, it is accepted that the last 5 processed links will no longer stay in the list
5. Used https://t.ly/ for For API integration,

## Getting started

This is a React native application and as such, you'll need to have installed on your machine a few dependencies:

1. Node.js
2. Git (plus a Github account)
3. Yarn or NPM
4. Please visit https://reactnative.dev/docs/environment-setup for more installation steps

With the above installed, you'll need to fork this Github repo locally to your machine.

## Running the application

1. run `npm install` to install the node modules
2. run `npx react-native run-ios` to run the application on IOS
3. run `npx react-native run-android` to run the application on Android

### Testing

Runs tests via Jest and React Testing Library

```
npm run test
```

## Notes

Used the free trial of https://t.ly for Apis integration; the trial is good until February 16, 2023. Subscribe to the URL or take the free trail in order to use it further. Change the authentication token with AUTH_TOKEN in src/utils/constants.ts file for further usage.
