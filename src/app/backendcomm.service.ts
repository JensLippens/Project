import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './user';

import { Note } from './note';

@Injectable({
  providedIn: 'root'
})

export class BackendcommService {

  constructor(private http: HttpClient) { }

  // Methods voor Users

  categorie: string[] = ["prive", "werk", "dringend", "hobby"];

  getUsers = () => {
    return this.http.get('https://exciting-imaginary-hat.glitch.me/users');
  }
  getUser = (name: string) => {
    return this.http.get(`https://exciting-imaginary-hat.glitch.me/user/${name}`);
  }
  getUserByNoteId = (id: number) => {
    return this.http.get(`https://exciting-imaginary-hat.glitch.me/userbynote/${id}`)
  }
  addUser = (newUser: string) => {
    let data = {'name': newUser};
    return this.http.post('https://exciting-imaginary-hat.glitch.me/users', data);
  }
  deleteUser = (id: number) => {
    return this.http.delete(`https://exciting-imaginary-hat.glitch.me/users/${id}`);
  }

  // Methods voor Notes

  getAllNotes = () => {
    return this.http.get('https://exciting-imaginary-hat.glitch.me/notes');
  }
  getDetailNote = (id: number) => {
    return this.http.get(`https://exciting-imaginary-hat.glitch.me/detailnote/${id}`);
  }
  getNotesFromUser = (name: string) =>{
    return this.http.get(`https://exciting-imaginary-hat.glitch.me/users/notes/${name}`);
  }
  addNoteToUser = (name: string, newTitle: string, newContent: string, newCat: string) =>{
    let data = {'name': name, 'title': newTitle, 'content': newContent, 'cat': newCat};
    return this.http.post(`https://exciting-imaginary-hat.glitch.me/users/notes`, data);
  }
  searchNotesContent = (zoekDomein: string, zoekTerm: string) => {
    if (!zoekTerm) { zoekTerm = "%"; }
    return this.http.get(`https://exciting-imaginary-hat.glitch.me/contentsearch?domein=${zoekDomein}&term=${zoekTerm}`);
  }

  changeNoteFromUser = (id: number, updateTitle: string, updateContent: string, updateCat: string) => {
    let data = {'title': updateTitle, 'content': updateContent, 'cat': updateCat};
    return this.http.patch(`https://exciting-imaginary-hat.glitch.me/users/notes/${id}`, data);
  }

  deleteNoteFromUser = (id: number) => {
    return this.http.delete(`https://exciting-imaginary-hat.glitch.me/users/notes/${id}`);
  }   
}
