import { css } from "@emotion/css";

const Form = css`
	background-color: #333333;
	border-radius: 20px;
	color: #ffffff;
	display: grid;
	font-size: clamp(1.5rem, 2vw, 2.5rem);
	grid-template-columns: 40% 60%;
	grid-gap: 10px;
	margin: 20px auto;
	max-width: 800px;
	overflow: hidden;
	place-items: center center;
`;

export default Form;
