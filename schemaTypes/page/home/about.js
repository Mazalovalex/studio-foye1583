export default {
  name: 'aboutSection',
  title: 'Блок «О нас»',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Цитата',
      type: 'object',
      fields: [
        {name: 'text', title: 'Текст цитаты', type: 'string'},
        {name: 'author', title: 'Автор', type: 'string'},
      ],
    },
    {
      name: 'paragraphs',
      title: 'Абзацы',
      type: 'array',
      of: [{type: 'text'}],
      validation: (Rule) => Rule.max(3),
    },
    {
      name: 'links',
      title: 'Ссылки (меню)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Текст ссылки', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'О нас / Блок фойе',
      }
    },
  },
}
