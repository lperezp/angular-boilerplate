import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';

const CORE_COMPONENTS = [AuthComponent, AdminComponent, HeaderComponent, FooterComponent, SidebarComponent];
const CORE_MODULES = [CommonModule, SharedModule];

@NgModule({
  declarations: [...CORE_COMPONENTS, FooterComponent, SidebarComponent, HeaderComponent, AuthComponent],
  imports: [...CORE_MODULES],
})
export class CoreModule {}
