import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { IncludesComponent } from './includes/includes.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ShellModule } from '../shell/shell.module';
import { AdminRoutingModule } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ShellModule,
    // AdminRoutingModule
  ],
  declarations: [PagesComponent, IncludesComponent]
})
export class AdminModule { }
