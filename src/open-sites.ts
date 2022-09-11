const util = require('./utils');
import * as vscode from 'vscode';

function getWebviewContent (url: string): string {
    return `<iframe src="${url}" style="width:100vw;height:100vh;"/>`
}

module.exports = function (context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openAuthorBlog', () => {
        const sitePath = 'https://serio.gitee.io/';
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "Serio的个人博客", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        console.log(vscode.window);
        panel.webview.html = getWebviewContent(sitePath);  
        vscode.window.showInformationMessage(`${sitePath}开启成功`)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openVueDoc', () => {
        const sitePath = 'https://cn.vuejs.org/';
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "Vue Doc", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        console.log(vscode.window);
        panel.webview.html = getWebviewContent(sitePath);  
        vscode.window.showInformationMessage(`${sitePath}开启成功`)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openQianKunDoc', () => {
        const sitePath = 'https://qiankun.umijs.org/zh/guide';
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "qiankun Doc", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        console.log(vscode.window);
        panel.webview.html = getWebviewContent(sitePath);  
        vscode.window.showInformationMessage(`${sitePath}开启成功`)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openReactDoc', () => {
        const sitePath = 'https://react.docschina.org/docs/getting-started.html';
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "React Doc", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        console.log(vscode.window);
        panel.webview.html = getWebviewContent(sitePath);  
        vscode.window.showInformationMessage(`${sitePath}开启成功`)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openNodeDoc', () => {
        const sitePath = 'https://nodejs.org/zh-cn/docs/';
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "Node Doc", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        console.log(vscode.window);
        panel.webview.html = getWebviewContent(sitePath);  
        vscode.window.showInformationMessage(`${sitePath}开启成功`)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openTailwindcssDoc', () => {
        const sitePath = 'https://tailwindcss.com/docs/installation/';
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "Tailwindcss Doc", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        console.log(vscode.window);
        panel.webview.html = getWebviewContent(sitePath);  
        vscode.window.showInformationMessage(`${sitePath}开启成功`)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openECMAScript6Doc', () => {
        const sitePath = 'https://es6.ruanyifeng.com/';
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "ECMAScript6 Doc", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        console.log(vscode.window);
        panel.webview.html = getWebviewContent(sitePath);  
        vscode.window.showInformationMessage(`${sitePath}开启成功`)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openTOCODE', () => {
        const sitePath = 'https://tocode.store/';
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "TOCODE 智能物联协会", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        console.log(vscode.window);
        panel.webview.html = getWebviewContent(sitePath);  
        vscode.window.showInformationMessage(`${sitePath}开启成功`)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openNetworkDoc', () => {
        const sitePath = 'https://xiaolincoding.com/network/';
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "Network Doc", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        console.log(vscode.window);
        panel.webview.html = getWebviewContent(sitePath);  
        vscode.window.showInformationMessage(`${sitePath}开启成功`)
    }));
    context.subscriptions.push(vscode.commands.registerCommand('developer-sites-in-vscode.openOSDoc', () => {
        const sitePath = 'https://xiaolincoding.com/os/';
        const panel = vscode.window.createWebviewPanel(
            'DSIV', // viewType
            "OS Doc", // 标题
            vscode.ViewColumn.One, // tabBar所在的位置,
            {
                enableScripts: true, // 是否启用JS
            }
        );
        // const global = { panel };
        console.log(vscode.window);
        panel.webview.html = getWebviewContent(sitePath);  
        vscode.window.showInformationMessage(`${sitePath}开启成功`)
    }));
};