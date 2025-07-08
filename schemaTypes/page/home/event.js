export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название события',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Дата события',
      type: 'date',
    },
    {
      name: 'time',
      title: 'Время события',
      type: 'string',
      description: 'Например, "16:00"',
    },
    {
      name: 'link',
      title: 'Ссылка на подробнее',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
