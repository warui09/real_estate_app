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
            - **Endpoint**: /offices-for-sale
            - **Methods**:
                - GET /offices-for-sale: List all offices for sale
                - POST /offices-for-sale: Add a new office for sale
        - Shops
        - Warehouses
    - Residential
        - Houses
            - Villas
            - Townhouses
        - Appartments
    - Land

#### Single
- User
- Admin
