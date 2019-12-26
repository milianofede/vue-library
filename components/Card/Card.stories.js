import { storiesOf } from '@storybook/vue'
import Card from './Card'

storiesOf('Card', module)
  .add('normal', () => ({
    components: { Card },
    template:
    `
      <Card
        :title="title"
      />
    `,
    data: () => ({
      title: 'Componente Vue'
    })
  }))