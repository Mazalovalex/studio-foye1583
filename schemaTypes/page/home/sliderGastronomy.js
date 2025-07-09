export default {
  name: 'sliderGastronomy',
  title: 'Главная | Слайдер — Гастрономия театра',
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
    {
      name: 'description',
      title: 'Описание',
      type: 'object',
      fields: [
        {
          name: 'line1',
          title: 'Первая строка описания',
          type: 'string',
        },
        {
          name: 'line2',
          title: 'Вторая строка описания',
          type: 'string',
        },
      ],
    },
    {
      name: 'button',
      title: 'Кнопка',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Текст кнопки',
          type: 'string',
        },
        {
          name: 'url',
          title: 'URL кнопки',
          type: 'string',
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
