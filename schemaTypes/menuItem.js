export default {
  name: 'menuItem',
  type: 'document',
  title: 'Menu Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'url',
      type: 'string',
      title: 'URL',
      description: 'Ссылка или путь для меню',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Порядок отображения',
    },
  ],
}
