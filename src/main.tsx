import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './docs/layout.css';
import './docs/base.css';
import './docs/forms.css';
import './docs/helpers.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
