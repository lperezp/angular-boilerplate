# Boilerplate for Angular

Angular base project Includes configuration of the TsLint, Husky, Sentry, and Unit Testing with Jest setup.
(\*) The project is in version `9.1.7` of Angular.

## Organization of project folders

### Core

Within this folder will go what is related to the project. Third-party libraries can also be added. Inside it will be the layout, interceptors, among others. The Core Module will be in all modules by default.

### Modules

In this folder each different feature of the application will be organized.

### Shared

This is generally where part of the code will be shared between all the modules. They can be components, services, directives, pipes among others. The Shared module must be imported.

### (\*) Components Library

If you want to use a library for components like NgZorro, you have to create a folder with the name of the library and import it to the sharedModule, this to avoid module overload.

```
├── app.component.html
├── app.component.spec.ts
├── app.component.ts
├── app.module.ts
├── app-routing.module.ts
├── core
│   ├── components
│   │   └── admin
│   ├── guards
│   └── layouts
│       ├── admin
│       └── auth
├── modules
│   ├── <Feature>
│       ├── models
│       │   ├── feature.model.ts
│       ├── enum
│       ├── pipes
│       ├── directives
│       ├── components
│       │   ├── admin
│       │   └── auth
│       ├── guards
│       └── services
├── shared
│   ├── components
│   ├── services
│   └── shared.module.ts
```

## Install

Enter the project directory from the console and install the dependencies.

```
 npm install
```

## Sentry Configuration

To configure Sentry.io you must enter the environment.ts file and modify the `SENTRY_DNS` and `TRACKING_ORIGIN` for the data that appears in the Sentry dashboard when creating a project for Crashlytics.

## Run project

To build the project in each environment, there are commands within the `package.json`, which details the execution scripts for each environment.

### By Development

```
ng serve
```

### By Staging

```
npm run serve:staging
```

### By Production

```
npm run serve:prod
```

## Deploy project

For the generation of the compiled application, there are commands inside the `package.json`, which details the scripts for each environment.

### By Staging

```
npm run build:staging
```

### By Production

```
npm run build:prod
```

## Measure performance

Better decisions about what to optimize and how can be made when you have a clear and precise understanding of what makes your application slow. If you want to analyze the project to check which dependency has a very high weight, you can run the following command:

```
npm run analyzer
```

## Run unit tests

To run the unit tests you must use the following command:

```
ng test
```

## Run E2E tests

To run the e2e tests you must use the following command:

```
npx cypress open
```

## Recommendations:

Install the following extensions:

- **Jest**: For the execution of unit tests.
- **Sonarlint**: For static code analysis in development time.
