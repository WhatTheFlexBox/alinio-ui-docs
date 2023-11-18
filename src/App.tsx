import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainDocs from './docs/MainDocs';
import './app.css';
import { Link } from 'alinio-ui';
import IconArrow from './assets/media/custom-icons/IconArrow';

function App() {
	return (
		<Router>
			{' '}
			<link rel='icon' type='image/svg+xml' href='/alinio.svg' />
			<div>
				<nav className='main-nav'>
					<Link href='https://github.com/WhatTheFlexBox/alinio-ui' color='light' target='_blank'>
						Github
					</Link>
					<Link to='/docs' color='light'>
						docs
					</Link>
					<Link
						href='https://www.npmjs.com/package/alinio-ui'
						target='_blank'
						color='primary'
						linkStyle='button'
						icon={<IconArrow />}>
						NPM
					</Link>
				</nav>
				<Routes>
					<Route path='/docs' element={<MainDocs />} index /> {/* Add the index property */}
					{/* Define other Routes here if you have more pages */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
