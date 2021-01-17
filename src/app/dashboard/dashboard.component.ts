import { Component, OnInit } from '@angular/core';
import { BackendcommService } from '../backendcomm.service';

import { User } from '../user';
import { Note } from '../note';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: User[];
  notes: Note[];
  searchNotes: Note[];
  categories: string[];

  constructor(private backendcommService: BackendcommService) { }

  ngOnInit(): void {
    this.categories = this.backendcommService.categorie;
    this.getUsers();
    this.getNotes();
  }

  getUsers = () => {
    this.backendcommService.getUsers().subscribe((data: User[]) => {
      console.log(data); 
      this.users = data;
    });
  }

  getNotes = () => {
    this.backendcommService.getAllNotes().subscribe((data: Note[]) => {
      console.log(data); 
      this.notes = data;
    });
  }

  search(zoekDomein: string, zoekTerm: string) {
    this.backendcommService.searchNotesContent(zoekDomein, zoekTerm).subscribe((searchdata: Note[]) => {
      console.log(searchdata);
      this.searchNotes = searchdata;
    })
  }
}
