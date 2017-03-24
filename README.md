# Realtime Messaging Simple Chat using Angular2+

Part of the [The Realtime® Framework](http://framework.realtime.co), Realtime Cloud Messaging (aka ORTC) is a secure, fast and highly scalable cloud-hosted Pub/Sub real-time message broker for web and mobile apps.

If your application has data that needs to be updated in the user’s interface as it changes (e.g. real-time stock quotes or ever changing social news feed) Realtime Cloud Messaging is the reliable, easy, unbelievably fast, “works everywhere” solution.

## Example overview
This examples provides a very simple chat using the Realtime Messaging JavaScript SDK with Angular2. 

Enter a message in the input field and it will be broadcasted to all other windows running the example.

The Angular project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

We have simply added the `realtime-messaging` module dependency in the package.json file:

    "dependencies": {
        ...
        "realtime-messaging": "^2.1.40"
    },


## Requirements

You'll need node.js (> 6.9) and npm (> 3.10) to build this example.

Register to get your free Realtime Messaging application key at [https://accounts.realtime.co/signup/](https://accounts.realtime.co/signup/)

## Install dependencies

Before you start your development server to run the app, don't forget to run the following command in the example root directory to install all dependencies:

    npm install

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Author
Realtime.co
