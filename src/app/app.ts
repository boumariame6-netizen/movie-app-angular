import { Component, inject, signal , OnInit } from '@angular/core';
import { MovieCard } from './movie-card/movie-card';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [MovieCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('movie-app');

  private http = inject(HttpClient);
  private apiKey = 'ee266460f5057694442159c23d2595cb';

  movies = signal<any[]>([]);

  ngOnInit(){
    this.fetchMovies();
  }
  fetchMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
    
    this.http.get<any>(url).subscribe((data) => {
      const formattedMovies = data.results.map((m: any) => ({
        id: m.id,
        title: m.title,
        rating: m.vote_average,
        img: 'https://image.tmdb.org/t/p/w500' + m.poster_path 
      }));
      
      this.movies.set(formattedMovies); 
    });
  }
}

