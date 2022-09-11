const util = require('./utils');
import * as vscode from 'vscode';

function getWebviewContent (url: string): string {
    return `<iframe src="${url}" style="width:100vw;height:100vh;"/>`
}

module.exports = function (context: vscode.ExtensionContext, sitePath: string) {
    console.log(sitePath);
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openSite', () => {
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "developer-sites-in-vscode by SWPU-LEC", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        panel.webview.html = getWebviewContent('https://serio.gitee.io/index.html');  
    }));
};