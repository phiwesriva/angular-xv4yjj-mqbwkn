import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './project/project.component';
import { PreviousComponent } from './previous/previous.component';
import { SocialComponent } from './social/social.component';
import { FooterComponent } from './footer/footer.component';
import { TandcComponent } from './tandc/tandc.component';
import { PrivpolComponent } from './privpol/privpol.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    ProjectComponent,
    PreviousComponent,
    SocialComponent,
    FooterComponent,
    TandcComponent,
    PrivpolComponent,
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/