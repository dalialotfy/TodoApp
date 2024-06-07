


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Import Tailwind CSS
import ContextManagerProvider from './Store/Store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(

<ContextManagerProvider>
<App />

</ContextManagerProvider>
);
