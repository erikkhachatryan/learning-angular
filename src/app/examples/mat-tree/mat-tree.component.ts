import {Component, OnInit} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {FlatTreeNode, TREE_DATA, TreeNode, TreeNodeHasChildren, TreeNodeTransformer} from './mat-tree.model';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';

@Component({
  selector: 'app-mat-tree',
  templateUrl: './mat-tree.component.html',
  styleUrls: ['./mat-tree.component.css']
})
export class MatTreeComponent implements OnInit {

  public treeControl: FlatTreeControl<FlatTreeNode>;
  public treeFlattener: MatTreeFlattener<TreeNode, FlatTreeNode>;
  public dataSource: MatTreeFlatDataSource<TreeNode, FlatTreeNode>;
  private transformer: TreeNodeTransformer;
  private hasChild: TreeNodeHasChildren;

  constructor() {
  }

  ngOnInit() {
    this.treeControl = new FlatTreeControl<FlatTreeNode>(
      node => {
        return node.level;
      },
      node => {
        return node.expandable;
      }
    );
    this.transformer = (node: TreeNode, level: number) => {
      return {
        expandable: !!node.chter && node.chter.length > 0,
        name: node.name,
        level: level,
      } as FlatTreeNode;
    };
    this.treeFlattener = new MatTreeFlattener(this.transformer,
      node => {
        return node.level;
      },
      node => {
        return node.expandable;
      },
      node => {
        return node.chter;
      });
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataSource.data = TREE_DATA;
    this.hasChild = (index: number, node: FlatTreeNode) => {
      return node.expandable;
    };
  }

  private addItem() {

  }
}
