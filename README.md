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

### Authentication Endpoints

```typescript
POST /api/auth/signup
{
  name: string,
  email: string,
  contact: string,
  address: string,
  password: string
}

POST /api/auth/login
{
  email: string,
  password: string
}
```

### Cart Management

```typescript
GET /api/cart
// Returns user's cart items

POST /api/cart
{
  productId: string,
  quantity: number,
  price: number
}

PUT /api/cart/:itemId
{
  quantity: number
}

DELETE /api/cart/:itemId
```

### Order Management

```typescript
POST /api/orders
{
  products: Array<{
    id: string,
    quantity: number
  }>,
  totalAmount: number,
  shippingAddress: string,
  paymentStatus: string
}

GET /api/orders/:orderId
// Returns order details

GET /api/orders/user/:userId
// Returns user's order history
```

### Transaction Processing

```typescript
POST /api/transactions
{
  orderId: string,
  paymentMethod: string,
  amount: number,
  status: string
}

GET /api/transactions/:transactionId
// Returns transaction details
```

## Third-Party API Integrations

### Payment Gateway Integration

#### Stripe API
- **Purpose**: Handle secure payment processing
- **Endpoints Used**:
  ```typescript
  POST /api/stripe/create-payment-intent
  POST /api/stripe/confirm-payment
  GET /api/stripe/payment-status

I'll create comprehensive API endpoint documentation for the e-commerce system.

[https://api.yourdomain.com/v1](https://api.yourdomain.com/v1)

```plaintext

## Authentication
All authenticated endpoints require a Bearer token in the Authorization header:
```http
Authorization: Bearer <your_jwt_token>
```

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