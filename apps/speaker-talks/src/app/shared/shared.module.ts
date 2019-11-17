import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const MATERIAL = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,

];


@NgModule({
  declarations: [],
  exports: [
    ...MATERIAL
  ],
  imports: [
    CommonModule,
    ...MATERIAL
  ]
})
export class SharedModule {
}
