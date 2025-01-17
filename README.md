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