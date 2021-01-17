import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { UserSearchComponent } from './user-search/user-search.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotesComponent } from './notes/notes.component';
import { NoteSearchComponent } from './note-search/note-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNoteComponent } from './add-note/add-note.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UserSearchComponent,
    NoteDetailComponent,
    NotesComponent,
    NoteSearchComponent,
    DashboardComponent,
    AddNoteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
