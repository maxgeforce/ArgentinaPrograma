import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

// Definimos Nuestras Rutas

const routes: Routes = [
  { path: 'Header', component: HeaderComponent },
  { path : 'Layout', component: LayoutComponent},
  { path : 'Footer', component : FooterComponent},
]

// Cargamos nuestras Rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
