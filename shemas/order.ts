export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'orderNumber',
        title: 'Order Number',
        type: 'string',
        readOnly: true
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                type: 'reference',
                to: [{ type: 'product' }]
              },
              {
                name: 'quantity',
                type: 'number'
              },
              {
                name: 'price',
                type: 'number'
              }
            ]
          }
        ]
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            'pending',
            'processing',
            'shipped',
            'delivered',
            'cancelled'
          ]
        },
        initialValue: 'pending'
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: [
            'pending',
            'completed',
            'failed',
            'refunded'
          ]
        },
        initialValue: 'pending'
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'address'
      },
      {
        name: 'billingAddress',
        title: 'Billing Address',
        type: 'address'
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString()
      },
      {
        name: 'updatedAt',
        title: 'Updated At',
        type: 'datetime',
        initialValue: () => new Date().toISOString()
      }
    ]
  }
  
  