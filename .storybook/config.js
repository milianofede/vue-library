import { configure } from '@storybook/vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import '../assets/scss/bootstrap.scss';

Vue.use(BootstrapVue);

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.js$/), module);
