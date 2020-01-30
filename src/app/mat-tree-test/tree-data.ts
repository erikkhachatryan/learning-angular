export interface TreeNode {
  name: string;
  chter?: TreeNode[];
}

export const TREE_DATA: TreeNode[] = [
  {
    name: 'Fruit',
    chter: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    chter: [
      {
        name: 'Green',
        chter: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        chter: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

export interface FlatTreeNode {
  expandable: boolean;
  name: string;
  level: number;
}

export interface TreeNodeTransformer {
  (node: TreeNode, level: number): FlatTreeNode;
}

export interface TreeNodeHasChildren {
  (index: number, node: FlatTreeNode): boolean;
}