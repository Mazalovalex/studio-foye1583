export default {
  name: 'button',
  title: 'Button',
  type: 'object', // Объект, который можно вставлять внутрь других схем (например, в меню или хедер)
  fields: [
    {
      name: 'title',
      title: 'Button Text',
      type: 'string',
      description: 'Текст, который будет отображаться на кнопке',
      validation: (Rule) => Rule.required().min(1).max(30),
    },
    {
      name: 'url',
      title: 'Button URL',
      type: 'url',
      description: 'Ссылка, куда ведёт кнопка',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
}
