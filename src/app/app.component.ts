import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubViewerComponent } from './components/github-viewer/github-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GithubViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'github-start-view';
}
