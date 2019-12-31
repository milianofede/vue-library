import { storiesOf } from '@storybook/vue'
import Card from './Card'

storiesOf('CamperCard', module)
  .add('normal', () => ({
    components: { Card },
    template:
    `
      <Card :camper="camper" :isFavorite="true"/>
    `,
    data: () => ({
        camper: {
            image: 'https://res.cloudinary.com/mycamper/image/fetch/w_390,dpr_auto,q_auto,c_fit,f_auto/https://api.mycamper.ch/api/v1/media/5b2c0cac7ecc6',
            price: 70,
            currency: '.-',
            title: 'Globescout Traveler',
            description: '80 Bewertugen',
            location: 'Zurich Zh',
            kms: '20 km',
            beds: 4,
            ocuppation: 2,
            period: 'pro nacht'
        }
    })
  }))