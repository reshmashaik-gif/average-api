# Average API

A simple REST API built with **Node.js and Express** that accepts numbers through `POST /average` and returns the average of all numbers received during the current server session.

## Tech Stack

* Node.js
* Express.js
* Jest + Supertest
* Husky + Commitlint

All technologies and packages used by the project are explicitly declared in `package.json`.

## Setup

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

### Install Dependencies

```bash
git clone https://github.com/reshmashaik-gif/average-api.git
cd average-api
npm install
```

Installing the dependencies also sets up the configured Git Hooks through Husky.

## Run the Server

Start the server using:

```bash
npm start
```

Server runs at:

```text
http://localhost:8003
```

## Client – cURL / Postman

The assignment requirement for a client is satisfied using **cURL**. The API can also be called using Postman.

### POST `/average`

Request:

```json
{
  "number": 10
}
```

Using cURL:

```bash
curl -X POST http://localhost:8003/average -H "Content-Type: application/json" -d "{\"number\":10}"
```

Response:

```json
{
  "average": 10
}
```

Sending another number, such as `20`, returns:

```json
{
  "average": 15
}
```

The API validates the input and rejects missing or non-numeric values.

### Using Postman

* **Method:** `POST`
* **URL:** `http://localhost:8003/average`
* **Header:** `Content-Type: application/json`
* **Body:** `raw` → `JSON`

```json
{
  "number": 10
}
```

## Tests

Run the test cases:

```bash
npm test
```

Tests are implemented using **Jest and Supertest**.

## JSDoc

Appropriate **JSDoc comments** are included in the JavaScript source code to document the API functionality, parameters, and return values.

## Git Hooks

Husky is used for Git Hooks:

* **pre-commit:** runs the test suite.
* **commit-msg:** validates Conventional Commit messages using Commitlint.

The Git Hooks are configured when the project dependencies are installed using:

```bash
npm install
```

## Conventional Commits

This project follows the **Conventional Commits** format.

Commit messages are validated through the `commit-msg` Git Hook using Commitlint.

Example:

```text
feat: add average endpoint
```

Other examples:

```text
fix: handle invalid input
test: add average API tests
docs: update README
```

Commits that do not follow the Conventional Commit format are rejected by the Git Hook.

## Project Structure

```text
average-api/
├── .husky/
├── index.js
├── test.js
├── package.json
├── package-lock.json
├── commitlint.config.js
└── README.md
```

## GitHub

Repository:

https://github.com/reshmashaik-gif/average-api
