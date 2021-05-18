const baseUrl = 'http://127.0.0.1:8080';
// const baseUrl = 'http://106.52.105.214:13001';
const config = {
    // https://projects.scratch.mit.edu 代理地址
    proxyUrl: baseUrl, // webpack.config.js
    // https://assets.scratch.mit.edu  静态资源
    assetsUrl: baseUrl, // src/containers/library.item.jsx  src/lib/project-fetcher-hoc.jsx
    // https://projects.scratch.mit.edu  保存路径
    projectUrl: baseUrl // src/lib/project-fetcher-hoc.jsx

};
export {config};
