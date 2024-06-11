# Real Estate App API

## About

This is an api for a real estate app that allows listing of various real estate
property.
This project has been inspired by the property listing site 'https://www.buyrentkenya.com/' however
this api is not intended to match the above site in functionality. This project is solely for
learning purposes and should not be used in a production environment.

## Features

- List real estate properties
- Add new property listings
- Update existing property listings
- Delete property listings
- Search real estate listings by various criteria

## Requirements

- Node.js
- Express
- SQLite (for development)
- MongoDB (for production)

## Installation

1. Clone the repository:
    git clone https://github.com/warui09/real_estate_app.git
    cd real_estate_app
2. Install the dependencies:
    npm install
3. Set up environment variables:
    Create a .env file in the root directory of the project and add your environment variables:
    # .env
    NODE_ENV=development
    SQLITE_DB_PATH=./database.db
    MONGO_URI=mongodb://localhost:27017/real_estate_app
