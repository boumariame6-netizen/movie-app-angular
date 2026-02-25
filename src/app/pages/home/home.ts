import { Component ,OnInit } from '@angular/core';
import {MovieCard} from '../../components/movie-card/movie-card'
import {Movie} from '../../services/movie'
@Component({
  selector: 'app-home',
  imports: [MovieCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  implements OnInit{
  moviesList: any[] = [];
  constructor(private movie: Movie) {}

  ngOnInit(): void {
    this.loadMovies();
  }

loadMovies() {
  this.movie.getPopularMovies().subscribe((data: any) => {
    this.moviesList = data.results;
    console.log(this.moviesList)
  })
}

}
