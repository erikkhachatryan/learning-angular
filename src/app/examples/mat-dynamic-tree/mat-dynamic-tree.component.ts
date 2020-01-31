import { Component, OnInit } from '@angular/core';
import {DynamicDatabase, DynamicDataSource, DynamicFlatNode} from './mat-dynamic-tree.model';
import {FlatTreeControl} from '@angular/cdk/tree';

@Component({
  selector: 'app-mat-dynamic-tree',
  templateUrl: './mat-dynamic-tree.component.html',
  styleUrls: ['./mat-dynamic-tree.component.css']
})
export class MatDynamicTreeComponent implements OnInit {

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
