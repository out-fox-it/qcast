import React from 'react'
import { IconName, library } from '@fortawesome/fontawesome-svg-core'

import {
	fab,
	faFacebook,
	faInstagram,
	faLinkedin,
	faSpotify,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import { StyledFooter, Wrapper, Icon } from './styled'

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
		<StyledFooter>
			<Wrapper>
				{Object.keys(icons).map((icon) => (
					<Icon key={icon} icon={['fab', icon as IconName]} />
				))}
			</Wrapper>
		</StyledFooter>
	)
}

export default Footer
