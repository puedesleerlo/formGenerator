import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './shell/core/core.component';
import { ResolverApi } from './shell/core/resolverApi';
import { FormResolver } from './shell/form-shell/form.resolver';
import { FormShellComponent } from './shell/form-shell/form-shell.component';
import { environment } from '../environments/environment';
import { Member } from './models/member';

//ToDo: Guard CanActivateChild

const appRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
    resolve: {
      items: ResolverApi
    },
    data: {
      api: environment.api + "members",
      listType: "table",
      class: Member
    },
  }
];

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
