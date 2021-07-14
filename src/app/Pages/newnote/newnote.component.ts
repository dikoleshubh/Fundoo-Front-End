import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/Services/notes/notes.service';
//import { NoteServiceService } from 'src/app/Services/notes/notes.service';
import { UserserviceService } from 'src/app/Services/user/user.service';

import { ClarityIcons,trashIcon,bellIcon,userIcon,colorPaletteIcon,imageGalleryIcon,archiveIcon,ellipsisVerticalIcon } from '@cds/core/icon';

ClarityIcons.addIcons(trashIcon);
ClarityIcons.addIcons(bellIcon);
ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(colorPaletteIcon);
ClarityIcons.addIcons(imageGalleryIcon);
ClarityIcons.addIcons(archiveIcon);
ClarityIcons.addIcons(ellipsisVerticalIcon);

export interface NoteItem {
  id: number;
  noteText: string;
  noteTitle:string;
  noteColor: string;
}

@Component({
  selector: 'app-newnote',
  templateUrl: './newnote.component.html',
  styleUrls: ['./newnote.component.scss']
})
export class NewnoteComponent    {
  panelOpenState = false;
  public notesForm: FormGroup;

  public notesList: NoteItem[] = [];
  public editData!: NoteItem;

  constructor(private fb: FormBuilder) {
    this.notesForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: [''],
      noteText: ['', [Validators.required]],
      noteTitle: ['', [Validators.required]],
      
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
      noteTitle: editNoteData.noteTitle,
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