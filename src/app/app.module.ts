import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { ProfileDetailComponent } from './search/profile-detail/profile-detail.component';
import { ProfileListComponent } from './search/profile-list/profile-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './home/dashboard.component';
import { UserListComponent } from './history/user-list/user-list.component';
import { UserDetailComponent } from './history/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HistoryComponent,
    ProfileDetailComponent,
    ProfileListComponent,
    DashboardComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
