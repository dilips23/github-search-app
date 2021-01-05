import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { UserDetailComponent } from './history/user-detail/user-detail.component';
import { UserListComponent } from './history/user-list/user-list.component';

import { DashboardComponent } from './home/dashboard.component';
import { ProfileDetailComponent } from './search/profile-detail/profile-detail.component';
import { ProfileListComponent } from './search/profile-list/profile-list.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [ 
  { path: '', component: DashboardComponent},
  { path: 'search', component: SearchComponent, 
  children: [
    { path: 'list', component: ProfileListComponent},
    { path: 'detail/:profileName', component: ProfileDetailComponent}
  ]},
  { path: 'history', component: HistoryComponent, children: [
    { path: 'list', component: UserListComponent},
    { path: 'detail', component: UserDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
