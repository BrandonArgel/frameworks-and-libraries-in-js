import { useState } from "react";
import styled from "styled-components";
import SubTitle from "./SubTitle";
import Button from "./Button";

export default function Form({ movie, updateTheme }) {
	const [quantity, setQuantity] = useState(0);

	return (
		<StyledForm onMouseEnter={() => updateTheme()}>
			<StyledImg src={movie.img} alt={movie.title} />
			<div>
				<SubTitle>{movie.title}</SubTitle>
				<Button
					type="button"
					onClick={() => {
						setQuantity(quantity - 1);
					}}
					disabled={quantity <= 0}
				>
					-
				</Button>
				{quantity}
				<Button
					type="button"
					onClick={() => {
						setQuantity(quantity + 1);
					}}
					disabled={quantity >= movie.ticketsAvailable}
				>
					+
				</Button>
			</div>
		</StyledForm>
	);
}

const StyledForm = styled.form`
	background-color: ${(props) => props.theme.bg};
	border-radius: 20px;
	box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
	color: ${(props) => props.theme.color};
	display: grid;
	font-size: clamp(1.5rem, 2vw, 2.5rem);
	grid-template-columns: 40% 60%;
	grid-gap: 10px;
	margin: 20px auto;
	max-width: 800px;
	overflow: hidden;
	place-items: center center;
	transition: all 0.1s ease-in-out;
`;

const StyledImg = styled.img`
	object-fit: cover;
	width: 100%;
`;
