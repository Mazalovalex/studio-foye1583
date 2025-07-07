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
        hotspot: true, // Позволяет задать фокус области картинки
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
