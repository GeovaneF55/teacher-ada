import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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

import { ItensService } from '../providers/itens-service/itens-service';
import { EncomendasService } from '../providers/encomendas-service/encomendas-service';

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
    HttpModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItensService,
    EncomendasService
  ]
})
export class AppModule {}
