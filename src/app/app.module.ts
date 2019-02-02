import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
