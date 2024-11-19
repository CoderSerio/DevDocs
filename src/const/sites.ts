import { ViewColumn } from "vscode";

const vscode = require("vscode");

export interface Site {
  path: string;
  cmd: string;
  tag: string;
  title: string;
  position:
    | ViewColumn
    | {
        readonly viewColumn: ViewColumn;
        readonly preserveFocus?: boolean | undefined;
      };
  options: {
    enableScripts: boolean;
    [key: string]: string | boolean | number;
  };
  callback?: (...params: any) => any;
}

const cmdPrefix = "developer-sites-in-vscode.";
const defaultTag = "DSIV";
const defaultPosition = vscode.ViewColumn.One;
const defaultOptions = {
  enableScripts: true,
};

// 未来或许会优化成JSON格式，这样在package.json中配置命令的时候就会方便许多
export const sites: Array<Site> = [
  {
    title: "Carbon's Blog",
    path: "https://coder-serio-github-io.vercel.app/",
    cmd: `${cmdPrefix}openAuthorBlog`,
    position: defaultPosition,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Vue",
    path: "https://cn.vuejs.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openVueDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Qian Kun",
    path: "https://qiankun.umijs.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openQianKunDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "React",
    path: "https://react.docschina.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openReactDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Tailwindcss",
    path: "https://tailwindcss.com/docs/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openTailwindcssDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Xiao Lin Coding",
    path: "https://xiaolincoding.com/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openXiaoLinCodingDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Node",
    path: "https://nodejs.org/en/docs/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openNodeDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Next",
    path: "https://nextjs.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openNextDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Nuxt",
    path: "https://nuxtjs.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openNuxtDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Vuex",
    path: "https://vuex.vuejs.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openVuexDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Pinia",
    path: "https://pinia.vuejs.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openPiniaDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Webpack",
    path: "https://webpack.js.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openWebpackDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "TypeScript",
    path: "https://www.typescriptlang.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openTypeScriptDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Deno",
    path: "https://deno.land/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openDenoDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "MDN",
    path: "https://developer.mozilla.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openMDNDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "W3C",
    path: "https://www.w3.org/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openW3CDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Styled Components",
    path: "https://styled-components.com/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openStyledComponentsDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
  {
    title: "Svelet",
    path: "https://svelte.dev/",
    position: defaultPosition,
    cmd: `${cmdPrefix}openSvelteDoc`,
    tag: defaultTag,
    options: defaultOptions,
  },
];
