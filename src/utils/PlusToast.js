// ... 上面的 JavaScript 代码 ...
// (function(){
function PlusToast(options) {
    this.options = {
        message: '', // 消息内容
        duration: 3000, // 显示时长，单位毫秒
        className: '', // 自定义类名
        ...options,
    };
    this.init();
}
PlusToast.prototype = {
    constructor: PlusToast,
    init: function () {
        this.createToast();
        this.show();
        this.hideAfter(this.options.duration);
    },
    createToast: function () {
        const css = '.success { background-color: green !important; } \n' +
            '.error { background-color: red !important; } \n' +
            '.info { background-color: orange !important; } \n' +
            '.warning { background-color: #e1c32c !important; } \n';
        //两种方法都可以添加样式表
        // const sheet = new CSSStyleSheet();
        // sheet.replaceSync(css);
        // document.adoptedStyleSheets = [sheet];
        const $style = document.createElement('style');
        $style.setAttribute('type', 'text/css');
        $style.textContent = css;
        document.head.appendChild($style);
        // 创建 toast 元素
        this.toast = document.createElement('div');
        this.toast.classList.add('toast');
        if (this.options.className) {
            this.toast.classList.add(this.options.className);
        }
        this.toast.innerHTML = this.options.message;
        // 添加样式
        this.toast.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        border-radius: 5px;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
      `;
        // 添加到页面
        document.body.appendChild(this.toast);
    },
    show: function () {
        // 显示 toast
        setTimeout(() => {
            this.toast.style.opacity = 1;
        }, 0);
    },
    hide: function () {
        // 隐藏 toast
        this.toast.style.opacity = 0;
        setTimeout(() => {
            this.toast.remove();
        }, 300); // 与 transition 时长保持一致
    },
    hideAfter: function (delay) {
        // 延迟隐藏
        setTimeout(() => {
            this.hide();
        }, delay);
    },
};
// 使用示例
export function showToast(message, options) {
    new PlusToast({ message, ...options });
}
// })();