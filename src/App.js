import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import NavbarTwo from './components/Navbar/NavbarTwo';
import About from './pages/About';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavbarTwo></NavbarTwo>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<Products />} />
					<Route path='/about' element={<About />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					{/* <Route path='/profile/:username' element={<Profile />} /> */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
