import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularTreeTableModule } from 'angular-tree-table';
import { BasicComponent } from './components/basic/basic.component';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { ServerSideComponent } from './components/server-side/server-side.component';
import { SelectComponent } from './components/select/select.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { ExpandableHeaderLessComponent } from './components/expandable-header-less/expandable-header-less.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpandableFixedVisibilityComponent } from './components/expandable-fixed-visibility/expandable-fixed-visibility.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ExpandableComponent,
    ServerSideComponent,
    SelectComponent,
    InputsComponent,
    ExpandableHeaderLessComponent,
    ExpandableFixedVisibilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularTreeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
