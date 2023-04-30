import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import muiPlugin from './plugins/mui';


/* createApp(App).mount('#app')

 */
const app = createApp(App);


app.use(muiPlugin);

app.mount('#app');

