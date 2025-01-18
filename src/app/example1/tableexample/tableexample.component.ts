import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargetableComponent } from '../largetable/largetable.component';

@Component({
  selector: 'app-tableexample',
  imports: [CommonModule,LargetableComponent],
  templateUrl: './tableexample.component.html',
  styleUrl: './tableexample.component.css'
})
export class TableexampleComponent  implements OnInit {
  showTable = false;

  tableData:any[]=[];
  ngOnInit() {
    // Simulate a 2-second delay
    setTimeout(() => {
      // Data processing or any other logic that would normally take time
      this.tableData = Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Item ${i}` })); 
      console.log('Data loaded after delay');
    }, 2000);
  }

}
