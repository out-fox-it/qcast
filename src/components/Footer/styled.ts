import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
	grid-row: 3;
	grid-column: 2;
	margin: 1em;
`
export const Wrapper = styled.div`
	font-size: x-large;
	grid-column: 2;
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
`

export const Icon = styled(FontAwesomeIcon)`
	margin: 1em;
`
