
Let's dive into more detailed examples of deferrable views in Angular 19, covering various scenarios and advanced use cases.

#### Deferring a Large Table with Interaction Trigger

Imagine you have a large data table that's not immediately needed by the user. Deferring it until the user clicks a button can drastically improve initial load time.

TypeScript
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-example',
  template: `
    <button (click)="showTable = true">Show Data Table</button>

    @defer (on interaction; when showTable) {
      <large-table [data]="tableData"></large-table>
    } @placeholder {
      <p>Click the button to load the table.</p>
    } @loading {
      <p>Loading table data...</p>
    } @error {
      <p>Error loading table.</p>
    }
  `,
  standalone: true,
  imports: [CommonModule, LargeTableComponent]
})
export class TableExampleComponent {
  showTable = false;
  tableData = Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Item ${i}` })); // Simulate large data
}

@Component({
  selector: 'large-table',
  template: `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of data">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
  `,
  standalone: true,
  imports: [CommonModule],
  inputs: ['data']
})
export class LargeTableComponent {
  data: any[] = [];
}
```
##### Key improvements:

on interaction trigger: The table is only loaded when the button is clicked.
when showTable condition: This ensures that even if the interaction occurs multiple times, the table is only loaded once. This is crucial for preventing unnecessary reloads.
Simulated large data: The tableData simulates a large dataset to demonstrate the performance benefits of deferral.
