import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/Services/notes/notes.service';
//import { NoteServiceService } from 'src/app/Services/notes/notes.service';
import { UserserviceService } from 'src/app/Services/user/user.service';


export interface NoteItem {
  id: number;
  noteText: string;
  noteColor: string;
}

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.scss']
})
export class NewnoteComponent    {
  public notesForm: FormGroup;
  public noteColorList: string[] = ['Red', 'Yellow', 'Blue ']
  public notesList: NoteItem[] = [];
  public editData!: NoteItem;

  constructor(private fb: FormBuilder) {
    this.notesForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: [''],
      noteText: ['', [Validators.required]],
      noteColor: [null, [Validators.required]]
    });
  }

  saveNote(): void {
    if(!this.notesForm.controls.id.value){
      this.notesForm.controls.id.setValue(this.notesList.length + 1);
      this.notesList.push(this.notesForm.value);
    } else {
      const noteIndex: number = this.notesList.indexOf(this.editData);
      this.notesList[noteIndex] = this.notesForm.value;
      this.editData != null;
    }
    this.notesForm.reset();
  }

  editNote(editNoteData: NoteItem): void {
    this.editData = editNoteData;
    this.notesForm.setValue({
      id: editNoteData.id,
      noteText: editNoteData.noteText,
      noteColor: editNoteData.noteColor
    });
  }

  deleteNote(deleteNoteId: number): void {
    this.notesList.filter((item, index) => {
      if(item.id === deleteNoteId) {
        this.notesList.splice(index, 1);
      }
    });
  }

}