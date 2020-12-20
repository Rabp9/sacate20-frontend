import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostsService } from './services/posts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './public/navbar.component';
import { PostsComponent } from './public/posts/posts.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AdminComponent } from './admin/admin.component';
import { PublicComponent } from './public/public.component';
import { AdminPostsIndexComponent } from './admin/posts/admin-posts-index/admin-posts-index.component';
import { AdminPostsAddComponent } from './admin/posts/admin-posts-add/admin-posts-add.component';
import { AdminPostsEditComponent } from './admin/posts/admin-posts-edit/admin-posts-edit.component';
import { AdminPostsViewComponent } from './admin/posts/admin-posts-view/admin-posts-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './admin/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AdminPostsTableComponent } from './admin/posts/admin-posts-table/admin-posts-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PageNotFoundComponent,
    AdminComponent,
    PublicComponent,
    AdminPostsIndexComponent,
    AdminPostsAddComponent,
    AdminPostsEditComponent,
    AdminPostsViewComponent,
    NavComponent,
    DashboardComponent,
    AdminPostsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
