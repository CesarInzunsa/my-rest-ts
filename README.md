# My REST TS

This is a RESTful API server built with TypeScript, Express, and MongoDB. It includes logging with Winston and Winston-MongoDB, and follows best practices for project structure and configuration.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [License](#license)

## Introduction

This project is a RESTful API server designed to manage products. It is built using TypeScript, Express, and MongoDB, and includes comprehensive logging and error handling.

## Prerequisites

- Node.js (v20.18.0 or higher)
- MongoDB (v4 or higher)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/CesarInzunsa/my-rest-ts.git
    cd my-rest-ts
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create `.env.development`, `.env.production`, and `.env.testing` files based on your environment.
    - Example `.env` file:
        ```
        HOST=127.0.0.1
        PORT=3000
        API_PREFIX=/api
        CONNECTION_STRING=mongodb://localhost:27017
        DATABASE=test
        MONGODB_URI=mongodb://localhost:27017/logs
        ```

## Configuration

- The project uses TypeScript for type safety and ESLint for code linting.
- Environment-specific configurations are managed using `.env` files.

## Scripts

- `lint`: Run ESLint to check for linting errors.
    ```sh
    npm run lint
    ```

- `lint-fix`: Run ESLint and automatically fix linting errors.
    ```sh
    npm run lint-fix
    ```

- `dev`: Start the development server with `ts-node-dev`.
    ```sh
    npm run dev
    ```

- `build`: Compile TypeScript to JavaScript.
    ```sh
    npm run build
    ```

- `start`: Start the production server.
    ```sh
    npm start
    ```

## License

This project is licensed under the ISC License.