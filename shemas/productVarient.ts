export default {
    name: 'productVariant',
    title: 'Product Variant',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Variant Name',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'sku',
        title: 'SKU',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'compareAtPrice',
        title: 'Compare at Price',
        type: 'number'
      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'attributes',
        title: 'Attributes',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'key', type: 'string' },
              { name: 'value', type: 'string' }
            ]
          }
        ]
      }
    ]
  }
  
  