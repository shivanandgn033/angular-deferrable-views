import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-largetable',
  imports: [CommonModule],
  templateUrl: './largetable.component.html',
  styleUrl: './largetable.component.css',
})
export class LargetableComponent implements OnInit {

  @Input()  data: any[] = [];

  ngOnInit() {
    // Simulate a 2-second delay
    setTimeout(() => {
      // Data processing or any other logic that would normally take time
      console.log('Data loaded after delay');
    }, 2000);
  }
}
