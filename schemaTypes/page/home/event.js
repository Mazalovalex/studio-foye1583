export default {
  name: 'event',
  title: 'Главная | Мероприятия',
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
    {
      name: 'datetime',
      title: 'Дата и время события (объединенные)',
      type: 'datetime',
      hidden: true, // скрываем в админке, если не нужно вручную править
    },
  ],
}
