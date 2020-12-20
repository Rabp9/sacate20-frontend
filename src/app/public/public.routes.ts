import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';
 
export const PUBLIC_ROUTES: Routes = [
    { path: 'posts', component: PostsComponent }
];