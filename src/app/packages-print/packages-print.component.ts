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
body {
  background: rgb(204,204,204); 
}
page {
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}
page[size="A4"] {  
  width: 21cm;
  height: 29.7cm; 
}
page[size="A4"][layout="portrait"] {
  width: 29.7cm;
  height: 21cm;  
}
@media print {
  body, page {
    margin: 0;
    box-shadow: 0;
  }
}
</style>
    <body onload="window.print();window.close()">
    <div class="to-print">
    ${printContents}
</div>
</body>
      </html>`
    );
    popupWin.document.close();
  }
}

