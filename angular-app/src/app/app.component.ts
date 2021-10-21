import { Component } from '@angular/core';

type Movie = {
  title: String,
  ticketsAvailable: Number,
  quantity: number
  img: String
};

type Movies = Array<Movie>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: String = 'Películas: Angular';
  movies: Movies = [
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

  addMovieQuantity(movieName: String) {
    const movieIndex = this.movies.findIndex(movie => movie.title === movieName);
    this.movies[movieIndex].quantity += 1;
  }

  removeMovieQuantity(movieName: String) {
    const movieIndex = this.movies.findIndex(movie => movie.title === movieName);
    this.movies[movieIndex].quantity -= 1;
  }
}
