export default {
    name: 'transaction',
    title: 'Transaction',
    type: 'document',
    fields: [
      {
        name: 'order',
        title: 'Order',
        type: 'reference',
        to: [{ type: 'order' }],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
        options: {
          list: ['stripe', 'paypal']
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: ['pending', 'completed', 'failed', 'refunded']
        },
        initialValue: 'pending'
      },
      {
        name: 'transactionId',
        title: 'Transaction ID',
        type: 'string'
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString()
      }
    ]
  }
  
  