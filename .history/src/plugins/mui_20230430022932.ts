import { createApp } from 'vue';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';


export function MuiPlugin(app: ReturnType<typeof createApp>) {
    app.config.globalProperties.$React = React;
    app.component('MuiButton', Button as unknown as { new (): HTMLElement });
    app.component('MuiTextField', TextField as unknown as { new (): HTMLElement });
  }
  