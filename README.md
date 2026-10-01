# Average API

A simple REST API built with **Node.js and Express** that accepts numbers through `POST /average` and returns the average of all numbers received during the current server session.

## Tech Stack

* Node.js
* Express.js
* Jest + Supertest
* Husky + Commitlint

## Setup

```bash
git clone https://github.com/reshmashaik-gif/average-api.git
cd average-api
npm install
npm start
```

Server runs at:

```text
http://localhost:8003
```

## API Usage

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

## Tests

Run the test cases:

```bash
npm test
```

Tests are implemented using Jest and Supertest.

## Git Hooks

Husky is used for Git hooks:

* **pre-commit:** runs the test suite.
* **commit-msg:** validates Conventional Commit messages using Commitlint.

Example:

```text
feat: add average endpoint
```

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
