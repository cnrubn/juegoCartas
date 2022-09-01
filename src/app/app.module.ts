import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { VisorComponent } from './pages/visor/visor.component';
import { TableroComponent } from './pages/tablero/tablero.component';
import { CartaComponent } from './components/carta/carta.component';
import { IntroJuegoComponent } from './components/intro-juego/intro-juego.component';
import { VisorLogrosPipe } from './pipes/visor-logros.pipe';
import { VisorFasePipe } from './pipes/visor-fase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PaginaComponent,
    VisorComponent,
    TableroComponent,
    CartaComponent,
    IntroJuegoComponent,
    VisorLogrosPipe,
    VisorFasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
