# Lead Portal

A simple Lead/Application Management Portal built using React, Node.js and Zoho CRM.

## Features

* Submit application form
* Create Lead in Zoho CRM
* View submitted leads in Admin Dashboard
* Search leads by Name and Email
* Basic form validation

## Tech Stack

Frontend:

* React.js

Backend:

* Node.js
* Express.js

CRM:

* Zoho CRM API

## Project Structure

```text
lead-portal
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── server.js
│   ├── zoho.js
│   ├── .env
│   └── package.json
│
└── README.md
```

## Setup

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
npm install
node server.js
```

Runs on:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
ZOHO_CLIENT_ID=your_client_id
ZOHO_CLIENT_SECRET=your_client_secret
ZOHO_REFRESH_TOKEN=your_refresh_token
```

## Zoho CRM Configuration

1. Create a Self Client in Zoho API Console.
2. Generate Refresh Token.
3. Add required Lead fields in Zoho CRM.
4. Update the `.env` file with your credentials.

## Available APIs

### Create Lead

```http
POST /createlead
```

Creates a Lead record in Zoho CRM.

### Get Leads

```http
GET /getleads
```

Fetches Lead records from Zoho CRM.

## Screens

* Application Form
* Admin Dashboard

## Notes

* Zoho CRM is used as the primary source of data.
* Lead records are fetched directly from Zoho CRM.
* Environment variables are not included in the repository.

## Author

Anjali Singh
