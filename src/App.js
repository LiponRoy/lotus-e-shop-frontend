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
import AddData from './pages/AddData';
import RequireAuth from './pages/requireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateProduct from './pages/admin/products/CreateProduct';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavbarTwo />
				<Routes>
					<Route
						path='/'
						element={
							<RequireAuth>
								<Home />
							</RequireAuth>
						}
					/>
					<Route path='/products' element={<Products />} />
					<Route path='/about' element={<About />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					{/* <Route path='/addData' element={<AddData />} /> */}
					<Route path='/createProduct' element={<CreateProduct />} />
					{/* <Route path='/profile/:username' element={<Profile />} /> */}
					<Route path='*' element={<NotFound />} />
				</Routes>
				<ToastContainer></ToastContainer>
			</Router>
		</div>
	);
}

export default App;
