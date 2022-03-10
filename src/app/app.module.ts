import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../environments/environment';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from 'ngx-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: () => environment.apiUrl },
    { provide: 'ATOKEN', useFactory: () => environment.apiToken },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
