import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SpyAreaForDirective } from './spy-area-for.directive';
import { SpyScrollContainerDirective } from './spy-scroll-container.directive';
import { SpyAnchorDirective } from './spy-anchor.directive';
import { CollapseModule } from 'ngx-bootstrap/collapse';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpyAreaForDirective,
    SpyScrollContainerDirective,
    SpyAnchorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
