import { storiesOf } from '@storybook/vue'
import Svgicon from './Svgicon'

storiesOf('Svgicon', module)
  .add('heart', () => ({
    components: { Svgicon },
    template:
    `
    <div>
        <svgicon class="heart"
            color="#F12471 #FFF"
            height="32"
            icon="heart_active"
            width="32"/>
        <svgicon :fill="true"
            color="#000 #FFF"
            height="32"
            icon="heart"
            width="32"/>      
    </div>                
    `
  }))