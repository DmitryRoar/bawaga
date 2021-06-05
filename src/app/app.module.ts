import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component'

import {AppComponent} from './app.component'
import {OrdersPageComponent} from './orders-page/orders-page.component'
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './shared/components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    OrdersPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
