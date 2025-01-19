# Day 2
# E-commerce System Documentation

## System Overview

Our e-commerce platform is built with a modern tech stack, integrating various services to provide a seamless shopping experience. The system uses Sanity as its primary database and incorporates third-party APIs for payment processing and shipment handling.

## Core Features

### 1. User Management
- Sign Up/Login functionality
- Customer profile management
- Authentication and authorization

### 2. Shopping Experience
- Product browsing and search
- Cart management
- Order processing
- Payment integration
- Shipment tracking

## API Endpoints

# API Documentation

This document provides API endpoints for the eCommerce store.

## API Endpoints Excel Sheet

You can download the detailed **API Endpoints** Excel file from the link below:

[Download API Endpoints Excel File](./Apis%20End%20point.xlsx)



## Error Responses

### Standard Error Format

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": object | null
  }
}
```

### Common Error Codes

- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `422`: Validation Error
- `500`: Internal Server Error


### Example Error Response

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {
      "email": "Must be a valid email address",
      "password": "Must be at least 8 characters long"
    }
  }
}
```

## Rate Limiting

API requests are limited to:

- 100 requests per minute for authenticated endpoints
- 20 requests per minute for unauthenticated endpoints


Rate limit headers included in responses:

```plaintext
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

## Webhook Events

### Available Events

- `order.created`
- `order.updated`
- `payment.succeeded`
- `payment.failed`
- `shipping.created`
- `shipping.updated`


### Webhook Payload Format

```json
{
  "event": "string",
  "timestamp": "string",
  "data": {
    "id": "string",
    "type": "string",
    "attributes": object
  }
}
```

## Testing

### Test Cards

- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Authentication Required: `4000 0025 0000 3155`

![Work Flow Of Website](structure1.png)

# Day 3

# E-Commerce Hackathon Project

This project is an e-commerce platform developed for the hackathon. The goal of this project is to create a seamless, user-friendly, and scalable e-commerce website, where users can browse products, add them to their cart, view product details, and make purchases. The application is integrated with a headless CMS (Sanity) to manage dynamic content such as product details, images, and stock levels.

## Features

- **Product Browsing**: Users can browse through featured products, view detailed descriptions, prices, and availability.
- **Product Search**: Easily search products using a search bar.
- **Shopping Cart**: Add products to the shopping cart, update quantities, and remove products.
- **Wishlist**: Users can add products to their wishlist for future reference.
- **Product Details Page**: A detailed page for each product with more information, including images and specifications.
- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience on both desktop and mobile devices.

## Tech Stack

- **Frontend**: 
  - **React**: A JavaScript library for building user interfaces.
  - **Next.js**: A React framework for server-side rendering and static site generation.
  - **Tailwind CSS**: A utility-first CSS framework for styling.
  - **React Icons**: For adding customizable icons to the UI.
  - **Next Image**: For optimized image handling.

- **Backend**:
  - **Sanity CMS**: A headless CMS for managing dynamic content, including products, images, and stock levels.
  - **Sanity API**: To fetch product data and content from the CMS.

- **State Management**:
  - **Redux**: A state management library to handle the application state, including the shopping cart and wishlist.

## API Integration with Sanity

This project demonstrates how to integrate an external API with **Sanity CMS** to manage and display dynamic content such as products, categories, and more.

### 1. Importing Data from an External API to Sanity
- **Step 1.1**: Set up Sanity Studio and define schemas for products, categories, and other required data.
- **Step 1.2**: Import product data from an external API (for example, from a public API or custom backend).
- **Step 1.3**: Map the fetched data to the defined schemas and push it to your Sanity dataset.

### 2. Fetching and Using Data in Your Project
- **Step 2.1**: Use **Groq** queries to fetch product data from the Sanity dataset.
- **Step 2.2**: Implement API calls in your Next.js project to retrieve the data from Sanity using the Sanity Client.
- **Step 2.3**: Display the fetched data dynamically in the frontend, such as on product listing pages and product detail pages.

## Dynamic Routing with Redux

Dynamic routing allows you to display product details dynamically based on the product ID in the URL. Using **Next.js**'s dynamic routes and **Redux**, the selected product's data is managed globally across the application.

### 1. Set up Redux Store
First, we create a Redux slice to manage the state for the selected product.

```javascript
// redux/singleProductSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProduct: null,
};

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    setSingleProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSingleProduct } = singleProductSlice.actions;
export const selectSingleProduct = (state) => state.singleProduct.selectedProduct;
export default singleProductSlice.reducer;
