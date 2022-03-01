import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeComponent } from './challenges/palindrome/palindrome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchUserByNameComponent } from './challenges/search-user-by-name/search-user-by-name.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaintBucketComponent } from './challenges/paint-bucket/paint-bucket.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeComponent,
    SearchUserByNameComponent,
    PaintBucketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
