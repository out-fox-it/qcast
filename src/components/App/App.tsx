import React from 'react'
import FeaturedImg from '../FeaturedImg/FeaturedImg'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { StyledArticle } from './styled'

const App: React.FC = () => (
	<StyledArticle>
		<Header />
		<FeaturedImg />
		<Footer />
	</StyledArticle>
)

export default App
