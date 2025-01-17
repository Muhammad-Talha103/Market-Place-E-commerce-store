export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: any) => Rule.required().email()
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
        hidden: true
      },
      {
        name: 'addresses',
        title: 'Addresses',
        type: 'array',
        of: [{ type: 'address' }]
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string'
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        options: {
          list: ['customer', 'admin'],
          layout: 'radio'
        },
        initialValue: 'customer'
      },
      {
        name: 'isActive',
        title: 'Is Active',
        type: 'boolean',
        initialValue: true
      }
    ]
  }
  
  