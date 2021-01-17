import { Component, Input, OnInit } from '@angular/core';
import { BackendcommService } from '../backendcomm.service';

import { User } from '../user';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() user?: User;
  @Input() showButtons: boolean;
  @Input() notes: Note[];
  @Input() showUser: boolean;

  constructor(private backendcommService: BackendcommService) { }

  ngOnInit(): void {
    //this.getUserNotes(this.user.name);
  }

  getUserNotes = (name: string) => {
    this.backendcommService.getNotesFromUser(name).subscribe((data: Note[]) => {
      console.log(data);
      this.notes = data;
    });
  }
  deleteNote = (id: number) => {
    this.backendcommService.deleteNoteFromUser(id).subscribe((result: any) => {
      console.log(result);
      this.getUserNotes(this.user.name);
    });
  };
} 
