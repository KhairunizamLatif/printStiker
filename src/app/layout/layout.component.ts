import { Component, OnInit } from '@angular/core';
import {ScrollingPageComponent} from "../scrolling-page/scrolling-page.component";
import {PackagesPrintComponent} from "../packages-print/packages-print.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  list = [
    {path: "/scrolling", component: ScrollingPageComponent , name: "scroll"},
    {path: "/print", component: PackagesPrintComponent, name: "Print"}
  ]

  ngOnInit() {
  }

}
