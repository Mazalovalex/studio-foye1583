export default {
  name: 'menuItem',
  title: 'Header | Пункты меню',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Ссылка, куда ведет пункт меню',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Порядок отображения в меню',
    },
  ],
}
