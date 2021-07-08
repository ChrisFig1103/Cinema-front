import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProximosEstrenosCrudComponent } from './components/proximos-estrenos-crud/proximos-estrenos-crud.component';
import { MenuCrudComponent } from './components/menu-crud/menu-crud.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProximosEstrenosComponent } from './components/proximos-estrenos/proximos-estrenos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { BillboardCrudComponent } from './components/billboard-crud/billboard-crud.component';
import { ComingSoonCrudComponent } from './components/coming-soon-crud/coming-soon-crud.component';
import { EmployeeCrudComponent } from './components/employee-crud/employee-crud.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { PaginatePipe } from './pipes/paginate.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProximosEstrenosCrudComponent,
    MenuCrudComponent,
    MenuComponent,
    ProximosEstrenosComponent,
    ContactoComponent,
    BillboardCrudComponent,
    ComingSoonCrudComponent,
    EmployeeCrudComponent,
    BillboardComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
