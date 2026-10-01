# Average API

A simple REST API built with Node.js and Express that calculates the average of all valid numbers received through the API.

## Features

- POST `/average` endpoint
- Accepts a number in the JSON request body
- Maintains all valid numbers received while the server is running
- Returns the average of all numbers received so far
- Validates invalid or missing numbers
- Automated tests using Jest and Supertest
- Git hooks using Husky
- Conventional Commit validation using Commitlint

## Technologies Used

- Node.js
- Express.js
- Jest
- Supertest
- Husky
- Commitlint

## Installation

Clone the repository and install the dependencies:

```bash
npm install