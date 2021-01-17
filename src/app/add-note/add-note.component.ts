import { Component, Input, OnInit } from '@angular/core';
import { BackendcommService } from '../backendcomm.service';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { Note } from '../note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  @Input() user: User;
  categories: string[];

  constructor(
    private backendcommService: BackendcommService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.categories = this.backendcommService.categorie;
  }

  addnote = (name: string, title: string, content: string, cat: string) => {
    this.backendcommService.addNoteToUser(name, title, content, cat).subscribe((result: any) => {
      let error = result.error;
      if (error) {
        console.log(`Error: ${error}`);
      }
    });
  }
}
