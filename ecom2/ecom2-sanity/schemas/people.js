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
        title: 'Email',
        type: 'string',
      },
      {
        name: 'recipe',
        type: 'object',
        fields: [
          {
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'description',
            type: 'text',
            validation: Rule => Rule.required(),
          },
          {
            name: 'ingredients',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'name',
                    type: 'string',
                    validation: Rule => Rule.required(),
                  },
                  {
                    name: 'quantity',
                    type: 'string',
                    validation: Rule => Rule.required(),
                  },
                ],
              },
            ],
            validation: Rule => Rule.required(),
          },
          {
            name: 'instructions',
            type: 'array',
            of: [
              {
                type: 'string',
              },
            ],
            validation: Rule => Rule.required(),
          },
          {
            name: 'image',
            type: 'image',
            validation: Rule => Rule.required(),
          },
        ],
      }
    ]
  }