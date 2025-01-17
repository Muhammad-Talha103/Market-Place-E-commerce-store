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

### Authentication

#### Register New User

```plaintext
POST /auth/register
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "password": "string",
  "contact": "string",
  "address": {
    "street": "string",
    "city": "string",
    "state": "string",
    "postalCode": "string",
    "country": "string"
  }
}

Response 201:
{
  "userId": "string",
  "email": "string",
  "name": "string",
  "token": "string"
}
```

#### Login

```plaintext
POST /auth/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}

Response 200:
{
  "token": "string",
  "user": {
    "id": "string",
    "name": "string",
    "email": "string"
  }
}
```

### Products

#### Get All Products

```plaintext
GET /products
Query Parameters:
- page (integer, default: 1)
- limit (integer, default: 10)
- category (string, optional)
- sort (string, optional: 'price_asc', 'price_desc')

Response 200:
{
  "products": [
    {
      "id": "string",
      "name": "string",
      "price": number,
      "description": "string",
      "images": string[],
      "category": "string",
      "stock": number
    }
  ],
  "totalPages": number,
  "currentPage": number
}
```

#### Get Product by ID

```plaintext
GET /products/{productId}

Response 200:
{
  "id": "string",
  "name": "string",
  "price": number,
  "description": "string",
  "images": string[],
  "category": "string",
  "stock": number,
  "variants": [
    {
      "id": "string",
      "name": "string",
      "price": number,
      "stock": number
    }
  ]
}
```

### Cart

#### Get Cart

```plaintext
GET /cart
Authorization: Bearer <token>

Response 200:
{
  "id": "string",
  "items": [
    {
      "productId": "string",
      "quantity": number,
      "price": number,
      "name": "string",
      "image": "string"
    }
  ],
  "totalAmount": number
}
```

#### Add to Cart

```plaintext
POST /cart/items
Authorization: Bearer <token>
Content-Type: application/json

{
  "productId": "string",
  "quantity": number
}

Response 200:
{
  "message": "Item added to cart",
  "cartTotal": number
}
```

#### Update Cart Item

```plaintext
PUT /cart/items/{itemId}
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": number
}

Response 200:
{
  "message": "Cart updated",
  "cartTotal": number
}
```

#### Remove from Cart

```plaintext
DELETE /cart/items/{itemId}
Authorization: Bearer <token>

Response 200:
{
  "message": "Item removed from cart",
  "cartTotal": number
}
```

### Orders

#### Create Order

```plaintext
POST /orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    {
      "productId": "string",
      "quantity": number
    }
  ],
  "shippingAddress": {
    "street": "string",
    "city": "string",
    "state": "string",
    "postalCode": "string",
    "country": "string"
  },
  "paymentMethod": "string"
}

Response 201:
{
  "orderId": "string",
  "totalAmount": number,
  "status": "pending",
  "paymentStatus": "pending"
}
```

#### Get Order Details

```plaintext
GET /orders/{orderId}
Authorization: Bearer <token>

Response 200:
{
  "id": "string",
  "items": [
    {
      "productId": "string",
      "name": "string",
      "quantity": number,
      "price": number
    }
  ],
  "totalAmount": number,
  "status": "string",
  "paymentStatus": "string",
  "shippingAddress": {
    "street": "string",
    "city": "string",
    "state": "string",
    "postalCode": "string",
    "country": "string"
  },
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Get User Orders

```plaintext
GET /orders
Authorization: Bearer <token>
Query Parameters:
- page (integer, default: 1)
- limit (integer, default: 10)
- status (string, optional)

Response 200:
{
  "orders": [
    {
      "id": "string",
      "totalAmount": number,
      "status": "string",
      "paymentStatus": "string",
      "createdAt": "string"
    }
  ],
  "totalPages": number,
  "currentPage": number
}
```

### Payment

#### Create Payment Intent

```plaintext
POST /payments/create-intent
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderId": "string",
  "amount": number,
  "currency": "string"
}

Response 200:
{
  "clientSecret": "string",
  "paymentIntentId": "string"
}
```

#### Confirm Payment

```plaintext
POST /payments/confirm
Authorization: Bearer <token>
Content-Type: application/json

{
  "paymentIntentId": "string",
  "orderId": "string"
}

Response 200:
{
  "success": boolean,
  "orderId": "string",
  "status": "string"
}
```

### Shipping

#### Get Shipping Rates

```plaintext
POST /shipping/rates
Authorization: Bearer <token>
Content-Type: application/json

{
  "address": {
    "street": "string",
    "city": "string",
    "state": "string",
    "postalCode": "string",
    "country": "string"
  },
  "items": [
    {
      "weight": number,
      "dimensions": {
        "length": number,
        "width": number,
        "height": number
      }
    }
  ]
}

Response 200:
{
  "rates": [
    {
      "carrier": "string",
      "service": "string",
      "rate": number,
      "estimatedDays": number
    }
  ]
}
```

#### Track Shipment

```plaintext
GET /shipping/track/{trackingNumber}
Authorization: Bearer <token>

Response 200:
{
  "trackingNumber": "string",
  "status": "string",
  "estimatedDelivery": "string",
  "events": [
    {
      "status": "string",
      "location": "string",
      "timestamp": "string"
    }
  ]
}
```

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


### Test Environment

Base URL for testing:

```plaintext
https://api-test.yourdomain.com/v1
```

```plaintext

This API documentation provides a comprehensive overview of all endpoints, including authentication, request/response formats, error handling, rate limiting, and testing information. Each endpoint is documented with example requests and responses, making it easy for developers to integrate with the system.
```