export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: any) => Rule.required().min(2).max(100)
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 100
        },
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule: any) => Rule.required().min(0)
      },
      {
        name: 'compareAtPrice',
        title: 'Compare at Price',
        type: 'number'
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }],
        validation: (Rule: any) => Rule.required().min(1)
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }],
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'variants',
        title: 'Variants',
        type: 'array',
        of: [{ type: 'productVariant' }]
      },
      {
        name: 'sku',
        title: 'SKU',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
        validation: (Rule: any) => Rule.required().min(0)
      },
      {
        name: 'isActive',
        title: 'Is Active',
        type: 'boolean',
        initialValue: true
      }
    ]
  }
  
  