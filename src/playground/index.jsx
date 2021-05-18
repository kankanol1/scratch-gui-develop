// Polyfills
import 'es6-object-assign/auto';
import 'core-js/fn/array/includes';
import 'core-js/fn/promise/finally';
import 'intl'; // For Safari 9

import React from 'react';
import ReactDOM from 'react-dom';

// 入口文件
import analytics from '../lib/analytics';// 网站监控统计
import AppStateHOC from '../lib/app-state-hoc.jsx';// 初始化钩子函数
import BrowserModalComponent from '../components/browser-modal/browser-modal.jsx';// 浏览器模型
import supportedBrowser from '../lib/supported-browser';// 判断浏览器是否支持

import styles from './index.css';// 全局样式

// Register "base" page view
analytics.pageview('/');// 注册首页

const appTarget = document.createElement('div'); // 创建初始化页面盒子
appTarget.className = styles.app;
document.body.appendChild(appTarget); // 添加到DOM树

if (supportedBrowser()) {
    // require needed here to avoid importing unsupported browser-crashing code
    // at the top level
    // 开始进入项目渲染
    require('./render-gui.jsx').default(appTarget);

} else {
    BrowserModalComponent.setAppElement(appTarget);
    const WrappedBrowserModalComponent = AppStateHOC(BrowserModalComponent, true /* localesOnly */);
    const handleBack = () => {};
    // eslint-disable-next-line react/jsx-no-bind
    ReactDOM.render(<WrappedBrowserModalComponent onBack={handleBack} />, appTarget);
}
