import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import {BillboardCrudComponent} from './components/billboard-crud/billboard-crud.component'
import {ComingSoonCrudComponent} from './components/coming-soon-crud/coming-soon-crud.component'
import {MenuComponent} from './components/menu/menu.component'

const routes: Routes = [
  {path:'',component:MenuComponent},
  {path:'crud/billboard',component:BillboardCrudComponent},
  {path:'crud/comingsoon',component:ComingSoonCrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
