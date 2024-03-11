import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
    root: path.join(__dirname, 'docs'),
    title: 'Vue vapor 源码揭秘',
    description: '对 Vue vapor 源码的阅读 & 分析文档',
    icon: '/rspress-icon.png',
    logo: {
        light: '/title.png',
        dark: '/title.png',
    },
    themeConfig: {
        socialLinks: [
          { icon: 'github', mode: 'link', content: 'https://github.com/Mumujianguang/research-vue-vapor' },
        ],
    },
});
