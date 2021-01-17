import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendcommService } from '../backendcomm.service';
import { Location } from '@angular/common';

import { User } from '../user';
import { Note } from '../note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  detailNote: Note[];
  categories: string[];
  user: User;

  constructor(
    private route: ActivatedRoute,
    private backendcommService: BackendcommService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.findUser(+this.route.snapshot.paramMap.get('noteid'));
    this.categories = this.backendcommService.categorie;
  }

  findUser = (id: number) => {
    this.backendcommService.getUserByNoteId(id).subscribe((data: User[]) => {
      console.log(data);
      this.user = data[0];
      this.getNote();
    });
  }
  getNote = () => {
    let id = +this.route.snapshot.paramMap.get('noteid');
    this.backendcommService.getDetailNote(id).subscribe((selectedNote: Note[]) => {
      console.log(selectedNote);
      this.detailNote = selectedNote;
    });
  }

  updateNote = (id: number, title: string, content: string, cat: string) => {
    this.backendcommService.changeNoteFromUser(id, title, content, cat).subscribe((result: any) => {
      let error = result.error;

      if (error) {
        console.log(`Error: ${error}`);
      }
      else {
        this.getNote();
      }
    });
  }
  goBack(): void {
    this.location.back();
  }
}
