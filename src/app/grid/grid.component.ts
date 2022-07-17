import { Component, OnInit } from '@angular/core';
import { DataSource3Service } from '../services/data-source-3.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public dataSource3Table1: any = null;

  constructor(
    private dataSource3Service: DataSource3Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource3Service.getData('Table1').subscribe(data => this.dataSource3Table1 = data);
  }
}
