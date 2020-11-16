import { Component } from '@angular/core';
import { BackendcommService } from './backendcomm.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-app';

  constructor(private backendcommService: BackendcommService){

    this.backendcommService.getUsers().subscribe((data) => {
      console.log(data);    
    })
    this.backendcommService.addUser("test").subscribe((data) => {
      console.log(data);    
    })
    this.backendcommService.addUser("test 2");
    this.backendcommService.addUser("test 3");
    this.backendcommService.deleteUser(2).subscribe((data) => {
      console.log(data);    
    })
  }
}
