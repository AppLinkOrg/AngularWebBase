import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule }    from '@angular/common/http';
import { InstApi } from 'src/providers/inst.api';
import { HomeComponent } from './home/home.component';
import { ShibieComponent } from './shibie/shibie.component';
import { DetailComponent } from './detail/detail.component';
import { MoredetailComponent } from './moredetail/moredetail.component';
import { FileUploadModule } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HomeComponent,
    ShibieComponent,
    DetailComponent,
    MoredetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [InstApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
