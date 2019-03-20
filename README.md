# Dronuts
### Ryan Barrett, Derek Yan, Judy Zhang
This is Group 3's project for CMU's Software Engineering for Startups class (17-356). This readme will describe how to run and test the Dronuts application.

## How to run the application for...
### Development

To run the application in development mode, run the following code from the Dronuts directory:

    > $ npm install
    > $ npm start

### Production

To run the application in production mode, we first need to build a docker container before running our code. The following code demonstrates how to do so:

    > $ docker-compose build
    > $ docker-compose up

## Testing with Travis CI

TravisCI runs with the script found in .travis.yml from the root directory. It runs automatically when changes are pushed to Git.

## Deploying on Azure VM

Azure is also connected to Git and automatically deploys changes to the application after a pull request has been accepted.

## Running linting, tests, and npm-cleanup scripts/tools

To run the linter [eslint-watch](https://www.npmjs.com/package/eslint-watch) to check for style consistencies, run the following code from the Dronuts directory:

    > $ npm run lint

We used [Jest](https://jestjs.io/) as our testing framework. To run test for the code, run the following code from the root directory:

    > $ npm run test

The above tools and targets are also executed automatically by TravisCI after code is pushed to Git.

