import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './context/theme';

import * as Sentry from '@sentry/react';

Sentry.init({
	dsn: 'https://f6687d4ef5e147ffa7c94681401ed141@o4505472419364864.ingest.us.sentry.io/4505472426442752',
	sendDefaultPii: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
