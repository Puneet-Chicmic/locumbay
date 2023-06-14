import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    // We'll add tableSchemas here later
    tableSchema({
        name: 'profile',
        columns: [
          { name: 'firstName', type: 'string', isOptional: true},
          { name: 'lastName', type: 'string', isOptional: true},
          { name: 'phoneNumber', type: 'string', isOptional: true},
          { name: 'dob', type: 'string', isOptional: true},
          { name: 'emailAddress', type: 'string', isOptional: true},
          { name: 'country', type: 'string', isOptional: true},
          { name: 'state', type: 'string', isOptional: true},
          { name: 'city', type: 'string', isOptional: true},
          { name: 'address', type: 'string', isOptional: true},
          { name: 'postCode', type: 'string', isOptional: true},
          { name: 'photo', type: 'string', isOptional: true},

          { name: 'pharmacyName', type: 'string', isOptional: true},
          { name: 'userId', type: 'number', isOptional: true},
          { name: 'userType', type: 'number', isOptional: true},
          { name: 'userName', type: 'string', isOptional: true},



        ],
      }),
  ]
})