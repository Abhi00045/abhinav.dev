import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
// import { MainPage } from './components/main-page/main-page';
import { HomePage } from './components/home-page/home-page';

@Component({
  selector: 'app-root',
  imports: [Navbar, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
