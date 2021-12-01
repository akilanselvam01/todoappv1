import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoappv1';
  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat'},
    { description: 'sleep' },
    { description: 'play' },
    { description: 'laugh' },
  ];

  Upd = 'Updated Values are Added'
  
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter);
  }
  addItem(description: string) {
    this.allItems.unshift({
      description
    });
  }


}
