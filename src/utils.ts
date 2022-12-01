const fs = require('fs');
const os = require('os');
const path = require('path');
const vscode = require('vscode');
const exec = require('child_process').exec;

const util = {
    log: function (params: any) {
        console.log(params);
    },
    error: function (params: any) {
        console.error(params);
    },
    showError: function (params: any) {
        vscode.window.showError(params);
    }
};

export default util;