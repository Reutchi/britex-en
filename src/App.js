import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './views/Home'
import { Skills } from './views/Skills'
import Footer from './components/Footer'

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/skills' element={<Skills />} />
				{/* <Route path="*" element={<NoPage />} /> */}
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
