import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ShellModule } from './shell/shell.module';
import { AppRoutingModule } from './app.routing';
import { DataService } from './data.service';
import { HttpErrorHandler } from './shared/http-error-handler.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'quorum' }),
    SharedModule,
    ShellModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
