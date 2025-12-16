import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar';
import { TopBarComponent } from './top-bar/top-bar';
import { HomeComponent } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, TopBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-angular-1');
}
