import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './modules/weather/weather.component';
import { ContatoComponent } from './components/contato/contato.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

const ROUTES: Routes = [
    { path: '', component: WeatherComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'contato', component: ContatoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
