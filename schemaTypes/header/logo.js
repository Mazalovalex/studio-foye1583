export default {
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Название логотипа (для внутреннего использования)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Текст для атрибута alt (для SEO и доступности)',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}
