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
import RequireAuth from './pages/requireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateProduct from './pages/admin/products/CreateProduct';
import ProductDetails from './pages/productDetail/ProductDetails';

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
					<Route path='/about' element={<About />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route path='/createProduct' element={<CreateProduct />} />
					<Route path='/products' element={<Products />} />
					<Route path='/productDetail/:id' element={<ProductDetails />} />

					<Route path='*' element={<NotFound />} />
				</Routes>
				<ToastContainer></ToastContainer>
			</Router>
		</div>
	);
}

export default App;
