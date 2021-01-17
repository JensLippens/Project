import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

import { BackendcommService } from '../backendcomm.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: User[];

  constructor(private backendcommService: BackendcommService) {
    this.backendcommService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this.users = data;
    });
  }

  ngOnInit(): void {
  }

  add = (newUser: string) => {
    this.backendcommService.addUser(newUser).subscribe((result: any) => {
      let error = result.error;

      if (error) {
        console.log(`Error: ${error}`);
      }
      else {
        this.backendcommService.getUsers().subscribe((data: User[]) => {
          this.users = data;
        });
      }
    });
  };

  delete = (id: number) => {
    this.backendcommService.deleteUser(id).subscribe((result: any) => {
      console.log(result);
      this.backendcommService.getUsers().subscribe((data: User[]) => {
        this.users = data;
      });
    });
  };
}

