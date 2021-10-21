import { useState } from "react";
import Form from "./components/Form";
import Title from "./components/Title";
import Theme from "./Theme";

const movies = [
	{
		title: "Alita: Battle Angel",
		ticketsAvailable: 10,
		quantity: 0,
		img: "https://lh3.googleusercontent.com/proxy/-cTzmMPB5N5OJDCd60zdbNG5_DVhFLbZ0ZtheACFx0kxZ7s-pdM3yalhCwgvaGrhNBIiWIoLOtODfzPlZqzTTgBcYDC34OIZjSU4CzySwuKdEa5fJM8xFik",
		theme: "alita",
	},
	{
		title: "Inside Out",
		ticketsAvailable: 5,
		quantity: 0,
		img: "https://lumiere-a.akamaihd.net/v1/images/hero_mobile_insideout_oscarwinner_aja_a345b279.jpeg?region=0,0,480,750",
		theme: "insideOut",
	},
	{
		title: "Avengers: End Game",
		ticketsAvailable: 3,
		quantity: 0,
		img: "https://64.media.tumblr.com/03b8c85b958fe6323177f98b3f2e2286/tumblr_pqxkehniVf1s0nfmz_540.jpg",
		theme: "endgame",
	},
];

function App() {
	const [theme, setTheme] = useState("insideOut");

	return (
		<Theme theme={theme}>
			<Title>Películas</Title>
			{movies.map((movie, i) => (
				<Form movie={movie} updateTheme={() => setTheme(movie.theme)} key={i} />
			))}
		</Theme>
	);
}

export default App;
