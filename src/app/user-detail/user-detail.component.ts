import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Note } from '../note';

import { ActivatedRoute } from '@angular/router';

import { BackendcommService } from '../backendcomm.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  notes: Note[];
  categories: string[]; 

  constructor(
    private route: ActivatedRoute,
    private backendcommService: BackendcommService,
  ) { }

  ngOnInit(): void {
    this.categories = this.backendcommService.categorie;
    this.getUser();
  }
  
  getUser = () => {
    let name = this.route.snapshot.paramMap.get('name');
    this.backendcommService.getUser(name).subscribe((selectedUser: User[]) => {
      console.log(selectedUser);
      this.user = selectedUser[0];
      this.getUserNotes(this.user.name);
    });
  }
  getUserNotes = (name: string) => {
    this.backendcommService.getNotesFromUser(name).subscribe((data: Note[]) => {
      console.log(data); 
      this.notes = data;
    });
  }
  addnote = (name: string, title:string, content: string, cat: string) => {
    this.backendcommService.addNoteToUser(name, title, content, cat).subscribe((result: any) => {
      let error = result.error;
      if (error) {
        console.log(`Error: ${error}`);
      } else{
        this.getUserNotes(name);
      }
    });
  }
}
