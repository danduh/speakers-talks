import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule,
  MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, MatTableModule,
  MatFormFieldModule, MatInputModule, MatDialogModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MATERIAL = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule,
  MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule,
  MatTableModule, MatDialogModule
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
