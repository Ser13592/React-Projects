export default {
    name: 'people',
    title: 'people',
    type: 'document',
    fields: [
    
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'family',
        title: 'family',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'email',
        title: 'email',
        type: 'string',
      }
    ]
  }