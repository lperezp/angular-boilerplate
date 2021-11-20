import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, enableProdMode, ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';

import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

Sentry.init({
  dsn: environment.SENTRY_DNS,
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: environment.TRACKING_ORIGIN,
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler for finer control
  tracesSampleRate: 1.0,
});

const PROVIDERS = [
  {
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler({
      showDialog: true,
    }),
  },
  {
    provide: Sentry.TraceService,
    deps: [Router],
    useValue: undefined,
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {},
    deps: [Sentry.TraceService],
    multi: true,
  },
];
const COMPONENTS = [AppComponent];
const IMPORTS = [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, CoreModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}

enableProdMode();
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then((success) => console.log(`success`))
//   .catch((err) => console.error(err));
