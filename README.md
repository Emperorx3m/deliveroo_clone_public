


```
# Deliveroo Clone App

Welcome to the Deliveroo Clone App! This repository contains a React Native application built with Expo. The project leverages GraphQL (via Apollo Client), Redux for state management, and React Navigation for handling app routes. Additional styling and configuration are enabled using Nativewind and other internal modules.

# [Your App Name]
================


View a video of the app features demo here:

<video width="320" height="640" controls>
  <source src="demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

DEMO: [Demo Video](demo.mp4)


## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Additional Information](#additional-information)

## Overview

This application serves as a clone of the popular food delivery platform. The primary goal is to provide users with a seamless ordering experience. The project integrates the following key technologies:

- **Expo:** For rapid development and testing.
- **Apollo Client:** Connecting to the backend GraphQL server. The BE endpoint is provided via the `EXPO_PUBLIC_BE_URL` environment variable.
- **Redux:** For centralized state management.
- **React Navigation:** For handling navigation between screens.
- **Nativewind:** For styling and theming based on Tailwind CSS principles, integrated via Babel and Metro configurations.
- **Strapi:** For backend which is not included in this repo. which is a headless CMS.
- **Google Maps SDK:** For Displaying Restaurant location on map based on the long and lat supplied in your backend.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (LTS version recommended)
- Expo CLI (`npm install -g expo-cli`)
- Yarn or npm (package manager)
- Git

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Emperorx3m/deliveroo_clone_public.git
   ```

2. Navigate to the App folder:
   ```
   cd Deliveroo_clone_public
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Set up environment variables:
   - Create a `.env` file at the root of your project if needed.
   - Define `EXPO_PUBLIC_BE_URL` with the backend URL. For example:
     ```
     EXPO_PUBLIC_BE_URL=https://your-backend-url.com
     ```

## Project Structure

Below is an overview of the key files and their purpose:

- **App.js**: Main entry point of the application. Initializes providers (Apollo, Redux, Navigation) and sets up the primary navigation flow.
- **babel.config.js**: Contains configuration for Babel; includes support for Expo and Nativewind transformations.
- **metro.config.js**: Configuration for the Metro bundler with additional setup for Nativewind.
- **app.json**: Expo configuration file which includes details such as the app name, version, icon, splash screen, and platform-specific settings.

## Configuration

- **Apollo Client Setup**: 
  The application connects to a GraphQL backend using the Apollo Client. The URL is dynamically constructed using the `EXPO_PUBLIC_BE_URL` environment variable.
- **Styling**: 
  Nativewind is used to integrate Tailwind CSS principles into the React Native components. The Babel and Metro configurations are updated accordingly.
- **Navigation Stack**: 
  The navigation structure uses a stack navigator to manage screens such as Home, Restaurant, Basket, Preparing Order, and Delivery Order.

## Running the App

To start the development server, run:

```
expo start
```

This will open the Expo Developer Tools in your browser. Follow the instructions displayed to run the app on an emulator or physical device.


View a video of the app features demo here:

<video width="320" height="640" controls>
  <source src="demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

DEMO: [Demo Video](demo.mp4)

## Additional Information

- **Development**: 
  The project follows a modular structure to support scalable feature development. Developers are encouraged to keep components, configurations, and styles organized according to project best practices.
  
- **Contribution**: 
  Please ensure you adhere to internal coding standards and practices when contributing new features or making changes.

- **Resources**: 
  For further assistance, refer to the official documentation:
  - [Expo Documentation](https://docs.expo.dev/)
  - [Apollo Client Docs](https://www.apollographql.com/docs/react/)
  - [Redux Docs](https://redux.js.org/)
  - [React Navigation Docs](https://reactnavigation.org/)
  - [Nativewind Docs](https://www.nativewind.dev/)

Happy coding!
```

