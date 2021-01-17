import { Component, OnInit } from '@angular/core';
import { BackendcommService } from './backendcomm.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lippens-Jens-project-app';
  welcome = "Welcome to NoteShare";
  users: string[];

  constructor(private backendcommService: BackendcommService) {}

  ngOnInit() {    
    this.backendcommService.getUsers().subscribe((data: string[]) => {
      console.log(data); 
      this.users = data;
    });
  }
}

