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
          name: 'image',
          title: 'Изображение',
          options: {hotspot: true},
        },
      ],
    },
  ],
}
