import { configure } from '@storybook/vue';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import '../assets/scss/app.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

// automatically import all files ending in *.stories.js
configure(require.context('../components', true, /\.stories\.js$/), module);
