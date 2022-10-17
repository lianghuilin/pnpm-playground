import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import Icon from '@lianghuilin/wesley-ui';
import Button from '@lianghuilin/wesley-ui';
import BarChart from '@lianghuilin/wesley-ui';

const app = createApp(App);

app.use(Icon);
app.use(Button);
app.use(BarChart);
app.mount('#app');
