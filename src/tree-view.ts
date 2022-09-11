// import * as vscode from 'vscode';
// import * as fs from 'fs';
// import * as path from 'path';

// class Node extends vscode.TreeItem {
//     constructor (
//         public readonly label: string,
//         private version: string,
//         public readonly collapsibleState: vscode.TreeItemCollapsibleState
//     ) {
//         super(label, collapsibleState);
//         this.tooltip = `${this.label}-${this.version}`;
//         this.description = 'made by SWPU-LEC';
//     }
// }


// export class TreeViewProvider implements vscode.TreeDataProvider<Node> {
//     constructor (private workspaceRoot: string) {

//     }
    
//     private pathExists(p: string): boolean {
//         try {
//             fs.accessSync(p);
//         } catch (e) {            
//             return false;
//         }
//         return true;
//     }           

//     private getDepsInPackageJson(packageJsonPath: string): Node[] {
//         if (this.pathExists(packageJsonPath)) {
//             const toDep = (moduleName: string, versionL string): Node => {
//                 const depPackageJsonPath = path.join(this.workspaceRoot, 'node')
//                 const collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
//             }
//         }
//     }


//     getTreeItem (element: Node): vscode.TreeItem {
//         return element
//     }

//     getChildren (element: Node): Thenable<Node[]> {
//         if (!this.workspaceRoot) {
//             vscode.window.showInformationMessage('the workspace is empty!');
//             return Promise.resolve([]);
//         }

//         if (element) {
//             return Promise.resolve(
                
//             )
//         }
//     }
// }