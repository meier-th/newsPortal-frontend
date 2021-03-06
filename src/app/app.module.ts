import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material'
import { MatToolbarModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http'
import { routingComponents } from './app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { WriteComponent } from './write/write.component';
import { DraftsComponent } from './drafts/drafts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    routingComponents,
    WriteComponent,
    DraftsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgxEditorModule,
    AngularFontAwesomeModule,
    MatSelectModule,
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
