import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PackagesPrintComponent} from "./packages-print/packages-print.component";
import {ScrollingPageComponent} from "./scrolling-page/scrolling-page.component";
import {LayoutComponent} from "./layout/layout.component";


const routes: Routes = [

      {path:'', component: ScrollingPageComponent},
      {path:'print', component: PackagesPrintComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
