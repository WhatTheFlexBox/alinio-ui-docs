import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainDocs from './docs/MainDocs';

function App() {
	return (
		<Router>
			<div>
				<nav>
					<Link to='/docs'>Docs</Link>
				</nav>
				<Routes>
					<Route path='/docs' element={<MainDocs />} />
					{/* Define other Routes here if you have more pages */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
