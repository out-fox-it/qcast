import React from 'react'
import FeaturedImg from '../FeaturedImg/FeaturedImg'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css'

const App: React.FC = () => (
	<article className="gridContainer">
		<Header />
		<FeaturedImg />
		<Footer />
	</article>
)

export default App
