// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';



export function activate(context: vscode.ExtensionContext) {
	console.log('激活成功，装置已启动!');
    console.log(context);
    // let disposable = vscode.commands.registerCommand('developer-sites-in-vscode.helloWorld', () => {
	// 	vscode.window.showInformationMessage('Hello World from Developer Sites in VSCode!');
	// });

	// context.subscriptions.push(disposable);
	require('./open-sites')(context);
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log('到此...到此为止了吗...');
}
