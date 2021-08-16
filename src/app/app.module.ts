import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { QueryComponent } from './pages/query/query.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { QueryTableComponent } from './components/query-table/query-table.component';
import { QueryFormComponent } from './components/query-form/query-form.component';
import { QuotaFormComponent } from './components/quota-form/quota-form.component';
import { QuotaResultComponent } from './components/quota-result/quota-result.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QueryComponent,
    HomeComponent,
    QueryTableComponent,
    QueryFormComponent,
    QuotaFormComponent,
    QuotaResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
