import Banner from './components/Banner/Banner'
import logo from './assets/logo.png'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import ShoppingList from './components/ShoppingList/ShoppingList'
import './App.css'
import { useState } from 'react'

function App() {
	const [cart, updateCart] = useState([])

	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart}/>
			</div>
			<Footer />
		</div>
	)
}

export default App