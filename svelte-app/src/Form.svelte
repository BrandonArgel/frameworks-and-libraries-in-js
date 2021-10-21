<script>
	import Form from "./styles";

	const movies = [
		{
			title: "Alita: Battle Angel",
			ticketsAvailable: 10,
			quantity: 0,
			img: "https://lh3.googleusercontent.com/proxy/-cTzmMPB5N5OJDCd60zdbNG5_DVhFLbZ0ZtheACFx0kxZ7s-pdM3yalhCwgvaGrhNBIiWIoLOtODfzPlZqzTTgBcYDC34OIZjSU4CzySwuKdEa5fJM8xFik",
		},
		{
			title: "Inside Out",
			ticketsAvailable: 5,
			quantity: 0,
			img: "https://lumiere-a.akamaihd.net/v1/images/hero_mobile_insideout_oscarwinner_aja_a345b279.jpeg?region=0,0,480,750",
		},
		{
			title: "Avengers: End Game",
			ticketsAvailable: 3,
			quantity: 0,
			img: "https://64.media.tumblr.com/03b8c85b958fe6323177f98b3f2e2286/tumblr_pqxkehniVf1s0nfmz_540.jpg",
		},
	];
</script>

{#each movies as movie}
	<Form>
		<img src={movie.img} alt={movie.title} />
		<div>
			<h3>{movie.title}</h3>
			<button type="button" on:click={() => movie.quantity--} disabled={movie.quantity <= 0}>-</button>
			{movie.quantity}
			<button
				type="button"
				on:click={() => movie.quantity++}
				disabled={!(movie.quantity < movie.ticketsAvailable)}>+</button
			>
		</div>
	</Form>
{/each}

<style>
	form {
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
	}

	div {
		width: 100%;
		height: auto;
		text-align: center;
	}

	h3 {
		margin-bottom: 10px;
		font-size: clamp(2rem, 4vw, 3rem);
	}

	img {
		object-fit: cover;
		width: 100%;
	}

	button {
		background-color: #61ffff;
		border: none;
		color: #fff;
		font-size: clamp(1.5rem, 4vw, 2rem);
		transition: all 0.2s ease-in-out;
		padding: 10px 20px;
	}

	button:hover {
		transform: scale(1.1);
	}

	button:active {
		transform: scale(0.9) translateY(2px);
	}

	button:disabled {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
