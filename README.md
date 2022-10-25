# Spring Boot Microservice VeloTn

Microservice E-Commerce application built using Spring Boot NodeJs 
## Overview
### The architecture is composed by :

   * [`micro-eureka-server`]: Eureka Discovery Server
   * [`micro-auth-server`]: Simple REST service created with `NodeJS', MongoDb` to use as authentication service**
   * [`micro-velo-server`]: Simple REST service created with `Spring Boot, Spring Data JPA, MySQL` to use as a **resource service**
   * [`micro-balade-server`]: Simple REST service created with `Spring Boot, Spring Data JPA, H2` to use as a **resource service**
   * [`micro-association-server`]: Simple REST service created with `Spring Boot, Spring Data JPA, MySQL` to use as a **resource service**
   * [`front`]: Simple front end app created with `ReactJs` to use as  **the client side**


### Tools you will need

* Maven 3.0+ is your build tool
* Your preferred IDE but we will recommend `STS-4-4.4.1 version`.
* MySQL
*JDK 1.8+

### Microservice execution process:

- First we need to run the "eureka service"
- Second, we need to run `auth-service`
- Third, we need to run the other micro services


### Eureka Service


![1](https://howtodoinjava.com/wp-content/uploads/2017/07/eureka_console_without_anyClient.jpg)

Eureka Server est une application qui contient les informations sur toutes les applications de service client. Chaque micro service s'enregistrera sur le serveur Eureka et le serveur Eureka connaît toutes les applications client exécutées sur chaque port et adresse IP. Eureka Server est également connu sous le nom de Discovery Server.

Overview

Eureka Service Registry Server – This microservice will provide the service registry and discovery server.
Student Microservice – Which will give some functionality based on Student entity. It will be a rest based service and most importantly it will be a eureka client service, which will talk with eureka service to register itself in the service registry.
School Microservice – Same type as of Student service – only added feature is that it will invoke Student service with service look up mechanism. We will not use absolute URL of student service to interact with that service.
Here is the interaction diagram between above listed three services.


Open SpringEurekaServerApplication class that spring already has generated in the downloaded project and add the @EnableEurekaServerannotation on the class.




@EnableEurekaServer
@SpringBootApplication
public class SpringEurekaServerApplication {
  
    public static void main(String[] args) {
        SpringApplication.run(SpringEurekaServerApplication.class, args);
    }
}

### Front end react

![1](https://ibb.co/SfNzLr3)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Auth service nodejs

Minimal full-stack MERN app with authentication using passport and JWTs.

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

## Medium Series

- [Build a Login/Auth App with the MERN Stack — Part 1 (Backend)](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)
- [Build a Login/Auth App with the MERN Stack — Part 2 (Frontend & Redux Setup)](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82)
- [Build a Login/Auth App with the MERN Stack — Part 3 (Linking Redux with React Components)](https://blog.bitsrc.io/build-a-login-auth-app-with-the-mern-stack-part-3-react-components-88190f8db718)

## Configuration

Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

For deploying to Heroku, please refer to [this](https://www.youtube.com/watch?v=71wSzpLyW9k) helpful video by TraversyMedia.
