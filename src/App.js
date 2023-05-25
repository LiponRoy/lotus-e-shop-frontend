import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import NavbarTwo from './components/Navbar/NavbarTwo';
import RequireAuth from './pages/requireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateProduct from './pages/admin/products/CreateProduct';
import ProductDetails from './pages/productDetail/ProductDetails';

import NewResetPassword from './pages/forgetPassword/NewResetPassword';
import SentEmailForgetPassword from './pages/forgetPassword/SentEmailForgetPassword';
import CartDetaials from './pages/cart/CartDetaials';
import Checkout from './pages/checkout/Checkout';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavbarTwo />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route path='/createProduct' element={<CreateProduct />} />
					<Route path='/productDetail/:id' element={<ProductDetails />} />

					<Route path='/sentEmail_forgotpassword' element={<SentEmailForgetPassword />} />
					<Route path='/passwordreset/:resetToken' element={<NewResetPassword />} />

					{/* // cart all */}
					<Route path='/cartDetaials' element={<CartDetaials />} />
					<Route
						path='/payment'
						element={
							<RequireAuth>
								<Checkout />
							</RequireAuth>
						}
					/>

					<Route path='*' element={<NotFound />} />
				</Routes>
				<ToastContainer></ToastContainer>
			</Router>
		</div>
	);
}

export default App;
