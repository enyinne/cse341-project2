# CSE 341 Project 2 - REST API (CRUD Operations)

## Overview
This project is a RESTful API built with Node.js, Express, and MongoDB.  
It performs full CRUD operations (Create, Read, Update, Delete) on a Contacts collection and is structured using MVC architecture.

---

## Features
- REST API built with Express.js
- MongoDB database integration using Mongoose
- Full CRUD operations:
  - Create contacts
  - Read all contacts
  - Read single contact
  - Update contacts
  - Delete contacts
- Input validation and error handling
- Environment variables using dotenv
- Proper HTTP status codes

---

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## API Endpoints

### Contacts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /contacts | Get all contacts |
| GET | /contacts/:id | Get a single contact |
| POST | /contacts | Create a new contact |
| PUT | /contacts/:id | Update a contact |
| DELETE | /contacts/:id | Delete a contact |

---

## Example Contact JSON

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@example.com",
  "phone": "08012345678",
  "address": "Port Harcourt",
  "company": "Tech Ltd",
  "jobTitle": "Developer"
}
