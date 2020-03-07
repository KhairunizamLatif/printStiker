import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling-page',
  templateUrl: './scrolling-page.component.html',
  styleUrls: ['./scrolling-page.component.scss']
})
export class ScrollingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  private noOfItemsToShowInitially: number = 21;
  // itemsToLoad - number of new items to be displayed
  private itemsToLoad: number = 10;
  // 18 items loaded for demo purposes
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  // List that is going to be actually displayed to user
  public itemsToShow = this.items.slice(0, this.noOfItemsToShowInitially);
  // No need to call onScroll if full list has already been displayed
  public isFullListDisplayed: boolean = false;

  onScroll() {
    if (this.noOfItemsToShowInitially <= this.items.length) {
      // Update ending position to select more items from the array
      this.noOfItemsToShowInitially += this.itemsToLoad;
      this.itemsToShow = this.items.slice(0, this.noOfItemsToShowInitially);
      console.log("scrolled");
    } else {
      this.isFullListDisplayed = true;
    }
  }
}
