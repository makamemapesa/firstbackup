import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing } from './pages/landing/landing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'smart_fire_detection';
}
