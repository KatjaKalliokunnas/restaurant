import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.data);
  }
}
