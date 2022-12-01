import util from './utils';
import * as vscode from 'vscode';
import { Site, sites } from './const/sites';

function getWebviewContent (url: string): string {
    return `<iframe src="${url}" style="width:100vw;height:100vh;"/>`;
}

const loadHandler = (site: Site, callbackParams: any = null) => {
    const panel = vscode.window.createWebviewPanel(
        site.tag,
        site.title,
        site.position,
        site.options
    );
    panel.webview.html = getWebviewContent(site.path);
    site?.callback?.(callbackParams);
};

const load = (context: vscode.ExtensionContext, site: Site) => {
    const subscription = vscode.commands.registerCommand(site.cmd, () => {
        loadHandler(site);
    });
    context.subscriptions.push(subscription);
};

module.exports = function (context: vscode.ExtensionContext) {
    sites.forEach((site) => {
        load(context, site);
    });
};