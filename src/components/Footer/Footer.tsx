import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	fab,
	faFacebook,
	faInstagram,
	faLinkedin,
	faSpotify,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
	library.add(fab, faInstagram, faFacebook, faLinkedin, faTwitter, faSpotify)

	return (
		<footer className="footerWrapper">
			<div className="footerContent">
				<FontAwesomeIcon
					className="footerItem"
					icon={['fab', 'spotify']}
				/>
				<FontAwesomeIcon
					className="footerItem"
					icon={['fab', 'instagram']}
				/>
				<FontAwesomeIcon
					className="footerItem"
					icon={['fab', 'facebook']}
				/>
				<FontAwesomeIcon
					className="footerItem"
					icon={['fab', 'linkedin']}
				/>
				<FontAwesomeIcon
					className="footerItem"
					icon={['fab', 'twitter']}
				/>
			</div>
		</footer>
	)
}

export default Footer
