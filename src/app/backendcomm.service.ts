import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendcommService {

  constructor(private http: HttpClient) { }

  // Methods voor Users
  getUsers = () => {
    return this.http.get('https://exciting-imaginary-hat.glitch.me/users');
  }
  addUser = (newUser: string) => {
    return this.http.post('https://exciting-imaginary-hat.glitch.me/users', newUser);
  }
  // welke parameter gebruikt deleteUser: userID / naam / ...?
  deleteUser = (userID: number) => {
    return this.http.delete(`https://exciting-imaginary-hat.glitch.me/users/${userID}`) //... bijkomende info nodig?
  }

  // Methods voor notes

  // Welke vorm heeft de Notes tabel? vrij de kiezen? ==> ID? titel? inhoud? ...
  getNotesFromUser = (userID: number) =>{
    return this.http.get(`https://exciting-imaginary-hat.glitch.me/users/${userId}/notes`);
  }
  addNoteToUser = (userID: number, notes: string) =>{
    return this.http.post(`https://exciting-imaginary-hat.glitch.me/users/${userId}/notes`, notes);
  }

  // Hoe bestaande notitie opvragen voor change en delete? 
  changeNoteFromUser = () => {} // to do
  deleteNoteFromUser = () => {} // to do
}
