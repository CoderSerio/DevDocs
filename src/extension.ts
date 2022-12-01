import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('DevDocs! Add more docs you need into VSCode now: https://github.com/CoderSerio/developer-sites-in-vscode');
    // console.log(context);
    // let disposable = vscode.commands.registerCommand('developer-sites-in-vscode.helloWorld', () => {
	// });
	vscode.window.showInformationMessage('DevDocs! Add more docs you need into VSCode now: https://github.com/CoderSerio/developer-sites-in-vscode');
	require('./open-sites')(context);
}

export function deactivate() {
	console.log('');
}
