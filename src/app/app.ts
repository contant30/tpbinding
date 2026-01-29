import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navmenu } from './site/shared/navmenu/navmenu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navmenu,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tpbinding');
}
