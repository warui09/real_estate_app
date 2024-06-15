# API design for Real Estate App

## Overview

This document outlines the design of the RESTful API for the Real Estate App,
which allows listing and managing various real estate properties.
This API is intended for learning purposes and is inspired by [BuyRentKenya](https://www.buyrentkenya.com/),
though it does not match the site's functionality.

### Resources

#### Collection

- Sale
    - Commercial
        - Offices:
            - **Endpoint**: `/offices-for-sale`
            - **Methods**:
                - `GET /offices-for-sale`: List all offices for sale
                - `POST /offices-for-sale`: Add a new office for sale
        - Shops
	    - **Endpoint**: `/shops-for-sale`
	    - **Methods**:
	        - `GET /shops-for-sale`: List all shops for sale
		- `POST /shops-for-sale`: Add a new shop for sale
        - Warehouses
	    - **Endpoint**: `/warehouses-for-sale`
	    - **Methods**:
	        - `GET /warehouses-for-sale`: Lists all warehouses for sale
		- `POST /warehouses-for-sale`: Add a new warehouse for sale
    - Residential
        - Houses
            - Villas
	        - **Endpoint**: `/villas-for-sale`
                - **Methods**:
		    - `GET /villas-for-sale`: List all villas for sale
		    - `POST /villas-for-sale`: Add new villa for sale
            - Townhouses
	        - **Endpoint**: `/townhouses-for-sale`
		- **Methods**:
		    - `GET /townhouses-for-sale`: List all townhouses for sale
		    - `POST /townhouses-for-sale`: Add new townhouse for sale
        - Appartments
	    - **Endpoint**: `/appartment-for-sale`
	    - **Methods**:
	        - `GET /appartments-for-sale`: List all appartments for sale
		- `POST /appartments-for-sale`: Add new appartment for sale
    - Land
        - **Endpoint**: `/land-for-sale`
	- **Methods**:
	    - `GET /land-for-sale`: List all land for sale
	    - `POST /land-for-sale`: Add new land for sale

- Rent

    - Commercial
        - Offices:
            - **Endpoint**: `/offices-for-rent`
            - **Methods**:
                - `GET /offices-for-rent`: List all offices for rent
                - `POST /offices-for-sale`: Add a new office for rent
        - Shops
	    - **Endpoint**: `/shops-for-rent`
	    - **Methods**:
	        - `GET /shops-for-rent`: List all shops for rent
		- `POST /shops-for-rent`: Add new shop for rent
        - Warehouses
	    - **Endpoint**: `/warehouses-for-rent`
	    - **Methods**:
	        - `GET /warehouses-for-rent`: List all warehouses for rent
		- `POST /warehouses-for-rent`: Add new warehouse for rent
    - Residential
        - Houses
            - Villas
	        - **Endpoint**: `/villas-for-rent`
		- **Methods**:
		    - `GET /villas-for-rent`: List all villas for rent
		    - `POST /villas-for-rent`: Add new villa for rent
            - Townhouses
	        - **Endpoint**: `/townhouses-for-rent`
		- **Methods**:
		    - `GET /townhouses-for-rent`: List all townhouses for rent
		    - `POST /townhouses-for-rent`: Add new townhouse for rent
        - Appartments
	    - **Endpoint**: `/appartments-for-rent`
	    - **Methods**:
	        - `GET /appartments-for-rent`: List all appartments for rent
		- `POST /appartments-for-rent`: Add new appartment for rent
    - Land
        - **Endpoint**: `/land-for-rent`
	- **Methods**:
	    - `GET /land-for-rent`: List all land for rent
	    - `POST /land-for-rent`: Add land for rent

#### Single
- Admin
    - **Endpoint**: `/admins{id}`
    - **Methods**:
        - `GET /admins{id}`: Retrieve a specific admin by ID
	- `PUT /admins/{id}`: Update a specific admin by ID
	- `DELETE /admins/{id}: Delete a specific admin by ID

- User
    - **Endpoint**: `/users/{id}`
    - **Methods**:
        - `GET /users/{id}`: Retrieve a specific user by ID
	- `PUT /users/{id}`: Update a specific user by ID
	- `DELETE /users/{id}`: Delete a specific user by ID
