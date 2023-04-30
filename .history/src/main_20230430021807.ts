import { createApp } from 'vue';
import App from './App.vue';
import muiPlugin from './plugins/mui';

const app = createApp(App);

app.use(muiPlugin);

app.mount('#app');
