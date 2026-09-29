import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Navbar } from './components/navbar/navbar';
// import { MainPage } from './components/main-page/main-page';
import { HomePage } from './components/home-page/home-page';
import { About } from './components/about/about';
import { History } from './components/history/history';


@Component({
  selector: 'app-root',
  imports: [HomePage, About, History],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
