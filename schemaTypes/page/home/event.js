import React from 'react'

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
      hidden: true,
    },
  ],

  preview: {
    select: {
      title: 'name',
      date: 'date',
      time: 'time',
      media: 'image',
    },
    prepare(selection) {
      const {title, date, time, media} = selection
      let subtitle = ''
      if (date) {
        subtitle = `${date}`
        if (time) subtitle += ` ${time}`
      }

      // Создаем дату и время события
      const datetimeStr = date && time ? `${date}T${time}` : null
      const eventDate = datetimeStr ? new Date(datetimeStr) : null
      const now = new Date()

      // Проверяем, прошло ли событие
      const isPast = eventDate ? eventDate < now : false

      return {
        title: isPast ? ` ❌ (Прошедшее) ${title}` : title,
        subtitle,
        media,
      }
    },
  },
}
