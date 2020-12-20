import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

import { AdminComponent } from './admin/admin.component';
import { ADMIN_ROUTES } from './admin/admin.routes';
import { PublicComponent } from './public/public.component';
import { PUBLIC_ROUTES } from './public/public.routes';

const routes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
    { path: 'admin', component: AdminComponent, children: ADMIN_ROUTES },
  	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
