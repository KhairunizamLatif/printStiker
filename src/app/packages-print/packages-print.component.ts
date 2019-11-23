import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-a-print',
  templateUrl: './packages-print.component.html',
  styleUrls: ['./packages-print.component.scss']
})
export class PackagesPrintComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  print(): void {

    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'height=500,width=900');
    popupWin.document.open();
    popupWin.document.write(`
                            <style>
                            @media print {
                                @page  {
                                    size: 4in 2in;                                
                                    margin: 0;                                
                                }
                                 
                                body {
                                    margin: 0;
                                }
                               
                                img {
                                    width: 4in;
                                    height: 2in;
                                }  
                            }
                            </style>
                            <body>
                                <div class="to-print"> ${printContents} </div>
                            </body>
                            </html>
                            `
    );
  }
}

