import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroModuleModule } from './ng-zorro-module/ng-zorro-module.module';



import { RegistrarComponent } from './componentes/usuario/registrar/registrar.component';
import { ConfirmarCuentaComponent } from './componentes/usuario/confirmar-cuenta/confirmar-cuenta.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RecuperarContrasenaComponent } from './componentes/usuario/recuperar-contrasena/recuperar-contrasena.component';
import { NuevaContrasenaComponent } from './componentes/usuario/nueva-contrasena/nueva-contrasena.component';
import { PerfilComponent } from './componentes/usuario/perfil/perfil.component';
import { ActualizarPerfilComponent } from './componentes/usuario/actualizar-perfil/actualizar-perfil.component';
import { ActualizarPasswordComponent } from './componentes/usuario/actualizar-password/actualizar-password.component';
import { LavaderoComponent } from './componentes/lavadero/lavadero.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { RegistrarLavaderoComponent } from './componentes/admin/registrar-lavadero/registrar-lavadero.component';
import { FilterBasicComponent } from './componentes/usuario/catalogue/filter-basic/filter-basic.component';
import { FilterCompleteComponent } from './componentes/usuario/catalogue/filter-complete/filter-complete.component';
import { PreviewCarwashComponent } from './componentes/usuario/catalogue/preview-carwash/preview-carwash.component';
import { CatalogueComponent } from './componentes/views/catalogue/catalogue.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    ConfirmarCuentaComponent,
    LoginComponent,
    RecuperarContrasenaComponent,
    NuevaContrasenaComponent,
    PerfilComponent,
    ActualizarPerfilComponent,
    ActualizarPasswordComponent,
    LavaderoComponent,
    ImagenesComponent,
    RegistrarLavaderoComponent,
    FilterBasicComponent,
    FilterCompleteComponent,
    PreviewCarwashComponent,
    CatalogueComponent,
    UserLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
