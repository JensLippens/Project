import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'users', component: UsersComponent },
  { path: 'users/:name', component: UserDetailComponent },
  { path: 'users/notes/:noteid', component: NoteDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }