import { Routes } from '@angular/router';
import { GithubViewerComponent } from './components/github-viewer/github-viewer.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "github-viewer",
        pathMatch: "full"
    },
    {
        path: 'github-viewer',
        component: GithubViewerComponent
    }
];
