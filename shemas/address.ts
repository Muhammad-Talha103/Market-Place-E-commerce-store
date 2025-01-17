export default {
    name: 'address',
    title: 'Address',
    type: 'object',
    fields: [
      {
        name: 'street',
        title: 'Street',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'state',
        title: 'State',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'postalCode',
        title: 'Postal Code',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'country',
        title: 'Country',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      }
    ]
  }
  
  