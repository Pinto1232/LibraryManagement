import { createApp } from 'vue';
import App from '../src/App.vue';
import { MuiPlugin } from './plugins/mui';

const app = createApp(App);
MuiPlugin(app);
app.mount('#app');
