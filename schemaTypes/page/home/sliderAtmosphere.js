export default {
  name: 'sliderAtmosphere',
  title: 'Главная | Слайдер Атмосфера',
  type: 'document',
  fields: [
    {
      name: 'slides',
      title: 'Слайды',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Альт-текст',
              validation: (Rule) => Rule.required().max(100),
            },
          ],
        },
      ],
    },
  ],
}
