export default {
  name: 'sliderGastronomy',
  title: 'Слайдер — Гастрономия театра',
  type: 'document',
  fields: [
    {
      name: 'slides',
      title: 'Слайды',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Изображение',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              title: 'Альт-текст',
              type: 'string',
              validation: (Rule) => Rule.required().max(100),
            },
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Слайдер: Гастрономия театра',
      }
    },
  },
}
