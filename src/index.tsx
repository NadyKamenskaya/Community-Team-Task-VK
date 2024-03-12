import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import '@vkontakte/vkui/dist/vkui.css';

import { ConfigProvider } from '@vkontakte/vkui/dist/components/ConfigProvider/ConfigProvider';
import { AdaptivityProvider } from '@vkontakte/vkui/dist/components/AdaptivityProvider/AdaptivityProvider';
import { AppRoot } from '@vkontakte/vkui/dist/components/AppRoot/AppRoot';

import { store } from './slices/index';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
