import { Component, OnInit } from '@angular/core';
import {DynamicDatabase, DynamicDataSource, DynamicFlatNode} from './tree-data';
import {FlatTreeControl} from '@angular/cdk/tree';

@Component({
  selector: 'app-mat-dynamic-tree-test',
  templateUrl: './mat-dynamic-tree-test.component.html',
  styleUrls: ['./mat-dynamic-tree-test.component.css']
})
export class MatDynamicTreeTestComponent implements OnInit {

  constructor(database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    this.dataSource.data = database.initialData();
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  ngOnInit() {
  }

}
