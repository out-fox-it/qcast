import styled from 'styled-components'

export const StyledHeader = styled.header`
	grid-row: 1;
	grid-column: 2;
	align-self: self-end;
	margin: 1em;
	padding-top: 1em;
`

export const Title = styled.h1`
	grid-column: 2;
	position: relative;
	font-size: 5em;
	background-color: rgba(132, 223, 254, 1);
	background-image: linear-gradient(
		180deg,
		rgba(255, 255, 255, 1) 50%,
		rgba(132, 223, 254, 1) 50%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
	margin: 1em;
	margin-block-end: auto;
	margin-block-start: auto;

	&:before {
		position: absolute;
		content: '';
		left: 0;
		top: 52%;
		right: 0;
		border: 1px solid white;
		outline: 3px solid black;
	}
`
