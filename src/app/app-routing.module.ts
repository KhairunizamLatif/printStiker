import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PackagesPrintComponent} from "./packages-print/packages-print.component";


const routes: Routes = [
  {path:'', component: PackagesPrintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
