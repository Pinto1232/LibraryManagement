import { App } from 'vue';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default {
  install(app: App) {
    app.component('MuiButton', Button);
    app.component('MuiTextField', TextField);
  },
};
