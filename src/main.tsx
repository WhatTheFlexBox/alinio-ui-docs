import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './ui_components/styles/variables/spacialsystem.css';
import './ui_components/styles/variables/colors.css';
import './ui_components/styles/variables/typography.css';
import './ui_components/styles/variables/base.css';
import './ui_components/styles/variables/layout.css';
import './ui_components/styles/tables.css';
import './ui_components/styles/helpers.css';
import './ui_components/styles/forms.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
