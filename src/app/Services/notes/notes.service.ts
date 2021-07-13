import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  

  constructor(private httpService: HttpServiceService) { }

  url = environment.BaseUrl

  createNote = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/addNotes`, userData, true)
  }

  getNotes = (token: any) => {
    return this.httpService.Get(`${this.url}notes/getNotesList`, true)
  }

}
