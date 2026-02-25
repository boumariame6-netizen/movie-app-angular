import { Component, inject, signal , OnInit } from '@angular/core';
import { MovieCard } from './components/movie-card/movie-card';
import { Footer } from "./components/footer/footer";
import {Navbar} from "./components/navbar/navbar";
import {Home} from "./pages/home/home"
@Component({
  selector: 'app-root',
  imports: [MovieCard, Footer,Navbar ,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  protected readonly title = signal('movie-app');
  
  }


