import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { environment } from './../../../environments/environment';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './components/login/card/card.component';
const AUTH_PAGES = [LoginComponent];
const AUTH_COMPONENTS = [];
const AUTH_ENTRY_COMPONENTS = [];

@NgModule({
  declarations: [...AUTH_PAGES, AUTH_COMPONENTS, CardComponent, LoginComponent],
  imports: [SharedModule, AuthRoutingModule],
  exports: [...AUTH_COMPONENTS],
  providers: [],
  entryComponents: [...AUTH_ENTRY_COMPONENTS],
})
export class AuthModule {}
