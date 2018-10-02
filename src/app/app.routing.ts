import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './shell/core/core.component';
import { ResolverApi } from './shell/core/resolverApi';
import { FormResolver } from './shell/form-shell/form.resolver';
import { FormShellComponent } from './shell/form-shell/form-shell.component';
import { environment } from '../environments/environment';
import { Member } from './models/member';
import {routesCalculator} from "./routesFunction"

//ToDo: Guard CanActivateChild
const member = {
  endpoint: "members",
    listType: "table",
    class: Member,
    idName: "_id"
}
console.log(routesCalculator([member]))
const appRoutes: Routes = routesCalculator([member])

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ResolverApi,
    FormResolver
  ]
})
export class AppRoutingModule { }
