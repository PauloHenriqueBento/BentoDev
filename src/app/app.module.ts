import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseAnimationComponent } from './components/template/mouse-animation/mouse-animation.component';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseAnimationComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
