import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/listItem.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { ListService } from './list/list.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule' },
      { path: 'list', component: ListComponent },
    ]),
    TransferHttpCacheModule,
    HttpClientModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
