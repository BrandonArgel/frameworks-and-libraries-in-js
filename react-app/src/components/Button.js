import styled from "styled-components";

const Button = styled.button`
	background-color: ${(props) => props.theme.bg};
	border: none;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
	color: ${(props) => props.theme.color};
	font-size: clamp(1.5rem, 4vw, 2rem);
	margin: 0 10px;
	padding: 10px 20px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.9) translateY(2px);
	}

	&[disabled] {
		opacity: 0.5;
		pointer-events: none;
	}
`;

export default Button;
