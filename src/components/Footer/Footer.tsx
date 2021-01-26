import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'
import {
	fab,
	faFacebook,
	faInstagram,
	faLinkedin,
	faSpotify,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const icons = {
	spotify: faSpotify,
	instagram: faInstagram,
	facebook: faFacebook,
	linkedin: faLinkedin,
	twitter: faTwitter,
}

const Footer: React.FC = () => {
	library.add(fab, ...Object.values(icons))

	return (
		<footer className="footerWrapper">
			<div className="footerContent">
				{Object.keys(icons).map((icon) => (
					<FontAwesomeIcon
						key={icon}
						className="footerItem"
						icon={['fab', icon as IconName]}
					/>
				))}
			</div>
		</footer>
	)
}

export default Footer
