export default {
  name: 'about',
  title: 'О нас',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Основной текст',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
