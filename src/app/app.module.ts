import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTable, MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { StopTimerComponent } from './stop-timer/stop-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    StopTimerComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  entryComponents: [StopTimerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
