import { AdminPostsIndexComponent } from './posts/admin-posts-index/admin-posts-index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
 
export const ADMIN_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'posts', component: AdminPostsIndexComponent }
];