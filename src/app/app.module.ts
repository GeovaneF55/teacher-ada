import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { EncomendasPage } from '../pages/encomendas/encomendas';
import { EncomendaPage } from '../pages/encomenda/encomenda';
import { ItensPage } from '../pages/itens/itens';
import { ItemPage } from '../pages/item/item';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConfiguracoesPage,
    EncomendasPage,
    EncomendaPage,
    ItensPage,
    ItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConfiguracoesPage,
    EncomendasPage,
    EncomendaPage,
    ItensPage,
    ItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
